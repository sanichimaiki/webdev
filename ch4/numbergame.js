let userinput = prompt("Please enter a number");
let randomNum = Math.random()*10;

if (userinput > randomNum) {
    console.log(`${userinput} is greater than ${randomNum}`);
} else if (userinput === randomNum) {
    console.log(`${userinput} is equal to ${randomNum}`);
} else {
    console.log(`${userinput} is less than ${randomNum}`);
}