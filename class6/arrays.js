const arr=[2,3,4,"Shreyas",12,true];
console.log(arr);
console.log(arr.length);
console.log(arr[1]);
// // at wala negative index bhi leta h
console.log(arr.at(-2));

const newarr = arr;
console.log(newarr==arr);
// // Structured clone makes clone of the existing (arr)  value but stores at different address , yaha par dono ka address alag h aur  andar ka value same h .
console.log(newarr==structuredClone(arr));

arr.push(20);
console.log(arr);
arr.pop();
console.log(arr);

// //"The unshift method is used for adding elements at the start

// arr.unshift(10);
// console.log(arr);

// // shift is used for deleting from the start

// arr.shift();
// console.log(arr);

// // delete , it has a drawaback that when deleting any value stored at that particular index the value inside the index is deleted but the vacant space (index) is still present occupying memory storage while being empty
// delete arr [1];
// console.log(arr);

console.log(arr);
// What is the index of asked value
console.log(arr.indexOf(1));
// is the value present , if yes/no  than replyies in true or false
console.log(arr.includes(1));


// slice , yaha 2nd index se 4th index tak pr 4th index excluded rhega
console.log(arr.slice(2,4));
// slice mein original array mein kuch nahi hota h 
console.log(arr);


// splice , yaha par 2nd index se 4 value chahiye
console.log(arr.splice(2,4));
// splice mein original array mein manipulation hota h 
console.log(arr);
// splice , yaha par index 1 aur 2 ke value delete hogye aur add ussi index se start hua jaha se index delete hona chalu hua h (index 1 se add start hua )
arr.splice(1,2,"shukla",2,5,false); 
console.log(arr);

// ismein koi value delete nahi hogi bas , add 1st index se hona start ho jaayegi.
arr.splice(1,0,"raju");
console.log(arr); 

// converting to string
console.log(arr.toString());
console.log(typeof(arr.toString()));
// Joining
console.log(arr.join("*"));
// Concatenation
let arr1 = [2,34,5,6,"sam"];
let arr2 = [3,4,5,5,"raju"];
let arr4 = [6,7,7,"manu"];
let arr3 = arr1.concat(arr2);

console.log(arr3);
console.log(arr1.concat(arr2,arr4));

// 2D Array

let array = [[1,2,3],[5,6,7],[8,9,0]];
console.log(array[0][2]);

// 3D Array

let array2 = [[1,2,[6,7]],[3,4,[5,6]]];
console.log(array2[1][2][0]);
let array3 = [[1,2,[6,7]],[3,4,5]];
console.log(array3[0][2][0]);

// Converting any Multidimensional Array into to Single Array
// use infinity if doesn't know what level (2d or 3d etc..) of Multidimensional Array is given to get it converted to a single array(1d) , by default it is 2D Array 
console.log(array3.flat(Infinity));

// Used to Identify if it's a array
let abc = [1,4,6,7];
console.log(Array.isArray(abc));

// Array is Javascript does not work on principle of Contigous memory allocation alike c++ 
// because in c++ we know if we edit any index value (ex:- it is an integer type array ) then adding ,editing aur exchanging any value should be  same as integer type so the memory taken will be same 4byte  this is why this technique works in c++

// But in javascript any value can be edited , exchanged or added albeit of having different stored value of different dataypes (int , string etc..) , unlike c++ ,because of abandoning the contigous memory allocation technique







 











