function rotateArray(array, n){
    var shift = n - 1;
    for (var i = 0; i < array.length - shift; i++){
        array.splice(0, 0, array.pop());
    }

    console.log(array);
}

var array = [1, 2, 3, 4, 5];
rotateArray(array, 3);