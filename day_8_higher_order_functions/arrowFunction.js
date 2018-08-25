

const add = (a, b) => a+b;
// const flip = fn => function(a, b) {
//     return fn(b,a);
// };

const flip = fn => (a,b) => fn(b,a);

const V = x => y => z =>z(x)(y);

//Arrow functions can't be constructors. 
//Arrow functions DO NOT have their own "this".
//They use the 'this' of their parent 

//`this` in Arrow Function
const myArrow = () => this;
const myFunc = function(){
    return this;
};

const myObject = {
    myProp: "A property value",
    myArrow: myArrow,
    myFunc: myFunc,
    // `this` for the following is actually the `window`.  
    // This is because () => this is being inside the block
    // of the script file.  
    //Braces to create an object ({}) do not count as a code block, 
    // and therefore they do not get their scope and variables.
    myInlineArrow: () => this,
    myMehod(){
        const myArrow = () => this;
        const myFunc = function() {
            return this;
        };
        console.log("myArrow:", myArrow()); // myObject
        console.log("myFunc:", myFunc());  //Window (or undefined)
    }
};
// console.log("myArrow:", myArrow()); //Window (or undefined)
// console.log("myFunc:", myFunc());  //Window (or undefined)
// console.log("myObjecvt.myArrow:", myObject.myArrow());  //Window (or undefined)
// console.log("myObject.myFunc:", myObject.myFunc());  //myObject
// console.log("myObject.myInlineArrow:", myObject.myInlineArrow());

//HIGHER ORDER FUNCTIONS

//DEMO: a Loud Function

const five = () => 5;

// const loud = (fn, ...args) => {
//     console.log(`Calling ${fn.name}...`);
//     const returnValue = fn(...args); //reassigned the return value to a 
//     //new variable to only run the function once. 
//     console.log(`Called ${fn.name} and returned ${returnValue}...`)
//     return returnValue;
// };

const loud = (logFn, fn, ...args) => {
    logFn(`Calling ${fn.name}...`);
    const returnValue = fn(...args); //reassigned the return value to a 
    //new variable to only run the function once. 
    logFn(`Called ${fn.name} and returned ${returnValue}...`)
    return returnValue;
};

// DEMO: Implement Higher Order Functions
const each = (fn, arr) => {
    for (let i = 0; i < arr.length; i+=1){
        fn(arr[i], i);
    }
};
//usage example of above function: 
each((val, index) => console.log("the value is", val, "and the index is", index), ["A", "B", "C", "D"]);

//Map demo
const map = (fn, arr) =>{
    const newArr = [];
    for (let i = 0; i<arr.length; i+=1){
        newArr.push(fn(arr[i], i));
    }
    return newArr;
}

//HIGHER ORDER FUNCTIONS
//  -SETTIMEOUT
//  your script will not wait for a setTimeOut's waiting period to continue on, meaning it will not call those functions,
//  making it ASYNCHRONOUS

setTimeout(() => console.log("Wait two seconds"), 2000)
//returns:  1 
//          Wait two seconds

function setTimeOutDemo(){
    let count = 0;
    console.log("Before setTimeout:", count);
    
    //'setTimeout' is one of many asynchronous functions in Javascript.
    //its asynchronous because the javascript will not wait until its
    //callback is called to execute the next line of code. 
    //This means that if any of your code depends on something that happens inside of 
    //setTimeout's callback, then you must use that code in the callback.

    setTimeout(() => {
        count +=2;
        console.log("Waited 2s!");
        console.log("Inside setTimeout's callback:", count);
}, 10);
console.log("After setTimeout:", count);}

const clearTimeoutIntervalDemo = () => {
    let count = 0;
  
    const intervalId = setInterval(() => {
      console.log(`Count at ${(count += 1)}`);
    }, 500);
  
    setTimeout(() => {
      clearInterval(intervalId);
    }, 500 * 10);
  };

  //REDUCE
// const add = function(a,b){return a+b};
// reduce(add, [1, 2, 3, 4, 5]);
// reduce is also called fold in other languages

const reduce = (fn, arr) => {
    let accumulator = arr[0]
    for (let i = 1; i<arr.length; i+=1) {
        accumulator = fn(accumulator, arr[i], i);
    }
    return accumulator;
};
