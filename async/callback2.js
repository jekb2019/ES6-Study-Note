'use strict'


// Javascript is synchronous.
// EXecute the code block by order ofter hoisting
// hoisting: var, function declaration going to the top

// setTimeout(()=> console.log("출력!"), 1000);

// Synchronous callback
function printImmediately(print){
    print();
};
// printImmediately(()=>console.log('hello'));
// Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print, timeout);

}
// printWithDelay(()=>console.log("느릿느릿"),3000);


// callback HELL
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'jason' && password ==='ko') || (id === 'dream' && password ==='coder')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'jason'){
                onSuccess({name:'jason', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
// const id = prompt('enter ur id');
// const password = prompt('pw');
// userStorage.loginUser(
//     id, 
//     password, 
//     (user)=>{
//         console.log(user);
//         userStorage.getRoles(
//             user, 
//             (userWithRole)=>{alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)},
//             (error)=>{console.log(error)}
//             );
//     }, 
//     (error)=>{console.log(error)}
// );