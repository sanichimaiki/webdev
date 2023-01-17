let words = ["this", "is", "so", "awesome"];

let printer = x => {
    console.log(...x); // spread
};

printer(words);

function rester(...y) { // rest
    console.log(y);
    for(let word in y) {
        console.log(y[word]);
    }
}

rester(words);