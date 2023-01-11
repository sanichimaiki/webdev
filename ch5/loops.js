let car = {
    model: "Golf",
    make: "Volkswagen",
    color: "black",
    year: 1999
}

let arrKeys = Object.keys(car);
console.log(arrKeys);

for(let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
}

// // 'for in' loop for Objects
// for (key in car) {
//     console.log(`${key}: ${car[key]}`);
// }

