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

//question 11 - Organization Chart 
/**
 * Organization chart
 * Printing out a single level should be simple: just loop through the keys and
 * print them.  Then you can recurse into the object to print the deeper levels.
 * For keeping track of the indent level, pass an increasing integer through
 * each recursive call.
 */

 function printOrgChart(orgChart, indent = 0) {
     //Implicit base case is that there are no deeper levels in the org chart
     let spaces = "  ".repeat(indent);
     for (let key in orgChart) {
         console.log(spaces + key);
         printOrgChart(orgChart[key], indent + 1);
     }
 }

const organization = {
    Zuckerberg: {
      Schroepfer: {
        Bosworth: {
          Steve: {},
          Kyle: {},
          Andra: {},
        },
        Zhao: {
          Richie: {},
          Sofia: {},
          Jen: {},
        },
        Badros: {
          John: {},
          Mike: {},
          Pat: {},
        },
        Parikh: {
          Zach: {},
          Ryan: {},
          Tes: {},
        },
      },
      Schrage: {
        VanDyck: {
          Sabrina: {},
          Michelle: {},
          Josh: {},
        },
        Swain: {
          Blanch: {},
          Tom: {},
          Joe: {},
        },
        Frankovsky: {
          Jasee: {},
          Brian: {},
          Margaret: {},
        },
      },
      Sandberg: {
        Goler: {
          Eddie: {},
          Julie: {},
          Annie: {},
        },
        Hernandez: {
          Rowi: {},
          Inga: {},
          Morgan: {},
        },
        Moissinac: {
          Amy: {},
          Chuck: {},
          Vinni: {},
        },
        Kelley: {
          Eric: {},
          Ana: {},
          Wes: {},
        },
      },
    },
  };


//question 12 - Binary Representation
/**
 * Binary representation
 * What's the base case? If the value is just 0 or 1, then that's the binary
 * representation.
 * Approach: Slice off one bit at a time, working out whether it's zero or one,
 * until we only have a single bit left (the base case).
 * How do we work out whether a single bit is 0 or 1?
 * Even numbers have a 0 as the smallest bit, and odd numbers have a 1 as the
 * smallest bit.  So we can use a modulo 2 to isolate a single bit.
 * How do we move through the bits?  Dividing by two is the same as
 * shifting off a single bit.
 * For example, decimal 10 is binary 1010.  Decimal 5 is 101.  Notice how to
 * divide by two, we have just chopped off the last bit.
 */

function toBinary(input) {
    if (input === 0 || input === 1) {
      return String(input);
    }
  
    let leastSignificantBit = input % 2;
    let otherBits = Math.floor(input / 2);
    return toBinary(otherBits) + String(leastSignificantBit);
  }
  
  for (let i=0; i<10; i++) {
    console.log(toBinary(i));
  }





