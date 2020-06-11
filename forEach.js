const chunks = ["one=1", "two=2", "three=3"];

let result = {};


//forEach loops around element by element as 'chunk' in the array 'chunks'
chunks.forEach((chunk)=>{
    const parts = chunk.split('='); //chunk = 'one=1', parts = ['one','1']
    const key = parts[0]; //key = 'one'
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    
    result[key] = value; //result = {one: 1}
});

// console.log(result); // {one:1, two:2, three:3}

//위에보다 더 간단한 방법 (구조분해 할당 사용)

const result2 = {};
chunks.forEach((chunk)=>{
    const [key,value] = chunk.split('='); //key = 'one', value = '10'
    // console.log(key); //one
    // console.log(value); //1
    result2[key] = value; //result = {one: '1'}
});

// console.log(result2); // {one:'1', two:'2', three:'3'}