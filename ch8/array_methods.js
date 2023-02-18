let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

// use an anonfunc
let checkDuplicate = (element, index, array) => {
    console.log(`${element} is at index ${index}`);
    return array.indexOf(element) === index;
};

// This does the same thing
// const arr2 = arr.filter( (element, index, array) => {
//     return array.indexOf(element) === index;
// });

let newarr = arr.filter(checkDuplicate);

let numarr = [1, 2, 3, 4, 5];

// Note: methods 1, 2, and 3 all achieve the same thing just being different ways

// Method 1
let updateArr = (x) => {
    return x * 2;
};

console.log(numarr.map(updateArr));

// Method 2
let updateArr2 = numarr.map( (x) => {
    return x * 2;
});

console.log(updateArr2);

// Method 3
let numarr2 = numarr.map((x) => x*2);
console.log(numarr2);