const plus = (a, b) => a + b;
let arr = [1, 2, 3, 4, 5];

function reduce(arr, fn, n) {
    let accumulator = arr[0];
    for(let i = 1; i<arr.length; i+=1){
        accumulator = fn(accumulator, arr[i], i);
    }
    return accumulator;
};
    
console.log(reduce(arr, plus, 0)); // returns 15
console.log(reduce(arr, (a, b) => a * b, 1)); // returns 120

// const reduce = (fn, arr) => {
//     let accumulator = arr[0]
//     for (let i = 1; i<arr.length; i+=1) {
//         accumulator = fn(accumulator, arr[i], i);
//     }
//     return accumulator;
// };
