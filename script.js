"use strict";

// JavaScript String Practice

// --------------------------------------------------------------------------

// #1 Write a JavaScript function to check whether an `input` is a string or not.

// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

const isString = function (input) {
  return typeof input === "string";
};
console.log(isString("w3resource"));
//*************************
//** Output >  true
//*************************
console.log(isString([1, 2, 4, 0]));
//*************************
//** Output >  false
//*************************

//---------------------------------------------------------------------------

// #2 Write a JavaScript function to check whether a string is blank or not.

// console.log(is_Blank('')); // true
// console.log(is_Blank('abc')); // false

const isBlank = function (string) {
  return string === "";
};
console.log(isBlank(""));
//*************************
//** Output >  true
//*************************
console.log(isBlank("abc"));
//*************************
//** Output >  false
//*************************

//---------------------------------------------------------------------------

//  #3 Write a JavaScript function to split a string and convert it into an
//     array of words.

// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

const splitString = function (strings) {
  return strings.split(" ");
};

console.log(splitString("Vasile Midrigan"));
//*************************
//** Output >  ['Vasile', 'Midrigan']
//*************************
console.log(splitString("Just split this string"));
//*************************
//** Output >  ['Just', 'split', 'this', 'string']
//*************************

// #4 Write a JavaScript function to extract a specified number of characters
//      from a string.

// console.log(truncate_string("Robin Singh",4));
// "Robi"

const truncateString = function (string, nr) {
  return string.slice(0, nr);
};
console.log(truncateString("Just chilling", 10));
//*************************
//** Output >  Just chill
//*************************
console.log(truncateString("Running with you", 8));
//*************************
//** Output >  Running
//*************************

// --------------------------------------------------------------------------

// #5 Write a JavaScript function to convert a string in abbreviated form.

// console.log(abbrev_name("Robin Singh"));
// "Robin S."

const abbreviate = function (name) {
  return name.slice(0, name.indexOf(" ") + 2) + ".";
};

console.log(abbreviate("John Smith"));
//*************************
//** Output >  John S.
//*************************
console.log(abbreviate("Lauren Mckenzie"));
//*************************
//** Output >  Lauren M.
//*************************

// --------------------------------------------------------------------------

// #6 Write a JavaScript function to hide email addresses to protect from
//     unauthorized user.

// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

const hideEmail = function (email) {
  return (
    email.slice(0, 5) + "..." + email.slice(email.indexOf("@"), email.length)
  );
};

console.log(hideEmail("vasilemidrigan@gmail.com"));
//*************************
//** Output >  vasil...@gmail.com
//*************************
console.log(hideEmail("eleonorasmith@yahoo.com"));

//*************************
//** Output >  eleon...@yahoo.com
//*************************

// --------------------------------------------------------------------------

// #7 Write a JavaScript function to parameterize a string.

// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

const parameterized = function (string) {
  return string.replaceAll(" ", "-");
};

console.log(parameterized("Searching for happiness!"));
//*************************
//** Output >  Searching-for-happiness!
//*************************
console.log(parameterized("Looking for battle!"));
//*************************
//** Output >  Looking-for-battle!
//*************************

// --------------------------------------------------------------------------

// 8 Write a JavaScript function to capitalize the first letter of a string.

// console.log(capitalize('js string exercises'));
// "Js string exercises"

const capitalizeFirstLetter = function (string) {
  const newString = string[0].toUpperCase() + string.slice(1, string.length);
  return newString;
};

console.log(capitalizeFirstLetter("searching for happiness!"));
//*************************
//** Output >  Searching-for-happiness!
//*************************
console.log(capitalizeFirstLetter("looking for battle!"));
//*************************
//** Output >  Looking-for-battle!
//*************************

// --------------------------------------------------------------------------

// #9 Write a JavaScript function to capitalize the first letter of each word
//    in a string.

// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

const xcv = "Chilling with my fellows";
console.log('xcv.split(" ")', xcv.split(" "));

const capitalizeWords = function (string) {
  let wordsCap = [];
  for (let word of string.split(" ")) {
    wordsCap.push(word[0].toUpperCase() + word.slice(1));
  }
  wordsCap = wordsCap.toString().replaceAll(",", " ");
  return wordsCap;
};

console.log(capitalizeWords("Chilling with my fellows!"));
//*************************
//** Output >  Chilling With My Fellows!
//*************************
console.log(capitalizeWords("Looking for someone just like you!"));
//*************************
//** Output >  Looking For Someone Just Like You!
//*************************

// --------------------------------------------------------------------------

// #10 Write a JavaScript function that takes a string which has lower and
//       upper case letters as a parameter and converts upper case letters to
//       lower case, and lower case letters to upper case.

// console.log(swapcase('AaBbc'));
// "aAbBC"

const swapcase = function (string) {
  let converted = [];
  for (let char of string) {
    converted.push(
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    );
  }
  converted = converted.toString().replaceAll(",", "");
  return converted;
};

console.log(swapcase("fEllOWs"));
//*************************
//** Output > FeLLowS
//*************************
console.log(swapcase("MeNInAs"));
//*************************
//** Output > mEniNaS
//*************************

// --------------------------------------------------------------------------

// #11 Write a JavaScript function to convert a string into camel case.

// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

const winter = "The winter is comming!";
console.log("winter:", winter.indexOf("x"));

const camelize = function (string) {
  let str = [];
  if (string.indexOf(" ") != -1) {
    str.push(
      string.slice(0, string.indexOf(" ")) +
        string[string.indexOf(" ") + 1].toUpperCase() +
        string.slice(string.indexOf(" ") + 2, string.length)
    );
  }
  if (string.indexOf(" ") === -1) {
    str.push(string);
  }
  str = str.toString().replaceAll(",", "");
  return str;
};

console.log(camelize("JavaScript Exercises"));
//*************************
//** Output > JavaScriptExercises
//*************************
console.log(camelize("JavaScript exercises"));
//*************************
//** Output > JavaScriptExercises
//*************************
console.log(camelize("JavaScriptExercises"));
//*************************
//** Output > JavaScriptExercises
//*************************

// --------------------------------------------------------------------------
