// function register(){
//     console.log('register end');
// }
// function sendEmail(){
//     console.log('send email end');
// }
// function login(){
//     console.log('login end');
// }
// function getData(){
//     console.log('get data end');
// }
// function displayData(){
//     console.log('display Data End')
// }

// register();
// sendEmail();
// login();
// getData();
// displayData();
// console.log('call other application');

// function register(){
//     waitforfiveseconds();
//     console.log('register end');
// }
// function sendEmail(){
//     waitforfiveseconds();
//     console.log('send email end');
// }
// function login(){
//     waitforfiveseconds();
//     console.log('login end');
// }
// function getData(){
//     waitforfiveseconds();
//     console.log('get data end');
// }
// function displayData(){
//     waitforfiveseconds();
//     console.log('display Data End')
// }
// function waitforfiveseconds(){
//     const ms=new Date().getTime()+5000;
//     while(new Date().getTime()<ms)
//     {}
// }

// register();
// sendEmail();
// login();
// getData();
// displayData();
// console.log('call other application');

// function register(cb){
//     setTimeout(()=>{
//        console.log('register end');
//        cb();
//     },5000)
    
// }
// function sendEmail(cb){
//      setTimeout(()=>{
//        console.log('send email end');
//        cb();
//     },3000)
    
// }
// function login(cb){
//     setTimeout(()=>{
//        console.log('login end');
//        cb();
//     },1000)
    
// }
// function getData(cb){
//     setTimeout(()=>{
//         console.log('get data end');
//         cb();
//     },2000)
   
// }
// function displayData(){
//      setTimeout(()=>{
//         console.log('display Data End')
//     },4000)
    
// }
// //callback Hell
// register(()=>{
//            sendEmail(()=>{
//                       login(()=>{
//                             getData(()=>{
//                                 displayData();
//                             });
//                       });
//            });
// });

// console.log('call other application');


function register(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
       console.log('register end');
       resolve();
    },5000)
    })
    
    
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       console.log('send email end');
       resolve();
    },3000)
    })
     
    
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
       console.log('login end');
       resolve();
    },1000)
    })
    
    
}
function getData(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log('get data end');
        resolve();
    },2000)
    })
    
   
}
function displayData(){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
        console.log('display Data End');
        resolve();
    },4000)
    })
     
    
}
//callback Hell
// register(()=>{
//            sendEmail(()=>{
//                       login(()=>{
//                             getData(()=>{
//                                 displayData();
//                             });
//                       });
//            });
// });
//   register()
//   .then(sendEmail)
//   .then(login)
//   .then(getData)
//   .then(displayData)
//   .catch((err)=>{console.log('Error: '+err)})
//   .finally(()=>{console.log('inside finally')})


async function f1(){
    try{
await register();
await sendEmail();
await login();
await getData();
await displayData();
    }
    catch(err){
        console.log('Error :'+err);
    }
}
f1();
console.log('call other application');

