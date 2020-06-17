//다음은 배열 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]의 함을 계산하는 sum()함수를 recue()함수를 통해 만든 것이다.

function sum(numbers){
    return numbers.reduce((total,num) => total + num, 0);
}
const val = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(val);//55

//이 방법을 응용하면 배열을 다른 형태로 변환할 수 있다.
//배열을 객체 형태로 바꾸어보자

{
    const chunks = ["one=1", "two=2", "three=3"];
    chunks.map((chunk) => {
        const [key, value] = chunk.split('='); //key = 'one', value = '1'
        return {key, value};
    })// returns [{key: 'one', value:'1'}, {key: 'two', value:'2'}, {key: 'three', value:'3'}]
    .reduce((result,item) => {
        result[item.key] = item.value;
        // console.log(result);
        return result;
    },{}); //{}는 result의 초기값
    //result의 마지막 값은 {one: "1", two: "2", three: "3"}가 된다.



    //결론적으로 [{key: 'one', value:'1'}, {key: 'two', value:'2'}, {key: 'three', value:'3'}]를 {one: "1", two: "2", three: "3"}로 바꾸었다.
}