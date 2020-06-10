'use strict';

//ES6

//ES6의 구조할당은 앞에서 배운 전개 연산자(spead operator)를 함께 사용한다. 
//ES6의 구조 분해와 구조 할당은 함수 인잣값을 다루거나 JSON 데이터를 변환할 때 유용하게 사용하므로 꼭 기억하는 것이 좋다

//배열의 구조할당
var [item1, ...otherItems] = [0, 1, 2]; 
// console.log(item1); //0
// console.log(otherItems); //1, 2

//객체의 구조할당
var {key1, ...others} = {key1: 'one', key2: 'two'}; //객체의 key '키값'을 추출하고 나머지 키값을 포함한 '새 객체'를 other에 할당한다
// console.log(key1); //one
// console.log(others); //{key2: 'two'}
//객체의 구조할당 (반대로)
var {key2, ...others} = {key1: 'one', key2: 'two'};
// console.log(key2); //two
// console.log(others); //{key1: 'one'}