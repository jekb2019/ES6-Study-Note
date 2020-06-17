// 'use strict';

// // Callback function in ES5
// function work1(onDone){
//     setTimeout(()=> onDone('작업1 완료!'), 100);
// }
// function work2(onDone){
//     setTimeout(()=> onDone('작업2 완료!'), 200);
// }
// function work3(onDone){
//     setTimeout(()=> onDone('작업3 완료!'), 300);
// }
// function urgentWork(){
//     // console.log('긴급작업');
// }

// // Callback hell!!!!!!!!!!!
// work1(function(msg){
//     // console.log('done after 100ms' + msg);
//     work2(function(msg){
//         // console.log('done after 300ms' +msg);
//         work3(function(msg){
//             // console.log('done after 600ms' +msg);
//         })
        
//     });
// });
// urgentWork();

// // Callback function in ES6

// const workOne = () =>
//     new Promise((resolve)=>{
//         setTimeout(()=>resolve('작업1 완료!'),1000);
//     });

// const workTwo = () =>
//     new Promise((resolve)=>{
//         setTimeout(()=>resolve('작업2 완료!'),2000);
//     });
// const workThree = () =>
//     new Promise((resolve)=>{
//         setTimeout(()=>resolve('작업3 완료!'),3000);
//     });
// function urgent(){
//     console.log("긴급작업");
// }
// const nextWorkOnDone = (msg1) => {
//     console.log('done after 100ms:' + msg1);
//     return workTwo();
// }

// workOne().then(nextWorkOnDone).then((msg2)=>{
//     console.log('done after 200ms:' + msg2);
// }).then((msg3)=>{
//     console.log('done after 600ms:' + msg3);
// });
// urgent();
