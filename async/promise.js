// 'use strict';

// // Promise is a JS object for asynchronous operation. (콜백 함수 대신 유용하게 쓸 수 있는 오브젝트)
// // state: pending (operation 진행중) -> fulfilled (operation 완료) or rejected (operation 완료 애러)
// // producet vs consumer


// // 1. Producer

// //promise를 만드는 순간 executor가 바로 실행된다
// const promise = new Promise((resolve, reject)=>{
//     //doing some heavy work (network, reading files, etc)
//     console.log('[executor] doing something...');
//     setTimeout(()=>{
//         resolve('ellie'); // 성공적이면 resolve를 부른다
//         // reject(new Error('no network'));
//     },2000);
// });

// // 2. Consumer: then, catch, finally를 이용하여 값을 받아옴
// promise.then((value)=>{
//     //resolve가 실행되었다면 value는 위에 resolve에서 값으로 전될된 'ellie'가 된다
//     //반대로 reject가 실행되었다면  value는 위에 reject에서 값으로 전될된 에러가 된다
//     console.log(value);
// }).catch(error =>{ // 에러가 발생할 경우 핸들링 (then 또한 Promise를 리턴하기 때문에, chaining기법 사용 가능)
//     console.log(error);
// }).finally(()=>{
//     console.log('finally')
// }); // 성공/실패와 관련 없이 실행된 (catch 또한 Promise를 리턴하기 때문에, chaining 기법 사용 가능)


// // 3. Promise Chaining
// const fetchNumber = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1);
//     },1000)
// });

// fetchNumber
// .then(num => num*2)
// .then(num => num*3)
// .then(num =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve(num-1),1000);
//     });
// })
// .then(num => console.log(num));

// // 4. Error Handling
// const getHen = () =>
//     new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve('[HEN]'),1000)
//     });

// const getEgg = hen =>
//     new Promise((resolve,reject)=>{
//         setTimeout(()=> reject(new Error(`${hen} => [EGG]`)),1000);
//     });

// const cook = egg =>
//     new Promise((resolve,reject)=>{
//        setTimeout(()=> resolve(`${egg} => [FRIED]`),1000) 
//     });

// getHen()
// .then(hen => getEgg(hen)) // then(getEgg) 이렇게 생략 가능
// .catch(error =>{
//     return '[BREAD]';
// })// 에러를 잡았을 경우 체인을 방해하지 않고 다르게 실행
// .then(egg => cook(egg))
// .then(meal => console.log(meal))
// .catch(error => console.log(error)); //에서 핸들링은 맨 마지막에 해도 괜찮다. 에러는 아래로 전달되기 때문이다