

# CommonJS and ES Modules in Node.js: Exports Explained

This document explains the differences between CommonJS and ES Modules in Node.js, focusing on how to export modules with examples.

## CommonJS Modules
CommonJS is the traditional module system in Node.js, using `require()` for imports and `module.exports` or `exports` for exports. It is synchronous and widely used in older Node.js projects.

### Exporting in CommonJS
- Use `module.exports` to export a single value, object, or function.
- Use `exports` (a shorthand for `module.exports`) to add properties to the exported object.
- If you assign a new value to `exports`, it breaks the reference to `module.exports`.

### Example: CommonJS Exports
```javascript
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

module.exports = {
add: (a, b) => a + b,
subtract: (a, b) => a - b
};

```
```javascript
const { add, subtract } = require('./math');

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

```


## ES Modules (ESM)
ES Modules are the modern standard for JavaScript modules, introduced in ECMAScript 2015 (ES6). They use `import` and `export` syntax and are supported in Node.js (with `.mjs` files or `"type": "module"` in `package.json`).

### Exporting in ES Modules
- Use `export` to export named values (functions, variables, or objects).
- Use `export default` for a single default export.
- Imports are asynchronous and support tree-shaking.

### Example: ES Modules Exports
```javascript
// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export (optional)
export default {
add,
subtract
};

```
```javascript
import { add, subtract } from './math.mjs';
// Or import default
import math from './math.mjs';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(math.add(5, 3)); // Output: 8

```

## Key Differences
| Feature                 | CommonJS                      | ES Modules                                |
|-------------------------|-------------------------------|-------------------------------------------|
| Syntax                  | `require` / `module.exports`  | `import` / `export`                       |
| File Extension          | `.js`                         | `.mjs` or `.js` (with `"type": "module"`) |
| Loading                 | Synchronous                   | Asynchronous                              |
| Default Export          | `module.exports`              | `export default`                          |
| Tree Shaking            | Not supported                 | Supported                                 |

## Configuration in Node.js
To use ES Modules in Node.js:
1. Use `.mjs` extension for ES Modules.
2. Or, add `"type": "module"` in `package.json` to treat `.js` files as ES Modules.
3. Use `.cjs` extension for CommonJS if `"type": "module"` is set in `package.json`.

## Interoperability
- CommonJS modules can be imported in ES Modules using dynamic `import()` or `createRequire`.
- ES Modules cannot be directly `require`d in CommonJS without using `import()`.

```javascript
const { createRequire } = require('module');
const require = createRequire(import.meta.url);
const { add } = require('./math.cjs');

```