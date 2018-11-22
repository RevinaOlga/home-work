(function () {

    var array1 = [1, 2, 3, 4, 5],

    array2 = ['first', 'second', 3, 4, 5, 'last'];



var result1 = getReversArray(array1),

    result2 = getReversArray(array2);



console.log('result1:', result1);

// expected result [5, 4, 3, 2, 1];



console.log('result2:', result2);

// expected result ['last', 5, 4, 3, 'second', 'first'];



function getReversArray(array) {

    var result = [];

    for (var i = 0; i < array.length; i++) {

        result[i] = array[array.length - i - 1];

    }

    return result;

}


})();

