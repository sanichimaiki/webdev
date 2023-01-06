// 1. Create an empty array to use as a shopping list
let shopping_list = []

// 2. Add Milk, Bread, and Apples to your list
// For adding elements to my array, both methods work.
// shopping_list.push("Milk");
// shopping_list.push("Bread");
// shopping_list.push("Apples");
// console.log(shopping_list);

shopping_list.splice(0,3, "Milk", "Bread", "Apples");

// 3. Update "Bread" with Bananas and Eggs
// Again, both ways work for replacing "Bread", but I wanted to go for something a bit more dynamic
// shopping_list[1] = "Bananas";
// shopping_list[2] = "Eggs";
// console.log(shopping_list);

let indexOfBread = shopping_list.indexOf("Bread");
shopping_list.splice(indexOfBread, 1, "Bananas", "Eggs");
console.log(shopping_list);

// 4. Remove the last item from the array and output it into the console
console.log(shopping_list.pop());

// 5. Sort the list alphabetically
shopping_list.sort();
console.log(shopping_list);

// 6. Find and output the index value of Milk
console.log(shopping_list.indexOf("Milk"));

// 7. After Bananas, add Carrots and Lettuce
shopping_list.splice(shopping_list.indexOf("Bananas")+1, 0, "Carrots", "Lettuce");

// 8. Create a new list containing Juice and Pop
let shopping_list2 = ["Juice", "Pop"];

// 9. Combine both lists, adding the new list twice to the end of the first list
let combined_shopping_list = shopping_list.concat(shopping_list2).concat(shopping_list2);
console.log(combined_shopping_list);

// 10. Get the last index value of Pop and output it to the console
console.log(combined_shopping_list.lastIndexOf("Pop"));