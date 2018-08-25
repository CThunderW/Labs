function sum(arr) {
    let count=0;
    for(let element of arr){
        if(typeof(element) === 'number') {
            count += element;
        }
    }
    return count;
}

