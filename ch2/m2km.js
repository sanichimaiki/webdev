/* This project will convert given miles to kilometers. To do so, it will:
    - Create a variable that contains a value in miles
    - Convert it to kilometers
    - Log the value in kilometers in a specifed format
*/

let miles = prompt("Enter the amount of miles to be converted (to km)");

let km = miles * 1.60934; // 1 mile to 1.60934 kilometer
// miles *= 1.60934; // This also works, but I want to preserve the miles variable

console.log(km);
