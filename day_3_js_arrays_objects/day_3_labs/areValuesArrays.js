function areValsArrays(arr) {
    for(let Vals of arr){
        if (!Array.isArray(Vals)){
        return false;
        }
    }
    return true;
}

console.log(areValsArrays([[1], [2], [4, 5]])) // returns true
console.log(areValsArrays([1, [2], [6, 7, 8]])) // returns false
console.log(areValsArrays(['true', 'false'])) // returns false