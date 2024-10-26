# Authentication in Node.js

Authentication is the process of verifying the identity of a user to ensure that only authorized users can access specific resources. It is crucial for security in web applications. Authentication mechanisms can either be **stateful** or **stateless**.

## What is State?

**State** refers to the data stored about a user or system at a given time. In the context of authentication, the **state** keeps track of whether a user is logged in and what permissions they have. 

### Overview of Stateful vs. Stateless Authentication
- **Stateful Authentication**: The server maintains information about user sessions.
- **Stateless Authentication**: No session is stored on the server; instead, the client holds all necessary data (like tokens). We'll explore this more in the next section.

---

## Stateful Authentication

In **stateful authentication**, the server creates and stores a **unique session ID** when a user logs in. This ID is returned to the client, and subsequent requests must include this session ID to verify the user’s identity.

### How the Session Unique ID Works:
1. The client sends **username and password** to the server.
2. Upon successful authentication, the **server generates a unique session ID** for the user.
3. This session ID acts as proof that the user is authenticated.
4. The session ID can be transferred via:
   - **Cookies**: The server sends a cookie containing the session ID to the client.
   - **Response Headers**: The session ID is included in response headers.
   - **Request Headers**: For future requests, the session ID can be sent back in request headers.

### Example: Session ID Workflow
```plaintext
1. Client → Sends username/password to the server
2. Server → Verifies user and returns a unique session ID
3. Client → Sends session ID in subsequent requests (via cookies or headers)
```

---

## Authentication Using Middleware

Middleware in Node.js helps with checking if the user is authenticated before allowing access to certain routes. It intercepts the request and decides whether to call the next middleware or reject the request.

### Middleware Authentication Flow

Below is the diagram representing how middleware checks for authentication:

![expressFlow](assets\expressFlow.png)

### Code Example for Authentication Middleware

```javascript
const authenticate = (req, res, next) => {
    const sessionID = req.cookies.sessionID; // Example using cookies

    if (sessionID && isValidSession(sessionID)) {
        next(); // Proceed to the route if session ID is valid
    } else {
        res.status(401).send('Unauthorized'); // Reject if invalid session
    }
};
```

---

## Conclusion

In stateful authentication, the server maintains a session and validates each request using the unique session ID. Middleware plays a key role in intercepting and verifying these requests before they reach the endpoint.

In the next section, we will dive deeper into **stateless authentication** using tokens like **JWT**.
