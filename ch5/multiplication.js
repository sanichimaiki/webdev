// 3 * 2 = 6
// 3 * 2 == 2 + 2 + 2 == 6
// 3 is the multiplier, 2 is the multiplicand

let multiplicand = prompt("What is the multiplicand?"); 
let multiplier = prompt("What is the multiplier?");
let product = 0;

let multiplication_table = [];

outer:
for(let i = 0; i <= multiplicand; i++) {
    let row = [];

    inner:
    for(let j = 0; j <= multiplier; j++) {
        product = i*j;
        row.push(product);
        if(j == multiplier) {
            multiplication_table.push(row);

            // Both of these achieve the same thing, but are just more verbose. 
            // continue outer;
            // break inner;
        }
    }
}

console.log(multiplication_table)