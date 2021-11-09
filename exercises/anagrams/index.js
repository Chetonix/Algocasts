// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const capChars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const smallChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let charMapA = {};
  let charMapB = {};
  let i = 1;
  for (let element of stringA) {
    if (element in capChars || element in smallChars) {
      if (element in charMap.keys) {
        charMapA[element] += 1;
      } else {
        charMapA[element] = 1;
      }
    }
  }
  console.log(charMapA);

  for (let element of stringB) {
    if (element in capChars || element in smallChars) {
      if (element in charMap.keys) {
        charMapB[element] += 1;
      } else {
        charMapB[element] = 1;
      }
    }
  }

  console.log(charMapB);
}

anagrams("rail safety", "fairy tales");
// module.exports = anagrams;
