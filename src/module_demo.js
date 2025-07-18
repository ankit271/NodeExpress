import { greet, welcome, isEvenOdd, calculateNums } from './src/info.js'


greet()
welcome()

let total = calculateNums(50,70,70);
let percentage = (total / 3)

console.log(`I got ${total} and percent ${percentage.toFixed(2)}%`);

console.log(isEvenOdd(5));