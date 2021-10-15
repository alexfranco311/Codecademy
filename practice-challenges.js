//practice challenge answers

const convertToBaby = (input) => {
    var babyArray = new Array;
    for(let i = 0; i < input.length; i++){
      babyArray.push(`baby ${input[i]}`);
    } return babyArray
  };
  
console.log('------------------------------------------------');

//option one
const shoutGreetings = (input) => {
    var loudGreetings = new Array();
    for(let i = 0; i < input.length; i++){
      loudGreetings.push(`${input[i]}!`);
    } return loudGreetings.map(u =>{return u.toUpperCase()});
  };
// option two
const shoutGreetings = (input) => {
  const newArray = input.map(x => {
    x += '!'; 
    return x.toUpperCase();
  }
 )
return newArray;
};

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

  onsole.log('------------------------------------------------');

let reverseArray = (input) => {
  var revArray = new Array;
  for(var i = input.length-1; i >= 0; i--) {
    revArray.push(input[i]);
    } return revArray;
  };
const sentence = ['sense.','make', 'all', 'will', 'This'];
  
console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

console.log('------------------------------------------------');

const greetAliens = (input) => {
  for(let string of input){
    console.log(`Oh powerful ${string}, we humans offer our unconditional surrender!`)
    }
};
 
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 

console.log('------------------------------------------------');

const convertToBaby = (input) => {
  var babyArray = new Array;
  for(let i = 0; i < input.length; i++){
    babyArray.push(`baby ${input[i]}`);
  } return babyArray
};
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

console.log('------------------------------------------------');

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];
    // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];
    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
      j = 1;
      while (j < number) {
        j = j * 2;
      }
      results.push(j);
    }
  return results
};

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

console.log('------------------------------------------------');

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

const squareNums = (arr) => {
  return arr.map(toSquare);
}; 

console.log(squareNums(numbers));

console.log('------------------------------------------------');

const sortYears = (years) => {
  return years.sort().reverse();
};

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

console.log('------------------------------------------------');


console.log('------------------------------------------------');


console.log('------------------------------------------------');


console.log('------------------------------------------------');


console.log('------------------------------------------------');


console.log('------------------------------------------------');
