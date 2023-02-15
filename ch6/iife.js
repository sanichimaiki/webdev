let temp = "1000";

// IIFE, "immediately invoked function expression", are a way of expressing a function such that it gets invoked IMMEDIATELY
(() => {
    let temp = "2000";
    console.log(temp); // the most local variable gets printed, so "2000"
})();

let result = (function() {
    let temp = "3000";
    console.log(temp);
    return temp;
})();

/*
    Note the difference between result and result2:
    - result: because result uses IIFE, result gets returned the value inside the function; thus result is a string object.
    - result2: result2 does NOT use IIFE and thus, it is the actual function.
*/
/*
let result2 = () => {
    let temp = "3000";
    console.log(temp);
    return temp;
};
*/

console.log(result);

((parameter1) => {
    let temp = parameter1;
    let sentence = `I have $${temp} in my bank account!`;
    console.log(sentence);
})("978,669");