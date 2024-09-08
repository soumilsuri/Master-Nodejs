In Node.js, modules are a way to organize your code into separate files and functions that can be reused across different parts of your application. You can create a module by exporting functions, objects, or variables from one file, and then import them into another file.

Here's how you can export and import modules in Node.js:

### 1. **Exporting a Module**
In a file called `math.js`, for example, you can export functions or variables using `module.exports`.

```js
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
```

### 2. **Importing a Module**
In another file (e.g., `app.js`), you can import the exported module using `require()`.

```js
// app.js
const math = require('./math');

const sum = math.add(5, 3);
console.log(`Sum: ${sum}`);  // Output: Sum: 8

const difference = math.subtract(5, 3);
console.log(`Difference: ${difference}`);  // Output: Difference: 2
```

This setup allows you to break your code into smaller, more manageable pieces and reuse logic across different parts of your application.
