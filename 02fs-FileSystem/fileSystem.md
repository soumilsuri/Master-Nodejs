### **File System (fs) Module in Node.js**

The `fs` module in Node.js provides methods to interact with the file system. You can read, write, append, and delete files both synchronously (blocking) and asynchronously (non-blocking).

#### **1. Importing the `fs` Module**
To use the `fs` module, first import it in your file.

```js
const fs = require('fs');
```

### **2. Reading Files**

- **Asynchronous:**
```js
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

- **Synchronous:**
```js
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```

### **3. Writing Files**

- **Asynchronous:**
```js
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File has been written!');
});
```

- **Synchronous:**
```js
fs.writeFileSync('example.txt', 'Hello, World!');
console.log('File has been written!');
```

### **4. Appending to Files**

- **Asynchronous:**
```js
fs.appendFile('example.txt', ' Appending some text!', (err) => {
  if (err) throw err;
  console.log('File has been updated!');
});
```

- **Synchronous:**
```js
fs.appendFileSync('example.txt', ' Appending some text!');
console.log('File has been updated!');
```

### **5. Deleting Files (Unlink)**

- **Asynchronous:**
```js
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});
```

- **Synchronous:**
```js
fs.unlinkSync('example.txt');
console.log('File deleted!');
```

### **Synchronous vs Asynchronous**
- **Synchronous** methods block the execution of further code until the file operation completes.
- **Asynchronous** methods are non-blocking, meaning other code can run while the file operation is happening in the background.

This guide shows both approaches so you can choose the right one based on your use case!