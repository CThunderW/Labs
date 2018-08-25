// const objA = { a: 1, b: 2, c: 3, d: 4, e: 5 };



// function filter(arr, fn){
//     let newArr=[];
//     for(let i = 0; i < arr.length; i +=1){
//         if (fn(arr[i], i, arr)){
//            newArr.push(arr[i]);
//        } 
//     }return newArr;
// }


// pickBy(objA, key => key === "a") // returns { a: 1 }
// pickBy(objA, key => [ "a", "c", "e"].includes(key)) // returns { a: 1, c: 3, e: 5 }

// const objB = { lana: 10, Liam: 4, lyn: 16, derek: 19, diana: 21 };

// pickBy(objB, key => key[0].toLowerCase() === "l") // returns { lana: 10, Liam: 4, lyn: 16 }

// function pickBy(obj, key, fn){
//     let newObj = {};
//     for(val in obj){
//         if (fn(obj, obj.val, fn))
//         newObj.push(obj, obj.val)
//     }
// }

function pickBy(obj, picker){
    newObj = {};
    for (let key in obj) {
        if(picker(key, obj[key], obj)){
            newObj[key] = obj[key]
        }
    }return newObj;
};

const objA = { a: 1, b: 2, c: 3, d: 4, e: 5 };

console.log(pickBy(objA, key => key === "a")) // returns { a: 1 }
console.log(pickBy(objA, key => [ "a", "c", "e"].includes(key))) // returns { a: 1, c: 3, e: 5 }

const objB = { lana: 10, Liam: 4, lyn: 16, derek: 19, diana: 21 };

console.log(pickBy(objB, key => key[0].toLowerCase() === "l")) // returns { lana: 10, Liam: 4, lyn: 16 }