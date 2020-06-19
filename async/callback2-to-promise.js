class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(
                    (id === 'jason' && password ==='ko') || (id === 'dream' && password ==='coder')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            },2000);
        });
    }
    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(user === 'jason'){
                    resolve({name:'jason', role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter ur id');
const password = prompt('enter ur password');

userStorage
.loginUser(id, password)
.then(user => userStorage.getRoles(user))
.then(user=> alert(`Hello ${user.name}, you have a ${user.role} role`))