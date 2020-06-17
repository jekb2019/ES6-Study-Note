'use strict';

//map() 함수는 각 배열의 요소를 정의된 함수를 통해 변환한 결괏값들로 바꾸어서 새 배열로 반환한다.
//쉽게 말해서 배열을 가공해서 새 배열을 만드는 함수이다.


//1. Array에 사용한 예:
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
// console.log(map1); output: Array [2, 8, 18, 32]

//2. Array of Objects를 output으로 사용한 예:
const chunkss = ["one=1", "two=2", "three=3"];
const out = chunkss.map((chunk) => { //chunk = 'one=1'
    const[key, value] = chunk.split('='); //key = 'one', value = '1';
    return {key: key, value: value};
});

// console.log(out); //[{…}, {…}, {…}] 여기서 얻은 결과값은 하나의 객체가 아니라 배열이다. 
//만약 배열을 객체로 변환하고 싶다면 reduce()함수를 사용하면 된다. 내가 정리한 reduce.js를 보자
