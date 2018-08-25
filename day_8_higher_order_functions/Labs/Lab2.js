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

// repeatedValue returns true if its argument, value, is a value that is repeated within the array, arr, (false otherwise)
const repeatedValue = function(value, index, arr) {
  return index !== arr.indexOf(value);
};


function filter(arr, fn){
    let newArr=[];
    for(let i = 0; i < arr.length; i +=1){
        if (fn(arr[i], i, arr)){
           newArr.push(arr[i]);
       } 
    }return newArr;
}
let arr = [1,2,3,4,5,6];

console.log(filter(arr, even)); // returns 2,4,6
 console.log(filter(arr, odd)) // returns 1,3,5
 console.log(filter(arr, above(3))); // returns 4,5,6
 console.log(filter([1, 2, 3, 2, 3, 4, 5], repeatedValue)); // returns 2,3