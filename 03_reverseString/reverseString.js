const reverseString = function(str) {
    const array = str.split("");
    const array1 = new Array(array.length);
    let j = array.length - 1;
    for(i = 0; i < array.length; i++) {
        array1[j] = array[i];
        j--;
    }
    return array1.join("");
};

// Do not edit below this line
module.exports = reverseString;
