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

console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

console.log('------------------------------------------------');

const justCoolStuff = (arr1, arr2) => {
  let arr3 = arr1.filter(item => arr2.includes(item));
     return arr3
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

console.log('------------------------------------------------');

const isTheDinnerVegan = (arr) => {
  if(arr.every(green => green.source === "plant")){
    return true;
  } else return false;
};

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner));
// Should print false

console.log('------------------------------------------------');

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = (arr) => {
  arr.sort((a, b) => {return a.numTeeth - b.numTeeth;
    }
  ); return arr
};

console.log(sortSpeciesByTeeth(speciesArray));

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

console.log('------------------------------------------------');

const findMyKeys = (arr) => {
  let i = arr.findIndex(item => item === 'keys');
  return i
 };

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4

console.log('---------------FINAL---LEVEL--------------------');

// Write your code here:
const dogFactory = (n, b, w) => {
  let name = n;
  let breed = b;
  let weight = w;
  return {name: name, breed: breed, weight: weight}
};

console.log(dogFactory('spot', 'pit', 40));//test

console.log('------------------------------------------------');

const factorial = (num) => {
  if (num === 0 || num === 1)
  return 1;
  for(let i = num - 1; i >= 1; i--) {
     num = num * i;
  } return num
};
console.log(factorial(6));
//Prints out 720

console.log('------------------------------------------------');

const subLength = (str, char) => {
  let cancel = str.split('').map(i => !!~i.indexOf(char)).filter(i => i).length;
  if(cancel <= 1 || cancel >= 3) {
    return 0;
  } else {
      let index1 = str.indexOf(char);
      let index2 = str.lastIndexOf(char);
      let absVal = new Array(index1, index2);
      const diff = (a, b) => {
      return Math.abs((a - b) - 1);
      }
    return diff(absVal[0], absVal[1]);
  }  
};

console.log(subLength('Saturday', 'a')); // returns 6 
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0

console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');

//last challenege
//Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'