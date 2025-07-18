
function add(a, b){
    console.log(`sum of two number is ${a + b} `);
}

function multiply(a, b){
    console.log(`multiplication of two number is ${a * b} `);
}

function  division(a, b){
    try {
        if(b == 0)
            throw new Error("Denominator should not be 0");
        console.log(`division of two number is ${a / b} `);
    }
    catch(err){
        console.log(`error is ${err.message} `);
    }
}

module.exports = {add, multiply, division};