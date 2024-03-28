let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnO=false;
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//To add event listener on each box
let count=0; 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //check for tie
        //Adding X and O
        if(turnO){
          box.innerText="O";  
          turnO=false;
          box.classList.add("black")
        }else{
            box.innerText="X";
            turnO=true;
            box.classList.add("white")
        }
        box.disabled=true;
        count++;
        // Checking the Winner
        checkWinner();
        if(count===9){
            tieGame();
        }
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("black");
        box.classList.remove("white");
    }
    msgContainer.classList.add("hide");

}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns) {
        
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }

    }
}


const newGame=()=>{
    enableBoxes();
    count=0;
}

const tieGame=()=>{
    msg.innerText=`It was a TIE game`;
    msgContainer.classList.remove("hide");
    
}

newGameBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click",newGame);