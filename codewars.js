/* Challenge 1 -  Who likes it?
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
function likes(names) {
    if(names == ''){
      return 'no one likes this'
    } else if(names[0].length !== 0 && names.length == 1){
      return `${names[0]} likes this`
    } else if(names.length == 2){
      return `${names[0]} and ${names[1]} like this`
    } else if(names.length == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if(names.length >= 4) {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
};
  
/* Challenge 2 - Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter casing)
*/
function isIsogram(str){
    return !/(\w).*\1/i.test(str);
};

/* Next Challenge
*/