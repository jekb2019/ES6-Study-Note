// JSON
// Javscript Object Notation

// 1. Object to JSON
// stringify(obj)

let json = JSON.stringify(['apple','banana']); //배열을 JSON으로 변환
console.log(json); //["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol("id"), //자바스크립트에만 있는 Symbol같은 데이터도 JSON에 포함되지 않는다.
    jump(){//함수는 JSON에 포함되지 않는다. Object에 있는 데이터가 아니기 때문
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(rabbit); //object를 JSON으로 변환
console.log(json); //{"name":"tori","color":"white","size":null,"birthDate":"2020-06-17T23:12:36.876Z"}

json = JSON.stringify(rabbit, ["name","color"]); //object를 JSON으로 변환. Replacer array를 통해 name, color값만 JSON으로 변환
console.log(json); //{"name":"tori","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name'? 'ellie':value; //name키의 값을 ellie로 변경
}); //object를 JSON으로 변환. Replacer function를 통해 name, color값만 JSON으로 변환
console.log(json); //{"name":"ellie","color":"white","size":null,"birthDate":"2020-06-17T23:33:04.977Z"}


// 2. JSON to Object
// parse(json)
console.clear();

json = JSON.stringify(rabbit);
console.log(json);
//JSON을 object로 변환
const object = JSON.parse(json, (key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value; // date객체를 다시 revive하는 콜백함수
});
console.log(object);
// object.jump(); //안됨. JSON에 함수는 없음.
console.log(object.birthDate.getDate()); // reviver 콜백함수를 사용했기 때문에 가능