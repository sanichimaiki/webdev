// Create a countdown loop starting at a dynamic value of 10

let start = 10;

function countdown(number) {
    console.log(`Counting down... ${number}`); // 17 ws

    if(number < 1) {
        return;
    } else {
        countdown(number-1);
    }
}

countdown(start);