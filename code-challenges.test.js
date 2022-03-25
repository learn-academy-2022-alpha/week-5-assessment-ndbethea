// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical";
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook";
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric";
// Expected output: "3cc3ntr1c"

// Pseudo Code
// create a describe statement with name of function codedMessage
// create an in it statement describing what the function does
// create expect statement codedMessage to take in secretCodeWord01 to equal "L4ck4d41s1c4l"
// create expect statement codedMessage to take in secretCodeWord02 to equal "G0bbl3dyg00k"
// create expect statement codedMessage to take in secretCodeWord03 to equal "3cc3ntr1c"

describe("codedMessage", () => {
  it("returns a coded message", () => {
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

// b) Create the function that makes the test pass.

// Pseudo Code
// create const code and input the listed vowels to equal the numbers they are to be replaced with
// create const codedMessage
// create a function that takes in a string of vowels
// create a return that takes in a string and replaces the vowels with the above numbers
// return values

const code = {
  a: 4,
  e: 3,
  i: 1,
  o: 0,
  A: 4,
  E: 3,
  I: 1,
  O: 0,
};

const codedMessage = (str) => {
  return str.replace(/[aeioAEIO]/gi, (string) => code[string]);
};

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"];
const letterA = "a";
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"];
const letterE = "e";
// Expected output: ["Cherry", "Blueberry", "Peach"]

// Pseudo Code
// create a describe statement with name of function particularLetter
// create an in it statement describing what the function does
// create expect statement for particularLetter to take in arrayOfWords1 and letterA  to equal ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// create expect statement for particularLetter to take in arrayOfWords2 and letterE  to equal ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]

describe("particularLetter", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    expect(particularLetter(arrayOfWords1, letterA)).toEqual([
      "Apple",
      "Banana",
      "Orange",
    ]);
    expect(particularLetter(arrayOfWords2, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// b) Create the function that makes the test pass.

// Pseudo Code
// create const particularLetter
// create a function that takes in an array of words and a letter
// create a return statement that takes in an array of words
// use .filter to filter out specific letters
// return value to lower case and include our replaced vowels

const particularLetter = (array, letter) => {
  return array.filter((value) => value.toLowerCase().includes(letter));
};

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4];
// Expected output: false

// Pseudo Code
// create a describe statement with name of function fullHouseTester
// create an in it statement describing what the function does
// create expect statement for fullHouseTester to take in the array of hand1 to equal true
// create expect statement for fullHouseTester to take in the array of hand2 to equal false
// create expect statement for fullHouseTester to take in the array of hand3 to equal false

describe("fullHouseTester", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    expect(fullHouseTester(hand1)).toEqual(true);
    expect(fullHouseTester(hand2)).toEqual(false);
    expect(fullHouseTester(hand3)).toEqual(false);
  });
});

// b) Create the function that makes the test pass.

// Pseudo Code
// create const fullHouseTester
// create a function that takes in an array
// create a variable handCount to equal array.map with parameters v, i, and array
// use .filter with parameter strictly equal to v
// create a return statement for handCount using .includes with a numbered parameter set

const fullHouseTester = (arr) => {
  let handCount = arr.map((v, i, arr) => arr.filter((b) => b === v).length);
  return handCount.includes(3) && handCount.includes(2);
};
