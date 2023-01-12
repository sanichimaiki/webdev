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

let car2 = {
    model: "Cute",
    make: "Prius",
    color: "blue",
    year: 1998
}

let cars = [car, car2];

// continue
for(let car of cars) {
    // If the car color IS NOT black, break out of the current iteration, move back up to check the condition, and start a new iteration
    if(car.color !== 'black') {
        continue;
    }
    if(car.year <= 2005) {
        console.log(`we found this car ${car}`)
    }
}