//STACK
// push adds an element from the top, 
// pop removes the most recently added 
//can use square brackets to select a key-value:


class Stack{
    constructor(){
    this.cursor = -1;
    }
    
    // you can define special methods called getters by prefixing
    // the get keyword.  These methods do not need to be called to return their value,
    // but can't accept any arguments.
    get length(){
        return this.cursor +1;
    }
    
    push(val) {
        this.cursor += 1;
        this[this.cursor] = val;
        //When it makes sense, you can return `this` to allow
        // method chaining.  
        // (i.e. plate.push(10).push(9).push(8))
    }
    
    pop(){
        if (this.cursor < 0) return undefined;
        const tmp = this[this.cursor];
        //we store the cursor in a temp variable
        delete this[this.cursor]; 
        //delete will remove properties from an object
        //using dot notation or bracket notation.
        this.cursor -= 1;
        return this[this.cursor];
    }
}
const plate = new Stack()
plate.push(10);
plate.push(5);
plate.push(1);
// myStack.pop(); //1
// myStack.pop(); //5
// myStack.pop(); //10
// myStack.pop(); //undefined