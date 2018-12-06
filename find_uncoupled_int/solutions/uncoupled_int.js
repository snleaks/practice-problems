var readline = require('readline');

function count(array, value){
    var count = 0;

    for(var i = 0; i < array.length; i++){
        if(array[i] == value){
            count++;
        }
    }
    return count;
}

function compareValues(values){
    values = values.split(", ");
    var tempValues = values.slice();

    tempValues.forEach(value => {
        if (count(values, value) == 1){
            console.log(value);
        }
    }); 
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter values seperated by commas: ", (answer) => {
    compareValues(answer);
});
