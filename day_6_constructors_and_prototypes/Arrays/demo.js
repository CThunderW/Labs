//demo: ArrayExtras
function first(arr){
    return arr[0];
}

const ArrayExtras = {
    last: function (arr) {
        //last is a property whose value is a function, making it a method.
       return arr[arr.length -1];},
       //you can also assign an existing function to a property to make a method.
    first: first,
        //you can use a shorthand syntax to create a method where the 'function'
        //keyword is not necessary.
        //You can only use this "syntax sugar" when creating methods.
    take (arr, n) {
        return arr.slice(0, n)
    },
    toObject (arr) {
        let newObj = {};
    
        for (let [key, val] of arr) { 
            newObj[key] = val;
        }
        return newObj;
    },

};
//To be able to chain method after method, return "this" from the methods that you want
//to make chainable.
//counter.set(10).inc()
const counter = {
    count: 0,
    step: 1,
    inc() {
        this.count += this.step;
        return this;
    },
    dec() {
        this.count -= this.step;
        return this;
    }, 
    set() {
        this.count = newStep;
        return this;
    },
    now() {
        return this.count;
    },
    setStep(newStep) {
        this.step = newStep;
        return this;
    },
    
};

console.log("Inside script:", this);

const can = {
    taloupe: "Hello!",
    touchThis(){
        return this;
    }
};

console.log("Inside method can.touchThis():", can.touchThis());

function whatAboutMe(){
    return this;
}
 console.log("Inside a lone function:", whatAboutMe());

 can.whatAboutMe = whatAboutMe;

 console.log("As a method of can:", can.whatAboutMe());
 //`this` is determined at the time a function is called. 
 //If a function is now owned by an object, "this" will be that object.  
 //If a method is now a lone function and is no longer owned by an object,
 //"this" will be the "window" or "undefined".

 const outside = can.touchThis;
 console.log("A former method now a function:", outside())