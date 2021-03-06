// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // let newArray = [];

  //   for (let j = 0; j<= ) {
  //   for (let i = 0; i <= size - 1; i++) {
  //     let newArrayInside = [];
  //     newArrayInside.push(array[i]);
  //   }
  //   newArray.push(newArrayInside);
  // }
  // }
  let newArray = [];
  for (let i = 0; i <= array.length - 1; i = i + size) {
    newArray.push(array.slice(i, i + size));
  }

  return newArray;
}

module.exports = chunk;

//console.log(chunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
