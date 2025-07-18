
function greet(){
    console.log("Hello World!");
}

function welcome() {
    console.log("Hello Ankit!");
}

function isEvenOdd(num){
    if(num % 2 == 0)
        return "Even";
    else
        return "Odd";
}

function calculateNums(math,english,programming){
        return math + programming + english;
}

export {greet , welcome, isEvenOdd, calculateNums};