const os = require('os');

// Get free memory in bytes
const freeMemoryBytes = os.freemem();
console.log(`Free memory: ${freeMemoryBytes} bytes`);

// Convert to megabytes (optional)
const freeMemoryMB = (freeMemoryBytes / (1024 * 1024)).toFixed(2);
console.log(`Free memory: ${freeMemoryMB} MB`);

console.log(os.tmpdir())