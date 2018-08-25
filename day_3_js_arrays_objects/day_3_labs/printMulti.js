const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];

function printMulti(arrOfArr){
    for(let item of arrOfArr){
        for(elem of item){
            console.log(elem)
        }
            
    } 



//         if (Array.isArray(item)) {
//             console.log(item[0])
//         } {console.log(item)}
//     }
}
printMulti(myArray);