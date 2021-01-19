//question 1 - Counting Sheep

function countingSheep(sheep) {
    //base case
    if (sheep === 0) {
        return 'All sheep jumped over the fence'
    }

    //recursive case
    return sheep + ": Another sheep jumps over the fence " + (countingSheep(sheep - 1));
}

//question 2 - Power Calculator
function powerCalculator(intBase, intExponent) {
    //base case
    if (intExponent < 0) {
        return 'exponent should be >= 0'
    }
    if (intExponent === 1) {
        return intBase;
    }
    if (intExponent === 0) {
        return 1;
    }

    //recursive case
    return intBase * powerCalculator(intBase, intExponent - 1);

}


//question 3 - Reverse String
function reverseString(str) {
    //base case
    if (str === "") {
        return "";
    }

    //recursive case
    let backSlicedStr = str.substring(0, str.length - 1)
    return str.charAt(str.length - 1) + reverseString(backSlicedStr)
}

//question 4 - nth Triangular Number

function triangular(n) {
    if (n === 1) {
        return n;
    }
    else {
        return n + triangular(n - 1)
    }
}

//question 5 - String Splitters




//question 6 - Fibonacci

// function fibonacci(num) {
//     if (num === 0) {
//         return (num + 1 + ", ")
//     }
// }


//question 7 - Factorial
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1)
}


//question 8 - find a way out of the maze
function maze(n, m) {

}

$('.question').html(factorial(5))
//question 9

//question 10

//question 11

//question 12






