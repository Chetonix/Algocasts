// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    const fibseries = [0];
    let prevFib = 1;
    let fib = 0;
    let prevPrevFib = 0;
    for (let i = 1; i <= n; i++) {
        if(i===1) {
            fibseries.push(1);
        }else {
        fib = prevFib + prevPrevFib;
        prevPrevFib = prevFib;
        prevFib = fib
        fibseries.push(fib);
        }
    }
    return fibseries[n];
}


module.exports = fib;
