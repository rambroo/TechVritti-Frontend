//getAttribute(attr): to get the attribute value
let div=document.querySelector("div");
// console.log(div);
let id =div.getAttribute("id");
console.log(id);//id ki value

let name=div.getAttribute("name");
console.log(name);
let para=document.querySelector("p");
let pAtr=para.getAttribute("class");
console.log(pAtr)


//setAttribute(attr,value)//to set the attribute val th
// We do the same thing to change the attribute except for

let newAttribute=div.getAttribute("name");
console.log(newAttribute);
div.setAttribute("name","1234");
newAttribute=div.getAttribute("name");
console.log(newAttribute);

//Style attribute
//node.style
console.log(div.style);
div.style.backgroundColor="green";
div.style.backgroundColor="purple";
div.style.fontSize="";
div.innerText="Hello World";
div.style.visibility="";

// INSERT ELEMENTS
// 1. CREATE ELEMENT
let newBtn1=document.createElement("button");
let newBtn2=document.createElement("button");
let newBtn3=document.createElement("button");
let newBtn4=document.createElement("button");
newBtn1.innerText="Click Me!";
newBtn2.innerText="Tease Me!";
newBtn3.innerText="Fuck Me!";
newBtn4.innerText="Cum On Me!";
// console.log(newBtn)

// 2. ADD ELEMENT
// a. node.append() adds at the end of node(inside)
div.append(newBtn1);
// b. node.prepend() adds at the start of node(inside)
div.prepend(newBtn2);
// c. node.before() adds before the node (outside)
div.before(newBtn3)
// d. node.after() adds after the node (outside)
div.after(newBtn4)

//3. REMOVE
para.remove();
newBtn1.remove();


const fragment = document.createDocumentFragment();
const h1 = document.createElement("h1");
h1.textContent = "New Heading";
const p = document.createElement("p");
p.textContent = "This is a new paragraph.";
fragment.appendChild(h1);
fragment.appendChild(p);

// Now append the entire fragment to the body
document.body.appendChild(fragment);


let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]

let div = document.createElement("div");
let p = document.createElement("p");
div.prepend("Some text", p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]



//  Question 1 Create new butoon. Give it a text "click me " Backgoround color of red and text color of white
//   Insert the butoon as the first element inside the body tag

let newBtn1=document.createElement("button");
newBtn1.innerText="Click Me!";