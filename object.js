'use strict';

//ES5 Eaxmple declaring, modifying objects - 불편함
{
    var x = 0;
    var y = 0;
    var obj = {x:x, y:y}; //키 이름과 키 값이 동일할때 반복해서 적어야하는 불편함

    var randomKeyString = 'other';

    //연산 결과로 키값을 대입할 때는 키값을 지정할 코드를 추가로 작성해야하는 불편함
    var combined = {}; //empty object
    combined['one' + randomKeyString] = 'some value'; //add new property {"oneother: "some value"}
    // console.log(combined); //{"oneother: "some value"}

    var obj2 = {
        x:x,
        //객체에 함수를 추가할 때는 변수에 함수를 할당해야하는 불편함
        methodA: function(){
            console.log('methodA');
        },
        methodB: function(){
            return 0;
        }
    };
}


//ES6 Example - 편리함
{
    let x = 10;
    let y = 10;

    const obj = {x, y}; //객체에 변수를 선언할 때 키 값을 생략하면 자동으로 키의 이름으로 키값을 지정하는 편리함
    // console.log(obj); //{x: 10, y: 10}

    //객체 생성 블록 안에 대활호 [] 를 사용하여 표현식을 작성하면 추가하여 계산된 키 값을 생성 할 수 있는 편리함
    let randomKeyString = 'other';
    const combined = {
        ['one' + randomKeyString]: 'some value'
    };
    // console.log(combined); //{oneother: "some value"}

    const obj2 = {
        x, //키 이름과 키 값이 동일
        //function 키워드 생략 가능한 편리함
        methodA(){
            console.log('methodA');
        },
        methodB(){
            return 0;
        }
    }

}