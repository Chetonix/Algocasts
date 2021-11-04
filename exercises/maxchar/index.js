// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let numOfTimesChar = {};
    for (let char1 of str){
      
          
        if (char1 in numOfTimesChar){
                    continue;
                }
        
        
        for (let char2 of str) {
            
            
        
            if (char1 === char2) {
            
                
                if (numOfTimesChar[char1]){
                    numOfTimesChar[char1] += 1;
                }
                else {
                    numOfTimesChar[char1] = 1;
                }
            }
        }
    }
    
    /*
    for (let char in numberOfTimes) { 
        if numberOfTimes[char] > 
    }
    
    */
//    debugger;
    
/*
let arr = Object.values(numOfTimesChar);
//let min = Math.min(...arr);
let max = Math.max(...arr);

//console.log( `Min value: ${min}, max value: ${max}` );
    
return max;
*/
    
//console.log(numOfTimesChar);
    return Object.keys(numOfTimesChar).reduce((a, b) => (numOfTimesChar[a] > numOfTimesChar[b]) ? a : b);
   
    
    
}

//console.log(maxChar("abbbaabbccccccccc"));

module.exports = maxChar;
