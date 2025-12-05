// map stores in key : value pair key should be unique

const map1 = new Map();
map1.set(3,90);
map1.set("Rohit",45);
map1.set(20,"Mohan");
map1.set(3,80);//same key h toh nahi lega , unique key honi chahiye , par uski 'value' update krdega same 'key' wale ki.

map1.delete(20);
console.log(map1);
console.log(map1.size); 
console.log( map1.has(20));
// map1.clear();
console.log(map1);




// OR can be initialized in 2D array form.


const map2 = new Map ([
    [4,"Rohit"],
    ["Mohan",35],
    ["age",23],
    [63,78]
]);

console.log(map2);
// acccessing one element of map
console.log(map2.get(4));         
console.log(map2.get("Mohan"));  
console.log(map2.get("age"));    
console.log(map2.get(63));       
// console.log(map2.get("notfound")); //output :- undefined 

// iterating over map through for-of loop bcoz map is iterable unlike object , A Map has a built-in method [Symbol.iterator]().

//Yes, exactly! A JavaScript Map is an iterable, just like an array, which means you can use square brackets [] to destructure its entries because each entry in a Map is an array [key, value] 
for(let [key,value] of map2){
    console.log(key,value);
}

// To get key-value pairs as arrays, use Object.entries(): in traditional Object


const obj = {
    na:"Raj",
    age:19,
    year:2025,
}

const entries = Object.entries(obj);
// entries = [['foo', 'bar'], ['baz', 42]]

// Destructure key and value from each entry
for (const [key, value] of entries) {
  console.log(key, value);
}





