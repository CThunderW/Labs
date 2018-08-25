const args = process.argv.slice(2);

let a = +(args[0])
let b = +(args[1])
let c = +(args[2])

console.log(a, b, c);

var greatest = a;
console.log(greatest);

if (greatest < b){
    greatest=b}
if (greatest < c) {
    greatest=c} 

    console.log(`${greatest} is the greatest number of the three.`);