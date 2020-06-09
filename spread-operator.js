'use strict';

//Title: 전개 연산자 Spread Operator (...)
//나열형 자료를 추출하거나 연결할때 사용된다.
//배열, 객체, 함수 인자 표현식 ([], {}, ())안에서만 사용 가능하다


//배열에 사용한 예
{
    let array1 = ['one', 'two'];
    let array2 = ['three', 'four'];
        //배열 합치지
    const combined = [...array1, ...array2];
    // console.log(combined);// ["one", "two", "three", "four"]

        //요소 추출하기
    const [first, second, third = 'empty', ...others] = array1;
    // console.log(first); //one
    // console.log(second); //two
    // console.log(third); //empty --비어있을경우 기본값으로 empty를 준다
    // console.log(others); //[]
}

//객체에 사용한 예
{
    let objectOne = {one: 1, two:2, other:0};
    let objectTwo = {three:3, four:4, other:-1};
    let combinedObject = {
        ...objectOne,
        ...objectTwo,
    };
    // console.log(combinedObject);//{one:1, two:2, three:3, four:4, other:-1} other는 두번째 object에 의해 덮어씌워진다
    let {other, ...others} = combinedObject; //객체에서 특정 값을 추출할 때는 추출하려는 키 이름(other)을 맞추고 나머지는 전개 연산자로 선언된 변수(others)에 할당한다
    // console.log(other); //other = -1
    // console.log(others); //others = {one:1, two:2, three:3, four:4}
}