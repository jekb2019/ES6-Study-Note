'use strict';

//AKA fat arrow function
//arrow function in ES6 ommits 'function' keyword and uses => in between () and {} (parameters and bock).
var add = (first, second) => {
    return first + second;
};
var add = (first, second) => first + second; //when there is only one line of statement, you can ommit {}
var addAndMultiple = (first, second) => ({add: first + second, multiple: first*second}); //if return type is an object, you can cover it with ()
// console.log(addAndMultiple(1, 2)); //{add:3, multiple:2}

//Function returning another function
    //ES5 example
    function addNumber1(num){
        return function(value){
            return num + value;
        };
    };
    // console.log(addNumber1(10)(20));//30
    
    //ES6 example
    var addNumber2 =  num => value => num + value; //you can ommit () for (num) and (value) as there is only single parameter
    // console.log(addNumber2(10)(20));//30

//화살표 함수는 콜백함수의 this 범위로 생기는 오류를 피하기 위해 bind()함수를 사용하여 this 객체를 전달하는 과정을 포함하고 있다.
class MyClass{
    value = 10;
    constructor(){
        //addThis2는 화살표 함수가 아니기 때문에 this를 bind()함수에 전달하여 this의 범위를 유지한다
        var addThis2 = function(first, second){
            return this.value + first + second;
        }.bind(this);
        // console.log(addThis2(1, 2)); //13

        //addThis3는 화살표 함수이르모 bind()과정이 생략되었다
        var addThis3 = (first, second) => this.value + first + second;
    }
}

var m = new MyClass();
console.log(m);