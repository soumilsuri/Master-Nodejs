# Getting Started with Mongoose

Mongoose is an elegant MongoDB object modeling library for Node.js. It allows you to define schemas and models, providing a clear and structured approach to interact with MongoDB collections.

## Installation
To get started with Mongoose, you first need to install it in your Node.js project. You can do this by running the following command in your project directory:

```bash
npm i mongoose
```

This installs Mongoose as a dependency, allowing you to define schemas, create models, and interact with your MongoDB database.

## Mongoose Workflow

### 1. Schema Definition
A **schema** in Mongoose defines the structure of documents within a MongoDB collection. It acts as a blueprint, specifying the fields and data types allowed in a document.

Example schema for a `User`:
```js
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true }
}, { timestamps: true });
```
- In the example above, `userSchema` defines the fields for the `User` document, such as `username`, `email`, `password`, and `fullName`, along with constraints like `required` and `unique`.

### 2. Schema to Model
A **model** in Mongoose is a compiled version of the schema. It represents the interface through which we interact with the database. Once a schema is defined, it is converted into a model, which allows you to create, read, update, and delete (CRUD) documents from the collection.

```js
export const User = mongoose.model("User", userSchema);
```
- Here, `User` is the model created from the `userSchema`. This model allows us to interact with the `users` collection in the MongoDB database.

### 3. CRUD Operations Using Models
Once we have a model, we can perform CRUD operations on the MongoDB collection it represents. Typical operations include:

- **Create**: Adding a new document to the collection.
- **Read**: Fetching documents from the collection.
- **Update**: Modifying an existing document.
- **Delete**: Removing a document from the collection.

Example:
```js
// Create a new user
const newUser = new User({
    username: "johndoe",
    email: "john.doe@example.com",
    password: "password123",
    fullName: "John Doe"
});
await newUser.save();
```
This creates and saves a new `User` document to the `users` collection.

## What Are Models?

A **model** is a wrapper around a Mongoose schema, providing an interface for interacting with the MongoDB collection that the schema is mapped to. Models handle the creation, reading, updating, and deleting of documents in the collection.

Here’s an example of a `Likes` model with relationships to other collections (`User`, `Video`, `Comment`):

```js
const likesSchema = new mongoose.Schema({
    video: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
    likedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});
export const Likes = mongoose.model("Likes", likesSchema);
```

In this example:
- `Likes` is a model built from `likesSchema`, which includes references to other collections like `User`, `Video`, and `Comment`.
- These **references** allow Mongoose to establish relationships between documents in different collections using `mongoose.Schema.Types.ObjectId` and the `ref` option.

## Conclusion

Mongoose simplifies database interactions by providing a structured way to define schemas and use models. With its powerful features like schema validation and references, Mongoose is an essential tool for managing MongoDB collections in Node.js applications.
