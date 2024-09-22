# Connecting MongoDB with Node.js

In this section, we'll walk through how to connect a MongoDB database to a Node.js application using the `mongoose` library and environment variables stored in a `.env` file with the help of the `dotenv` package.

## 1. What is dotenv?

The `dotenv` package is used to load environment variables from a `.env` file into `process.env`. This allows you to securely store sensitive information, such as:
- MongoDB URIs
- API keys
- Database credentials
- Port numbers

These variables are kept outside your codebase, which is crucial for security and flexibility across different environments (development, testing, production).

### How to install dotenv:
You can install `dotenv` by running:
```bash
npm install dotenv
```

## 2. Connecting MongoDB in Node.js

Let’s break down the MongoDB connection logic using Mongoose.

### Code Example: MongoDB Connection

```js
import mongoose from "mongoose";
// const DB_NAME = process.env.DB_NAME; 
const DB_NAME = "masterNodeJs"; // Hardcoded DB name for now

// Function for connecting to the MongoDB database
const connectDB = async () => {
    try {
        // Connect to the MongoDB database using the URI from the .env file
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1);  // Exit process on failure
    }
}

export default connectDB;
```

### Explanation:
- `mongoose.connect()`: Establishes the connection to MongoDB. The connection string uses `process.env.MONGODB_URI`, which is stored in the `.env` file.
- The **database name** is appended to the MongoDB URI for a specific collection to be used.
- In case of a connection failure, the error is logged, and the process exits using `process.exit(1)` to signal failure.

### .env File:
The `.env` file contains environment variables that store sensitive credentials. Here's an example of what it might look like:
```
MONGODB_URI=mongodb://localhost:27017
PORT=8000
```
- `MONGODB_URI`: Stores the URI to connect to the MongoDB instance.
- `PORT`: Defines the port number on which your Node.js server runs.

## 3. Using dotenv to Load Environment Variables

To load the environment variables from the `.env` file, you need to import and configure `dotenv` in your application:

```js
import connectDB from "./db/index.js";
import dotenv from "dotenv";

// Configure dotenv to load variables from the .env file
dotenv.config({
    path: './.env'
});

// Call the connectDB function and start the server once connected
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
        console.log(`http://localhost:${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB connection failed!", err);
});
```

### Explanation:
- **`dotenv.config()`**: Loads environment variables from the `.env` file into `process.env`.
- **`connectDB()`**: Calls the MongoDB connection function.
- **`app.listen()`**: Starts the Node.js server after a successful connection to the database.

## Conclusion

By using `dotenv` to manage environment variables and Mongoose for connecting to MongoDB, you can securely and efficiently handle the connection between your Node.js app and MongoDB. This approach ensures flexibility and better security for sensitive data like database URIs.