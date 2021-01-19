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
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return n;
    }
    else {
        return n + triangular(n - 1)
    }
}

//question 5 - String Splitters
function split(input, token, output = [""]) {
    if (input.length === 0) {
        return output;
    }
    
    const character = input[0];
    if (character === token) {
        output.push("")
    }
    else {
        output[output.length - 1] += character;
    }
    return split(input.slice(1), token, output)
}

//question 6 - Fibonacci
function fibonacci(num, zeroth = 0, first = 1) {
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    zeroth = num - 2;
    first = num - 1;

    return fibonacci(zeroth) + fibonacci(first);
}


//question 7 - Factorial
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1)
}


//question 8 - find a way out of the maze
function findPath(maze, x = 0, y = 0, steps = []) {
    if (x < 0 || x >= maze.length || y < 0 || y >= maze[x].length) {
        //we are out of bounds
        return false;
    }

    const current = maze[x][y];
    if (current === "e") {
        //we have found the exit
        return steps;
    }
    else if (current === "*") {
        //we have hit a wall
        return false;
    }
    else if (current === "v") {
        //we have visited this point already
        return false;
    }

    //mark that we have visited this point
    maze[x][y] = "v"

    //Notice how we don't mutate the steps array directly, so the step doesn't leak into the other recursive calls
    return (
        findPath(maze, x - 1, y, [...steps, "U"]) ||
        findPath(maze, x + 1, y, [...steps, "D"]) ||
        findPath(maze, x, y - 1, [...steps, "L"]) ||
        findPath(maze, x, y + 1, [...steps, "R"])
    )
}

//question 10 - Anagrams
function printAnagrams(word, prefix = "") {
    if (word.length <= 1) {
        return [prefix + word];
    }

    let result = [];
    for (let i = 0; i < word.length; i++) {
        //create a new string, omitting the value at position i
        let substring = word.slice(0, i) + word.slice(i + 1);
        result = result.concat(anagrams(substring, prefix + word[i]));
    }
    return result;
}

//question 11

//question 12





