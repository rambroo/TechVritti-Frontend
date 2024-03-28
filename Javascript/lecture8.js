// //Priority:- Javascript Event > Inline Event
// // When more than 1 handler the last one is only prioritized
// //      for e.g btn1

// // Refer the btn 3 for Event Object

// // Event Listeners- Helps with multiple execution
// //      node.addEventListener(event,callback);
// //      node.removeEventListener(event,callback);
// //      Note- the callback reference should be the same to remove
// // Refer btn1 for event listeners
// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a =25;
//     a++;
//     console.log(a);
// }
// btn1.onclick=()=>{
//     console.log("-1");
//     // console.log("Here the operation of the 1st handler will also not execute only 2nd Handler")    
// }
// btn1.addEventListener("click",(e)=>{
//     console.log("button 1 was fucked up 0 times with event listener")
//     // console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.clientX);
// });
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was fucked up 1 time with event listener")
// });
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was fucked up 2 time with event listener")
// });

// // we store the function inside a variable so easily add and remove them.
// //      as removing is not possible with just copy pasting the functions
// const handler3=()=>{
//     console.log("button 1 was fucked up 3 time with event listener")
// }
// btn1.addEventListener("click",handler3);


// btn1.addEventListener("click",()=>{
//     console.log("button 1 was fucked up 4 time with event listener")
// });

// //if We did this , it would not have worked as it will take another memory and not remove
// //      the part where the function actually is
// //  btn1.removeEventListener("click", ()=>{
// //     console.log("button 1 was fucked up 2 time with event listener")
// // });

// btn1.removeEventListener("click", handler3);




// let btn2=document.querySelector("#btn2");
// btn2.ondblclick=()=>{
//     console.log("btn2 was clicked");
//     let b =68;
//     b++;
//     console.log(b);
//     console.log(typeof b);
// }



// let btn3=document.querySelector("#btn3");
// btn3.onclick=(e)=>{
//     console.log(e);
//     //properties
//     //1. Target : Where the event is stored
//     //2. type: What type the function is i.e. click
//     //3. ClientX: Horizontally where
//     //4. ClientY: Vertically where
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }




// let div1=document.querySelector("div");
// div1.onclick=()=>{
//     alert("Press the div after reading terms and conditions");
//     console.log("div was clicked");
//     let c =100;
//     c++;
//     console.log(c);
//     console.log(typeof c);
// }
// let div2=document.querySelector("div");
// div2.onmouseover=()=>{
//     console.log("div was hovered");
//     let c =100;
//     c++;
//     console.log(c);
//     console.log(typeof c);
// }
// div1.onclick=(e)=>{
//     console.log(e);
//     //properties
//     //1. Target : Where the event is stored
//     //2. type: What type the function is i.e. click
//     //3. ClientX: Horizontally where
//     //4. ClientY: Vertically where
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }



// Tutorial practice
// 1. Create a toggle button that changes the screen to dark-mode when clicked
//      & light-mode when clicked again
let btnq1=document.querySelector("#question1");
let body=document.querySelector("body");
let mode="light";
btnq1.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        // body.style.backgroundColor="black";// 1 way of doing
        body.classList.remove("lightmode");
        body.classList.add("darkmode");
    }else{
        mode="light";
        body.classList.remove("darkmode");
        body.classList.add("lightmode");
        // body.style.backgroundColor="white" ;  1 way of doing
    }
}
)