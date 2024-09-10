# Getting Started with Express.js

## 1. About Express.js
- **Express.js** is a minimal and flexible Node.js web application framework that provides a robust set of features to build web applications and APIs.
- It simplifies HTTP server creation and routing, making development faster and easier.

## 2. Installing Express.js

### a. Initialize your Node.js project:
```bash
npm init
```
- This will create a `package.json` file where you can define your project details.
  
### b. Enable ES6 Modules:
- Add `"type": "module"` to your `package.json` file to allow the usage of ES6-style `import` statements instead of `require`.

```json
{
  "name": "express-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node index.js"
  }
}
```

### c. Install Express:
```bash
npm install express
```

## 3. Creating a Basic Express App

### a. Importing Express (Using ES6 Modules):
After setting `type: "module"`, use the `import` keyword to import the required packages.

```js
import express from 'express';
```

### b. Basic Setup:
Create a file named `index.js` and write the following code to create a basic Express application.

```js
// index.js
import express from 'express';

const app = express();  // Initialize the Express application
const port = 3000;      // Define the port for the server

// Define a simple GET endpoint for the root path "/"
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Define another GET endpoint for the "/about" path
app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

// Listen to the specified port and log when the server is up and running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
```

### c. Running the Express App:
To run the app, execute the following command:

```bash
npm run start
```

- The server will now be running on `http://localhost:3000`.

## 4. Adding Endpoints

- **Root endpoint (`/`)**:
  - Sends a welcome message.
  - Route: `app.get('/', (req, res) => { ... })`
  
- **About endpoint (`/about`)**:
  - Sends information about the site or app.
  - Route: `app.get('/about', (req, res) => { ... })`

### Example Usage:
- Navigate to `http://localhost:3000/` to see the welcome message.
- Navigate to `http://localhost:3000/about` to see the about page.
