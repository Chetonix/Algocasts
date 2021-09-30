// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//console.log(reverseInt(-90));
//console.log(reverseInt(500));

function reverseInt(n) {
    //let reversedNum = "";
    numToString = n.toString();
    //debugger;
    
    let reversedNumString = "";
    let nextLoop = true;
    for (let digit of numToString) {
        if ((n < 0) && nextLoop) {
            nextLoop = false;
            continue;
            
        }
        reversedNumString = digit+ 
            reversedNumString;
    }
    
    //console.log(reversedNumString);
    if (n < 0) {
        return -1 * parseInt(reversedNumString);
    }
    else return parseInt(reversedNumString);
}

module.exports = reverseInt;
