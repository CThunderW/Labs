function mergeSet(arr1, arr2){
    let result =[];
    for (let var1 of arr1){
        if (!result.includes(var1)){
            result.push(var1)
        } 
        
    for (let var2 of arr2){
            if(!result.includes(var2)){
            result.push(var2)}
        }
    }console.log(result);
}
