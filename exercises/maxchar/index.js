// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let numOfTimesChar = {};
    for (let char1 of str){
        for (let char2 of str) {
            if (char1 == char2) {
                numberOfTimes[char1]++;
            }
        }
    }
    for (let i in numberOfTimes) {
        
    }
    
}

module.exports = maxChar;
