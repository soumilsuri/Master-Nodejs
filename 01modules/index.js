// In Node.js, modules are a way to organize your code into separate files and functions that can be reused across different parts of your application. You can create a module by exporting functions, objects, or variables from one file, and then import them into another file.

const math = require("./sum")

console.log(math.sum(1, 2))
console.log(math.mul(2, 3))