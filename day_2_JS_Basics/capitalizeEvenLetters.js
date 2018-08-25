const args = process.argv.slice(2);

let word1 = args[0]


// let count = word1.length

// if (count<word1.length){
//     console.log(toUpperCase(word1[count]));
//     count--
// }
let result = "";
for(let index = 0;  index < word1.length; index ++){
    if (index % 2 === 1)  {
        result += word1[index].toUpperCase();
    } else {
        result += word1[index];
        // result = result + word1[index];
    }
    // console.log(word1[index]);
}
console.log(result);
