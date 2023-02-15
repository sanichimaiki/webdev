function getFactorial(number) {
    if (number > 0) {
        return number*getFactorial(number-1);
    } else {
        return 1;
    }
}

let n = prompt("What do you want to find the factorial (n!)?");
factorial = getFactorial(n);

alert(`${n}! is ${factorial}`);