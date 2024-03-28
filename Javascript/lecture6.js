// //DOM DOCUMENT OBJECT MODEL
// // FOR OBJECT WE USE CONSOLE.DIR
// console.dir(document.body); // print properties and methods of special object
// console.log(document.body); // to print the objects

// //DOM MANIPULATION
// // 1. Selecting by Id   
// let heading=document.getElementById("myId");
// console.log(heading);
// console.dir(heading);
// //2. Selecting by class
// let headingClass=document.getElementsByClassName("myClass")
// console.log(headingClass)
// //3. Selecting by Tag Name
// let para=document.getElementsByTagName("p");
// console.dir(para);
// //4. Query Selector
// let firstEle=document.querySelector("p");
// console.dir(firstEle);

// let allEle=document.querySelectorAll("p"); //Return Node List;
// console.dir(allEle);

// let getClass=document.querySelector(".myClass");
// console.dir(getClass);

// let getAllClass=document.querySelectorAll(".myClass");
// console.dir(getAllClass);

// // PROPERTIES
// // a. tagName
// console.log(firstEle.tagName)
// //b. innerText: returns the text content of the element and all its children

// let div=document.querySelector("div");
// console.log(div.innerText)
// console.log(div.innerHTML)
// //c. innerHtml: return the text content along with the html tags
// div.innerHTML="<div> New div</div>"
// console.log(div.innerHTML)
// //d. textContect: returns the textual content even from hidden contents
// div.textContent



// //TUTORIAL

// //Question 1
// let text=subHeading.innerText;
// let newSubHeading=text+" from Apna College students"
// subHeading.innerText=newSubHeading
// //another way to do the same
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" from Apna College students";
// console.dir(h2.innerText);

//QUESTION 2
let divs=document.querySelectorAll(".box");
// console.dir(divs)
// console.log(divs[0]);
// divs[0].innerText="new Unique value 1"
// divs[1].innerText="new Unique value 2"
// divs[2].innerText="new Unique value 3"
for(let div of divs){
    divs[div].innerText=prompt("Write");
}