function matchingSet(arrA, arrB) {
    let sharedElements=[];
    // let temp = [];
    for (let elementA of arrA){
        if (arrB.includes(elementA)){
            if (!sharedElements.includes(elementA)){
                sharedElements.push(elementA)
            }

        } 
    }  

    // [3,4,5,3]

    // for (let uniqueElements of temp){
    //     // console.log("elementA >>", elementA)
    //     if (!temp.includes(elementA)){
    //         sharedElements.push(uniqueElements)
    //     } 
    // } 
    return sharedElements
} 


const result1 = matchingSet([1, 2, 3, 3,3,3,3,3,3,55,5555, 4, 5], [3,,3,55,5555, 4, 4, 5, 6, 7])
console.log(result1)
// matchingSet(['j', 'o', 'h', 'n', 'n', 'y'], ['j', 'a', 'n', 'e'])