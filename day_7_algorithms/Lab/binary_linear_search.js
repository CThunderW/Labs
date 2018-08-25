// function linearSearch(arr, searchVal){ 
//     for(let i = 0; i<arr.length; i++){
//         if (arr[i]===searchVal){
//             return i;
//             }
//     } return -1;
// }
// console.log(linearSearch([ 3, 5, 7, 8, 10, 12 ], 10)) // 4
// console.log(linearSearch([ 3, 5, 7, 8, 10, 12 ], 3)) // 0
// console.log(linearSearch([ 3, 5, 7, 8, 10, 12 ], 78)) // -1
// console.log(linearSearch([ 8, 3, 6, 1, 2, 6 ], 6)) // 2

// function binarySearch(arr, searchVal){
//     let arrLow = arr[0];
//     let arrMid = arr[arr.length[Math.floor(arr.length/2)]]
//     let arrHi = arr[arr.length-1]
//     if (arrLow === searchVal){
//         return 0;} else if (arrHi === searchVal){
//         return (arr.length-1)} else if (arrMid === searchVal){
//         return (arr.length[Math.floor(arr.length/2)])
//         } else {
            
//         }
// }


//WHILE LOOP BINARY SEARCH
function binarySearch(arr, searchVal){
    let min = 0;
    let max = arr.length-1;
    let guess;

    while (max>=min){
        guess = Math.floor((max+min)/2);
        console.log(`Guess is ${guess}`)
        if (arr[guess] === searchVal){
        return guess;
        } else if (guess>=arr.length-1) {
            return -1;
        } else if (arr[guess]<searchVal){
        min = guess+1;
        guess = Math.floor((max+min)/2);

        } else if (arr[guess]>searchVal) {
        max = guess-1;
        guess = Math.floor((max+min)/2)
        } 


    }return guess;
};
console.log(binarySearch([ 3, 5, 7, 8, 10, 12 ], 10)); // 4)
console.log(binarySearch([ 3, 5, 7, 8, 10, 12 ], 3)); // 0)
console.log(binarySearch([ 3, 5, 7, 8, 10, 12 ], 78)); // -1)

