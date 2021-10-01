// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversedStringArray = [];
    for (let i in str) {
        reversedStringArray.unshift(str[i]);
    } 
    return reversedStringArray.join("");
}

module.exports = reverse;
