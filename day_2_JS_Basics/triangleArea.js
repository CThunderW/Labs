const args = process.argv.slice(2);
// console.log(process.argv);
console.log(args);
let a = +(args[0])
let b = +(args[1])
let c = +(args[2])

console.log(a, b, c);

// let a = parseInt(a)
// let b = parseInt(b)
// let c = parseInt(c)

if (a + b < c || b + c < a || b + c < a) {
    console.log("not a valid triangle");
} else if (isNaN(a) || isNaN(b) || isNaN(c)){
    console.log("Must enter 3 numbers")
} else {
    let halfPerimeter = parseInt(a + b + c)/2
    // console.log
    console.log("halfPerimeter = ", halfPerimeter);
    let area = Math.sqrt(halfPerimeter*(halfPerimeter-a)*(halfPerimeter-b)*(halfPerimeter-c))

    console.log("area =", area);
}