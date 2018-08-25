function largestNumber(arr){
    let greatest = arr[0];
    for(let number of arr) {
        if (number>greatest){
            greatest = number
        }
    } 
    return greatest;
}

arry=[1, 2, 3, 4, 5, 4, 3, 2, 1];
largestNumber(arry);