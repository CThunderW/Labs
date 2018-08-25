var password = prompt("Please enter a password:")
if (password.length < 8) {
  console.log("Your password is too short");  
} else if (password.length > 12) {
    console.log("Your password is too long")
} else {Password Accepted}


const args = process.argv.slice(2);
const password = args[0];

if (!password) {
    console.log("Password Required");
} else if (password.length > 12) {
    console.log("Password is too long!")
} else if (password.length < 8) {
    console.log("Password is too short!")
} else {
    console.log("Just Right")
}