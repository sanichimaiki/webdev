function varStuff() {
    if (true) {
        var x = "hi"; // If we declare the variable "x" as a "var", then it can be used anywhere in the function
    }

    console.log(x); // This will print
}

varStuff();

function letStuff() {
    if (true) {
        let x = "hi"; // If we declare the variable "x" with "let", then it can ONLY be used in the BLOCK {}
    }

    console.log(x); // This will NOT print; more precisely, it will print but the output would be: "ReferenceError: x is not defined"
}

letStuff();