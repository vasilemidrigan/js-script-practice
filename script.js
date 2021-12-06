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

// #12 Write a JavaScript function to uncamelize a string.

// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

const uncamelizeStr = function (string, separator) {
  string = string.toLowerCase();
  separator === undefined ? (separator = " ") : separator;
  string = string.slice(0, 5) + separator + string.slice(5);
  return string;
};

console.log(uncamelizeStr("helloWorld"));
//*************************
//** Output > JavaScriptExercises
//*************************
console.log(uncamelizeStr("helloWorld", "-"));
//*************************
//** Output > JavaScriptExercises
//*************************
console.log(uncamelizeStr("helloWorld", "_"));
//*************************
//** Output > JavaScriptExercises
//*************************

// --------------------------------------------------------------------------

// #13 Write a JavaScript function to concatenates a given string n times
//    (default is 1).

// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

const repeat = function (string, nTimes) {
  if (nTimes) {
    let strings = "";
    for (let i = 0; i <= nTimes - 1; i++) {
      strings += string;
    }
    return strings;
  }
};

console.log(repeat("Ha", 2));
//*************************
//** Output > HaHa
//*************************
console.log(repeat("Ha", 4));
//*************************
//** Output > HaHaHaHa
//*************************
console.log(repeat("Ha", 8));
//*************************
//** Output > HaHaHaHaHaHaHaHa
//*************************

// --------------------------------------------------------------------------

// #14 Write a JavaScript function to insert a string within a string at a
//       particular position (default is 1).

// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

const insert = function (str, injectedStr, index) {
  let injectedString;
  if (!injectedStr && !index) {
    injectedString = str;
  } else if (!index) {
    injectedString = injectedStr + str;
  } else {
    injectedString = str.slice(0, index) + injectedStr + str.slice(index);
  }
  return injectedString;
};

console.log(insert("We are doing some exercises."));
//*************************
//** Output > We are doing some exercises.
//*************************
console.log(insert("We are doing some exercises.", "JavaScript "));
//*************************
//** Output > JavaScript We are doing some exercises.
//*************************
console.log(insert("We are doing some exercises.", "JavaScript ", 18));
//*************************
//** Output > We are doing some JavaScript exercises.
//*************************

// --------------------------------------------------------------------------

// 15. Write a JavaScript function to humanized number
//       (Formats a number to a human-readable string.)
//       with the correct suffix such as 1st, 2nd, 3rd or 4th.

// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"

const humanize_format = function (number) {
  let modifiedFormat = number.toString();
  if (modifiedFormat[modifiedFormat.length - 1] === "1") {
    modifiedFormat = modifiedFormat.concat("st");
  } else if (modifiedFormat[modifiedFormat.length - 1] === "2") {
    modifiedFormat = modifiedFormat.concat("nd");
  } else if (modifiedFormat[modifiedFormat.length - 1] === "3") {
    modifiedFormat = modifiedFormat.concat("rd");
  } else {
    modifiedFormat = modifiedFormat.concat("th");
  }
  return modifiedFormat;
};

console.log(humanize_format(1));
//*************************
//** Output > 1st
//*************************
console.log(humanize_format(8));
//*************************
//** Output > 8th
//*************************
console.log(humanize_format(301));
//*************************
//** Output > 301st
//*************************
console.log(humanize_format(402));
//*************************
//** Output > 402nd
//*************************
// --------------------------------------------------------------------------

//  #16 Write a JavaScript function to truncates a string if it is longer
//          than the specified number of characters. Truncated strings will end
//           with a translatable ellipsis sequence ("…") (by default) or specified
//             characters.

// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"

const text_truncate = function (string, nrOfChar, charAtTheEnd = "...") {
  if (!nrOfChar || nrOfChar >= string.length - 1) {
    return string;
  } else {
    return string.slice(0, nrOfChar) + charAtTheEnd;
  }
};

console.log(text_truncate("We are doing JS string exercises."));
//*************************
//** Output > We are doing JS string exercises.
//*************************
console.log(text_truncate("We are doing JS string exercises.", 19));
//*************************
//** Output > We are doing JS str...
//*************************
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));
//*************************
//** Output > We are doing JS!!
//*************************
console.log(
  text_truncate("We are doing JS string exercises.", 12, " that thing ;)")
);
//*************************
//** Output > We are doing that thing ;)
//*************************
// --------------------------------------------------------------------------
