// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

    let str = ""

    for (let i = 1; i <= n; i++) {
        str = "";
        for (var j = 1; j <= i; j++) {
            str += "#";
        }
        for (let k = j; k<=n; k++) {
            str += " ";
        }
        console.log(str);
    }
}



module.exports = steps;
