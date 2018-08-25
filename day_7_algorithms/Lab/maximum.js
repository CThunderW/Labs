//Iterative Maximum Function    
console.time("Iterative");   

function maximumI(arr){
        let tempBiggest = arr[0];
        for (let i = 0; i < arr.length; i++){
            if (tempBiggest<arr[i]){
                tempBiggest=arr[i]; 
            } 
            
        }return tempBiggest;
    }
console.timeEnd("Iterative");

//Recursive Maximum Function
console.time("Recursive")
function maximumR(arr) {
    // copy the given array 
    nums = arr.slice();

    // base case: if we're at the last number, return it
    if (nums.length == 1) { return nums[0]; }

    // check the first two numbers in the array and remove the lesser
    if (nums[0] < nums[1]) { nums.splice(0,1); }
    else { nums.splice(1,1); }

    // with one less number in the array, call the same function
    return maximumR(nums);
}

function makeBigArray(size){
    let bigArray = [];
    for (let i = 0; i < size; i++){
        bigArray.push(1)
    }return bigArray;
}

let test = makeBigArray(1e4)

console.timeEnd("Recursive");

console.log(maximumI([ 213, 12, 66, 999 ])); // should return 999
console.log(maximumI([ 1, 2, 3, 11, 3, 6, 5 ])); // should return 11
console.log(maximumR([ 213, 12, 66, 999 ])); // should return 999
console.log(maximumR([ 1, 2, 3, 11, 3, 6, 5])); // should return 11


console.time("I");
console.log(maximumI(test));
console.timeEnd("I");


console.time("R")
console.log(maximumR(test));
console.timeEnd("R")