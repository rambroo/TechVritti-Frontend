let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");

const playGame=(userChoice)=>{
    let options=["rock","paper","scissors"]
    // console.log(userChoice);
    let compChoice=getRandomElement(options);
    // console.log(compChoice);
    calculateScore(userChoice,compChoice);
}

function getRandomElement(options) {
    return options[Math.floor(Math.random() * options.length)];
}
const calculateScore=(userChoice,compChoice)=>{
    if (userChoice === compChoice) {
        //Do Nothing
        msg.style.backgroundColor = "#081b31";
        msg.innerText="It was a Tie";
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
        ) 
        {    // User Wins
            userScore++;
            user_score.innerText=userScore;
            msg.style.backgroundColor = "green";
            msg.innerText="You Win";
        } 
        else {
            //Computer Wins
            compScore++;
            comp_score.innerText=compScore;
            msg.style.backgroundColor = "red";
            msg.innerText="Computer Win";

        }
}
choices.forEach( (choice) => {
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});


