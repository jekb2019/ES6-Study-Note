'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = ['apple', 'banana'];

// 2. Index position
const fruits = ['apple','banana'];
// console.log(fruits); 
// console.log(fruits.length); // 2
// console.log(fruits[0]); // apple

// looping
for(let fruit of fruits){
    // console.log(fruit); //apple banana
}
fruits.forEach((fruit) => {
    // console.log(fruit);
});

// 4. addition, deletion, copy
//Add item to the end
fruits.push('pear','berry');
// console.log(fruits); //["apple", "banana", "pear", "berry"]
//remove item from the end
fruits.pop();
// console.log(fruits); //["apple", "banana", "pear"]
//Add item to the front
fruits.unshift('pawpaw');
// console.log(fruits);
//remove item from the front
fruits.shift();
// console.log(fruits);
//remove item in the middle of the array
fruits.splice(2,1);
// console.log(fruits);