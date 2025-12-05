/* 
-----------------------------------------
🔹 map() 
- Purpose: Transform each element of an array and return a new array (same length).
- Does NOT change the original array.
- Think: “I want to convert each element into something else.”

Example:
let numbers = [1, 2, 3, 4];
let squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16]

-----------------------------------------
🔹 filter() 
- Purpose: Select elements based on a condition, return a new array with only those.
- Does NOT change the original array.
- Think: “I only want some of the elements.”

Example:
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

-----------------------------------------
🔹 reduce() 
- Purpose: Reduce the array to a single value (sum, product, max, etc.).
- Think: “I want to combine everything into one thing.”

Example:
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10

-----------------------------------------
⚡ Comparison
- map → transform each element → returns new array (same size)
- filter → pick some elements → returns new array (≤ size)
- reduce → combine all elements → returns single value
-----------------------------------------
*/
