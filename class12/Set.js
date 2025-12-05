// let arr = [10,20,30,10,30];
// set : unique values cannot have same values like arr 
const set1 = new Set ([10,20,40,20]);//will only show unique no repeated will not be displayed
console.log(typeof(set1));
console.log(set1);


// 2nd Way
const set2 = new Set ();
set2.add(10);
set2.add(20);
set2.add(30);
set2.add(40);
set2.add("Ram");
set2.add(true);

console.log(set2);
set2.delete(20);
console.log(set2);
console.log(set2.size);

// InstaGram:Id

const user_id = new Set(["shreyas_shukla","shrey2006","Ram_kshatriya1"]);
let new_user = "shreyas_shukla";
console.log(user_id.has(new_user));//has returns in true or false if element is present or not.

user_id.clear();
console.log(user_id);


let set3 = new Set ([10,20,30,40,50]);
let set4 = new Set ([50,60,20,10]);

// Union of Sets
let set5 = new Set([...set3,...set4]);
//([10,20,30,40,50|set3|,50,60,20,10|set5|]) kuch aisa dikhega spread operator lagane ke baad ek ek element aayenge nikal ke bahar kyunki spread operator array ki tarah treat krta h 
console.log(set5);

// Intersection of Sets
// filter -> arrya ke upar lagta h 
const result = new Set ([...set3].filter((num)=> set2.has(num)));

console.log(result);

// iterate over Set through for-of loop bcoz it has it's own iterator unlike objects which dosn't have it's own.
for(let value of set3){
    console.log(value);
}
// OR thorugh forEach.

set3.forEach((value)=>console.log(value));





