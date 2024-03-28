 // //objects
// const employee={
    
//     calcTax2:function(){
//         console.log("tax is 20%");
//     }

// };
// const karanArjun={
//     salary:50000,
//     calcTax2(){
//         console.log("tax is 30%");
//     }
// }
// karanArjun.__proto__=employee; 
// console.log(karanArjun.calcTax1);
// console.log(karanArjun.calcTax2);


//Classes
// template to make many objects

class ToyotaCar{
    constructor(){
        console.log("creating new object")
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    } 
    setBrand(brand){
        this.brandName=brand; 
    }
} 
//  Creating an object through classes
let fortuner=new ToyotaCar();
fortuner.setBrand("Rohan");
console.log(fortuner.brandName);
// console.log(fortuner.start);
let lexus=new ToyotaCar();


//Constructor: A method in Classes
//      Automatically invoked by new
//      initializes object


// Inheritance 
//      inheritance is passing down properties & methods from parent class to child class

class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{
     
}
let obj=new Child();
obj.hello();
class Person{
    constructor(name){
        console.log("enter parent constructor");
        this.name=name;
        console.log("exit parent constructor");
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Do nothing");
    }
}
class Engineer extends Person{
    constructor(name,branch){
        console.log("enter child constructor");
        super(name);
        this.branch=branch;
        console.log("exit child constructor");
    }
    work(){
        super.eat();
        console.log("solve problems,build something");
    }
}
let engObj=new Engineer("chemical Engineer");
let eng1=new Engineer("rohan","");
// let p1=new Person();
// console.log(engObj);





// Practice questions
//1. you  are creating a website for your college . Create a class User with 2 properties, name & email.
//  It also has a method called viewData() that allows the user to view website data.



// let data= "secret information";
// class college{
    //     constructor(name,email){
        //         this.name=name;
        //         this.email=email;
        //     }
        //     viewData(){

//         console.log("data=",data)
//     }
// }

// let s1=new college("rohan", "rohanrambhiya59@gmail.com");
// let s2=new college("yash", "yshchutiya59@gmail.com");
// console.log(s2); 


// 2. Create a new class called Admin which inherits from User. Add a new method called editData to Admin 
//      that allows it to edit website data
let data= "secret information";
class college{

    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data=",data)
    }
}
class admin extends college{
    constructor(name, email){
        super(name,email);
    }
    editData(){
        data="some new value";
    }
}

let s1=new college("rohan", "rohanrambhiya59@gmail.com");
let s2=new college("yash", "yshchutiya59@gmail.com");
let admin1=new admin("admin","admin@gmail.com");
console.log(admin1);  
admin1.editData()
console.log(data);  

//Error Handling
// try-catch
try{
    //error code
}catch(err){
    console.log(err); 
    //to handle error
} 