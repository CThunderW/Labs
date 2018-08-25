// function sum(arr) {
//     if (arr.length < 1) return 0;
//     return arr[0] + sum(arr.slice(1));
// }

// function startDebug() {
//     debugger;
//     sum([1, 2, 3, 4, 5]);
// }
//
//ARRAY DESTRUCTURING
//if you put [] when assigning an array to variables, 
//you can elements of the array based on their position. 
//BELOW:
//- "first" will be the first element in the arr.
// - "rest" will be an array containing the remaining elements of arr.
// - "rest" must be the last term
function sum(arr) {
    let [first, ...rest] = arr;
    if (rest.length < 1) return first;
    return first + sum(rest);
}

function startDebug() {
    debugger;
    sum([1, 2, 3, 4, 5]);
}

//FACTORIAL FUNCTION
function factorial(val){
    if (val <1) return val;
    
    return val*factorial(val-1);
}


function factorial(n) {
    if (n<1) return 1;
    return n * factorial(n-1);
}

// REVERSE STRING FUNCTION
    
function reverse(str){
    if ((str.length) < 1) return str;
    return str.slice(-1) + reverse(str.slice(0, -1));
    
}
//whats happening in a reverse? 
reverse("abcde")
"d" + reverse("abc")
"d" + ("c" + reverse ("ab"))

