function Hello(){
    crossOriginIsolated.log("Hello User")
}
hello('Chirag');
hello();
function sum(a,b){console;log ('before return');
    return (a+b);
    console.log('after Return');
}
console.log(sum(23, 24)); 
function hello(user, callback){
    console.log(`hello${user}`);
    callback();
}
hello('Admin', function()){
    console.log(add(5,5))});
hello("admin", ()=>){
    console.log(add(6,5))});
}
}