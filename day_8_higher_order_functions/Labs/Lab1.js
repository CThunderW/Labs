

// given three functions:
// even returns true if its argument, n, is an even number (false otherwise)
const even = function (n) { return n % 2 === 0 };
// even returns true if its argument, n, is an odd number (false otherwise)
const odd = function (n) { return !even(n) };

// creates a function that returns true if its argument is above min
const above = function (min) {
  return function (n) {
    return n > min;
  }
}

function find(arr, fn){
    for(let i = 0; i<arr.length; i+=1){
        // console.log(fn(arr[i]));
        if (fn(arr[i], i, arr)){
         return arr[i]}   
    }
}
// let arr = [1,2,3,4,5,6];
// // find(arr, even)
// find(arr, function (value) { return value > 4 })

let arr = [1, 2, 3, 4, 5, 6];

console.log(find(arr, even)) // returns 2
console.log(find(arr, odd)) // returns 1
console.log(find(arr, above(3))) // returns 4
console.log(find(
    arr,
    function (value, index, arr) { return value % 5 === 0 }
  ));