// let randomNumber = prompt('Enter the number', '');
// if(randomNumber>0){
//     alert(1)
// }else if(randomNumber<0){
//     alert("-1")
// }else{
//     alert("0")
// }


// let result;
// (a + b < 4)? result = 'Below':  result = 'Over';


// alert( !!null ); // false
// alert( !Boolean(null) ); // false

// alert( alert(1) && alert(3) );
// alert(1 && 2)
// alert(1 && null && 2);

/*
let userName=prompt("Enter your username");

if(userName=="Admin") 
    {
        let pass=prompt("Enter your password");
        if(pass=="TheMaster"){
            alert("Welcome") 
        }else if(pass!="TheMaster"&& pass!=null){
            alert("Wrong password") 
        }else if(pass==null||pass==null){
            alert("Cancelled")
        }else{
            alert(undefined)
        }
    }
*/    


/*
// THE FOR OF LOOP IS USED TO TRAVERSE EACH CHARACTER IN A LOOP OR A STRING OR AN ARRAY
// THEY DONT NEED THE START POINT OR THE END POINT OR THE OPERATION OPERATOR

// FOR OF
let name="Rohan Rambhiya"
for(let i of name){
    console.log(i)
}
*/


/*
// THE FOR IN LOOP IS USED IN OBJECT TO RETREIVE THE KEYS IN OBJECT

// FOR IN
let student={
    name:"Rohan Rambhiya",
    age:20,
    rollNumber:"O066",
};
for(let i in student){
    console.log("key =",i,"value=",student[i])
}

*/

/*
let student={
    name:"Rohan Rambhiya",
    age:20,
    rollNumber:"O066",
};
console.log("The name of the student is",student.name,"and his age is",typeof student.age)

// This is "Template literal" made with back ticks and in this the student.age is printed as a string and not as number
console.log(`The name of the student is ${student.name} and his age is ${student.age}`)
*/


/*
str.toUpperCase()
str.toLowerCase()
str.trim()                //Removers white spaces only from start or end

newStr=str.toUpperCase() // As the strings are immutable you have to save them as new string like 
str=str.toUpperCase()    // or you can do this also

str.slice(start,end)    // gives the part of string from start to end-1
str1.concat(str2)       //Joins the str2 with str1 or can do like this "str1+str2"
str1.replace(searchVal,newVal)      //Replaces 1 character or a part of string inside a str1
str1.replaceAll(searchVal,newVa l)      //Replaces All the character or a part of string inside a str1
str1.charAt(index)       //To find the character from a string at index

*/

let userName=prompt("Enter your full name");
let userLength= username.length;
let userId="@"+username+userLength;
console.log(userId)