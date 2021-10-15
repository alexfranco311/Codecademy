//practice challenge answers

const convertToBaby = (input) => {
    var babyArray = new Array;
    for(let i = 0; i < input.length; i++){
      babyArray.push(`baby ${input[i]}`);
    } return babyArray
  };
  
console.log('------------------------------------------------');

const shoutGreetings = (input) => {
    var loudGreetings = new Array();
    for(let i = 0; i < input.length; i++){
      loudGreetings.push(`${input[i]}!`);
    } return loudGreetings.map(u =>{return u.toUpperCase()});
  };
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]