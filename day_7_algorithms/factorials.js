console.time("factorialIterative")
function factorialIter(n){
    let total = 1;
    for (let i = n; i>= 1; i-=1){
        total *= i;
    } return total;
}
console.timeEnd("factorialIterative")

console.time("factorialRecursive")
function factorial(val){
    if (val <1) return val;
    
    return val*factorial(val-1);
}
console.timeEnd("factorialRecursive")