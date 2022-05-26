// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const capChars = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   const smallChars = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let charMapA = {};
//   let charMapB = {};
//   let i = 1;
//   for (let element of stringA) {
//     //console.log(element);

//     //if (element in capChars || element in smallChars) {
//     if (capChars.indexOf(element) > -1 || smallChars.indexOf(element) > -1) {
//       if (charMapA[element] === "undefined") {
//         charMapA[element] += 1;
//       } else {
//         charMapA[element] = 1;
//       }
//     }
//   }

//   for (let element of stringB) {
//     //if (element in capChars || element in smallChars) {
//     if (capChars.indexOf(element) > -1 || smallChars.indexOf(element) > -1) {
//       if (charMapB[element] === "undefined") {
//         charMapB[element] += 1;
//       } else {
//         charMapB[element] = 1;
//       }
//     }
//   }

  //   for (let element of charMapA.keys) {
  //     for (let element of charMapB.keys) {
  //     if smallChars.indexOf(element) == capChars.indexOf(element) {
  //       charMapA[element]
  //     }
  //   }
  // }
  // console.log(charMapA);
  // console.log(charMapB);

  // for (let element in charMapA) {
  //   if (capChars.indexOf(element) > -1) {
  //     if (!(smallChars.indexOf(capChars.indexOf(element)) > -1)) {
  //       charMapA[smallChars[capChars.indexOf(element)]] = 0;
  //     }else {
  //     charMapA[smallChars[capChars.indexOf(element)]] += charMapA[element];
  //     delete charMapA[element];
  //     }
  //   }
  // }

  // for (let element in charMapA) {
  //   if (capChars.indexOf(element) > -1) {
  //     if (!charMapA.hasOwnProperty(smallChars[capChars.indexOf(element)])) {
  //       charMapA[smallChars[capChars.indexOf(element)]] = charMapA[element];
  //     } else {
  //       charMapA[smallChars[capChars.indexOf(element)]] += charMapA[element];
  //       delete charMapA[element];
  //     }
  //   }
  // }
  // console.log(charMapA);

  // for (let element in charMapB) {
  //   if (capChars.indexOf(element) > -1) {
  //     //obj.hasOwnProperty(prop)
  //     if (!charMapB.hasOwnProperty(smallChars[capChars.indexOf(element)])) {
  //       charMapB[smallChars[capChars.indexOf(element)]] = 0;
  //     }
  //     charMapB[smallChars[capChars.indexOf(element)]] += charMapB[element];
  //     delete charMapB[element];
  //   }
  // }
  // console.log(charMapA);

  // console.log(charMapB);

  // const keys1 = Object.keys(object1);
  // const keys2 = Object.keys(object2);
  // if (keys1.length !== keys2.length) {
  //   return false;
  // }
  // for (let key of keys1) {
  //   if (object1[key] !== object2[key]) {
  //     return false;
  //   }
  // }
  // return true;

  // const keys1 = Object.keys(charMapA);
  // const keys2 = Object.keys(charMapB);
  // if (keys1.length !== keys2.length) {
  //   return false;
  // }
  // for (let key of keys1) {
  //   if (charMapA[key] !== charMapB[key]) {
  //     return false;
  //   }
  // }
  // return true;

  // return charMapB == charMapA;
// }

function anagrams(stringA, stringB) { 
  let stringACopy = stringA;
  let stringBCopy = stringB;

  stringACopy = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringBCopy = stringB.replace(/[^\w]/g, "").toLowerCase();

  // console.log(stringACopy, stringBCopy);

  let objMapA = {};
  let objMapB = {}

  for (let char of stringACopy) {
      if(!objMapA[char]) {
        objMapA[char] = 1;
      } else {
        objMapA[char] += 1;
      }
}

  for (let char of stringBCopy) {
      if(!objMapB[char]) {
        objMapB[char] = 1;
      } else {
        objMapB[char] += 1;
      }
}

  const sizeA = Object.keys(objMapA).length;
  const sizeB = Object.keys(objMapB).length;

  if (sizeA === sizeB) {
    for (let char of Object.keys(objMapA)) {
        if (objMapA[char] !== objMapB[char]) {
          return false;
        }
    }
    return true; 
    } else return false;
}

console.log(anagrams("rail safety", "fairy Tales"));
module.exports = anagrams;
