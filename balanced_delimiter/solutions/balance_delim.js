function returnOpposite(delim){
    if (delim == ')'){
        return '(';
    }
    else if (delim == ']'){
        return '[';
    }
    else if (delim == '}'){
        return '{';
    }
} 

function count(array, value){
    var count = 0;

    for(var i = 0; i < array.length; i++){

        if(array[i] == value){
            count++;
        }
    }

    return count;
}

function isBalanced(delims){
    var prevDelims = [];
    var delimiters = delims.split("");

    delimiters.forEach(delim => {
        if (prevDelims.length <= 1){
            prevDelims.push(delim);
        } 
        else if (prevDelims.length > 1){
            if(delim === '(' || delim === '[' || delim === '{'){
                prevDelims.push(delim);
            }
            if(delim === ')' || delim === ']' || delim === '}'){
                var opposite = returnOpposite(delim);
                if(prevDelims.includes(opposite) && count(prevDelims, opposite) == 1){
                    prevDelims.push(delim);    
                }
                else if(count(prevDelims, opposite) > 1 && count(prevDelims, delim) != count(prevDelims, opposite)){
                    return false;
                }
                else{
                    return false;
                }
            }
        }
    });

    if(count(prevDelims, '(') != count(prevDelims, ')') || count(prevDelims, '[') != count(prevDelims, ']') || count(prevDelims, '{') != count(prevDelims, '}')){
        return false;
    }
    else{
        return true;
    }
}


var delimiters = '([])';

console.log(isBalanced(delimiters));