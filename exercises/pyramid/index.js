// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####' 

function pyramid(n) {

    let m = n-1;
    for (let i = 1; i <= n ; i++ ) {
        
        
        let str = "";
        for (let j = 1; j <= m; j++) {
            str += " ";
        }
        for (let l = 1; l <= i*2-1; l++) {
            str += "#";
        }
        for (let k = m ; k > 0 ; k--) {
        str += " ";
    }
    m--;
    console.log(str);
    }
    
}


module.exports = pyramid;
