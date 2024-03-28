let arr=[1,2,3];

//FOR EACH
// It does not make a new array
arr.forEach((val)=>{
    console.log(val*val);
})

//MAP METHOD
//creates a new array with the result of some operation
arr.map(val=>{
    console.log(val);
})

//FILTER METHOD
let evenArr=arr.filter(val=>{
    return val%2===0;
})
console.log(evenArr);


//REDUCE METHOD
//PERFORMS SOME OPERATIONS & REDUCES ARRAY TO A SINGLE VALUE AND RETURNS IT 

const sumWithInitial=arr.reduce((res,val)=>{
    return res+val; 
})
console.log(sumWithInitial);
let res=-99999;
const largestNumber=arr.reduce((res,val)=>{
    if(res<val){
        res=val
    }
    return res;
})
console.log(largestNumber)



let marks=[97,64,84,92,22,50,99]

let scholarStudents=marks.filter(val=>{
   
        return val>90;
    
})
console.log(scholarStudents)