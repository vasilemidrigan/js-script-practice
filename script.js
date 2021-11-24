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
