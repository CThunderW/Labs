const args = process.argv.slice(2);

const a = +(args[0])
const b = +(args[1])
console.log(a, b);
console.log(a+b);

for (var count=1; count <= 100; count++){
     if (count % a === 0 && count % b === 0)
        console.log("FIZZBUZZ:", count)
     else if (count % a === 0) 
        console.log("FIZZ:", count)
        
     else if (count % b === 0) 
        console.log("BUZZ:", count)
        
     else 
        console.log(count);
}