//Synchronus( in sequence it is executed)
console.log("one");
console.log("two");


// Asynchronous()
//      when a instruction takes time to get executed then we use asynchronous 

function hello(){
    console.log("hello");
}
setTimeout(()=>{
    console.log("hello")
},5000);

console.log("three");
console.log("four");

//callbacks
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);


// Callback Hell- nesting of callback
function getData(dataId){
    setTimeout(()=>{
        console.log("Data:",dataId);
    },2000)    
}

// Promises: are used to make the callback hell better
//      it is for eventual completions of task i.e. it will eventually complete the task

let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    resolve("success");
})


//Promise chain 
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    })
}
console.log("Fetching data1..........")
let p1=asyncFunc1();


p1.then((res)=>{
    console.log(res);
    console.log("Fetching data2..........");
    let p2=asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    })
})



//Async-Await Functions- Making it simpler than promise
// async functions always returns a promise


//await pauses the executions of its surronding async function until the promise is settled
//await only used in async function

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);            
        }, 2000);
    })
}
async function getWeatherData(){
    await api();//1
    await api();//2
}

// IIFE -immediately invoked function Expression
(async function getWeatherData(){
    await api();//1
    await api();//2
})();