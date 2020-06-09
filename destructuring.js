//ES5 example

//extracting elements
var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1; //if does not exist (undefined), assign -1
// console.log(`${item1} ${item2} ${item3}`);

//switching places
var temp = item2;
item2 = item1;
item1 = temp;
// console.log(`${item1} ${item2} ${item3}`);

var obj = {
    key1: 'one',
    key2: 'two',
};

var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value'; //if does not exist (undefined), assign 'default key3 value'
// console.log(`${key1} ${key2} ${key3}`); //one two default key3 value

var newkey1 = obj.key1;
// console.log(newkey1);

//ES6 Example

//대괄호 [] 사이에 추출하고자 하는 값의 인덱스 위치에 변수를 배치함
var list = [0,1];
var [
    item1,
    item2,
    item3 = -1,
] = list;
console.log(`${item1} ${item2} ${item3}`); //0 1 -1

//easy switching place between elements
[item2, item1] = [item1, item2];
console.log(`${item1} ${item2} ${item3}`); //1 0 -1

var obj = {
    key1: 'one111',
    key2:  'two222'
};

//객체에 키 값을 변수에 할당
// console.log(key2); //two
var {
    key1: newKey1,
    key2,
    key3 = 'default key3 value333',
} = obj;
// console.log(`${newkey1} ${key2} ${key3}`); //one two222 default key3 value333