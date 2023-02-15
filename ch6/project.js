function recursiveFunction(nr) {
    if(nr <= 10) {
        console.log(nr);
        recursiveFunction(nr+1);
    }
}

function timeout() {
    let one = () => {
        console.log("one");
    };
    let two = () => {
        console.log("two");
    };
    let three = () => {
        console.log("three");
        one();
        two();
    };
    let four = () => {
        console.log("four");
        setTimeout(one);
        setTimeout(three);
    };

    four();
}

console.log("-- Recursive function --");
recursiveFunction(5);

console.log("-- Timeout --");
timeout();