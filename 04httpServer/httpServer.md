# Building a HTTP Server in Node.js

This guide walks you through the process of setting up a basic HTTP server in Node.js, managing dependencies, logging requests, and working with ports and responses.

---

## 1. Initialize a Node.js Project

Before starting, ensure Node.js is installed on your system.

1. **Create a project directory**:
   ```bash
   mkdir http-server-node
   cd http-server-node
   ```

2. **Initialize the project**:
   ```bash
   npm init -y
   ```
   This will create a `package.json` file, which holds the metadata of your project, including dependencies and scripts.

---

## 2. `package.json` Overview

The `package.json` file will look something like this:
```json
{
  "name": "http-server-node",
  "version": "1.0.0",
  "description": "A basic HTTP server in Node.js",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js"
  },
  "dependencies": {},
  "devDependencies": {}
}
```

### Adding a Start Script

The start script allows you to run your server with a simple command:
```json
"scripts": {
  "dev": "nodemon index.js"
}
```

Now you can start your server with:
```bash
npm run dev
```

---

## 3. Managing Node Modules (Install Nodemon)

Install `nodemon` to automatically restart the server when you make changes:
```bash
npm install --save-dev nodemon
```
`nodemon` monitors your files and restarts the server when changes are detected, making development easier.

---

## 4. Understanding `req` and `res`

- **`req` (request)**: Contains details about the incoming request, such as URL, method, and headers.
- **`res` (response)**: Allows you to send a response back to the client.

### Example:
```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
```

---

## 5. Working with Ports

The `server.listen(port)` method specifies which port your server will listen on.

- **Port**: A port is like a door for the server. Multiple applications can run on the same machine, but each listens on a different port.

In the above example:
```js
server.listen(3000);
```
The server will listen on **port 3000**. To access it, open a browser and go to `http://localhost:3000`.

---

You can run the server using:
```bash
npm run dev
```