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
// create a describe statement with name of function
// create an in it statement describing what the method does
// create expect statements for what needs to be tested

describe("codedMessage", () => {
  it("returns a coded message", () => {
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

// b) Create the function that makes the test pass.

// Pseudo Code
// create const of what we want to replace
// create const codedMessage
// create a function that takes in a string of vowels
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
// create a describe statement with name of function
// create an in it statement describing what the method does
// create expect statements for what needs to be tested

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
// create a function that takes in an array and letter
// use .filter method, .toLowerCase and .includes notation
// return values

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
// create a describe statement with name of function
// create an in it statement describing what the method does
// create expect statements for what needs to be tested

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
// use .map to pull in values
// use . filter
// create a return of the hand counts

const fullHouseTester = (arr) => {
  let handCount = arr.map((v, i, arr) => arr.filter((b) => b === v).length);
  return handCount.includes(3) && handCount.includes(2);
};
