var readline = require('readline');

function count(C, length, n){
    if(n == 0){
        return 1;
    }
    else if(n < 0){
        return 0;
    }
    else if(length == 0 &&  n >= 1){
        return 0;
    }

    return count(C, length - 1, n) + count(C, length, n - C[length -1]);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter coins separated by commas: ", (answer1) => {
    var C = answer1.split(", ");
    var length = C.length;
    rl.question("Enter number to sum to: ", (answer2) => {
        var n = parseInt(answer2);
        console.log(count(C, length, n));
        rl.close();
    });
});

