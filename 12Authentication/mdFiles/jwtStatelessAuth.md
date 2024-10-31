# Stateless Authentication in Node.js

In **stateless authentication**, the server does not store session information. Each request must be authenticated individually, typically through a **JSON Web Token (JWT)**. Stateless authentication is often used in RESTful APIs, as it provides scalability by eliminating server-side session management.

---

## What is Stateless Authentication?

In stateless authentication:
- **Client** sends credentials (username/password) to the **server**.
- Server verifies the credentials and returns a **JWT token** to the client.
- For each request, the client includes this token, allowing the server to validate the user’s identity without managing session data.

### JWT Tokens

**JWT (JSON Web Token)** is a secure, compact, and self-contained token format used to transfer information between two parties. JWT tokens consist of:
1. **Header**: Contains metadata about the token (e.g., algorithm, token type).
2. **Payload**: Contains user information (claims).
3. **Signature**: Verifies the integrity of the token and its payload.

---

## Stateless Authentication Code Example

To set up stateless authentication in Node.js, we use **JWT** tokens. Here’s a breakdown of how it works, using middleware and utility functions:

### Folder Structure

```plaintext
src/
├── middlewares/
│   └── auth.middleware.js
├── models/
│   └── user.model.js
├── utils/
│   ├── ApiError.utils.js
│   └── asyncHandler.utils.js
```

---

### Key Components

1. **auth.middleware.js**: Contains middleware to verify the JWT token.
2. **user.model.js**: User model with schema definitions and methods for generating JWT tokens.
3. **utils**: Utility functions for handling errors and asynchronous requests.

---

### Code Walkthrough

#### Middleware: `auth.middleware.js`

The `verifyJWT` middleware checks for a valid JWT in the request headers or cookies. If valid, it extracts the user’s information, allowing the request to proceed.

```javascript
import { ApiError } from "../utils/ApiError.utils.js"; 
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

// Middleware to verify JWT token
export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        if (!user) {
            throw new ApiError(401, "Invalid Access Token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});
```

**Explanation**:
- **Token Retrieval**: Checks for `accessToken` in cookies or the `Authorization` header.
- **JWT Verification**: Uses `jwt.verify` to decode the token.
- **User Validation**: Finds the user from the decoded token ID. If valid, `next()` allows the request to proceed.

#### Utility Modules

1. **ApiError**: Custom error handling class for consistent error responses.
   ```javascript
   class ApiError extends Error {
       constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
           super(message);
           this.statusCode = statusCode;
           this.success = false;
           this.errors = errors;
           if (stack) {
               this.stack = stack;
           } else {
               Error.captureStackTrace(this, this.constructor);
           }
       }
   }

   export { ApiError };
   ```

2. **asyncHandler**: Wrapper function to handle asynchronous functions in routes/middleware, catching errors automatically.
   ```javascript
   const asyncHandler = (requestHandler) => (req, res, next) =>
       Promise.resolve(requestHandler(req, res, next)).catch(next);

   export { asyncHandler };
   ```

#### User Model: `user.model.js`

Defines the user schema and includes methods to generate **access** and **refresh** tokens.

```javascript
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    refreshToken: { type: String }
}, { timestamps: true });

// Generate Access Token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        { _id: this._id, username: this.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

// Generate Refresh Token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { _id: this._id, username: this.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

export const User = mongoose.model("User", userSchema);
```

**Explanation**:
- **Token Generation**: `generateAccessToken` and `generateRefreshToken` create JWT tokens based on user information, using secret keys and expiration times from environment variables.
  
### What is `utils`?

The **utils** directory contains reusable utility functions and classes. These include:
- **ApiError**: Custom error class for handling application-specific errors.
- **asyncHandler**: Wraps asynchronous functions, simplifying error handling in Express.

---

### Summary

Stateless authentication with JWT provides secure, session-less user authentication. Using **middleware** to verify JWT tokens, Node.js applications can ensure authenticated access without the need for server-side session storage.

For more on JWT and authentication patterns, check out [Stateless Auth with JWT](https://jwt.io/).
