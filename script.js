let Choices=["ROCK", "PAPER", "SCISSORS"];
function getComputerChoice(){
    let num=Math.floor(Math.random()*3);
    return Choices[num];
}
// getComputerChoice();
// console.log("hello")


function playGame(userChoice, getComputerChoice){
    console.log(userChoice);   
    // console.log("working");
    let compResult=getComputerChoice();
    console.log(compResult);
    if(userChoice==compResult){
        return 1;
    }
    if(userChoice=="ROCK" && compResult=="PAPER"){
        return 2;
    }
    else if(userChoice=="ROCK" && compResult=="SCISSORS"){
        return 3;
    }
    else if(userChoice=="SCISSORS" && compResult=="ROCK"){
        return 4;
    }
    else if(userChoice=="SCISSORS" && compResult=="PAPER"){
        return 5;
    }
    else if(userChoice=="PAPER" && compResult=="SCISSORS"){ 
        return 6;
    }
    else{
        return 7;
    }
}

// game();
let userAns="System";
let playerScores=0;
let computerScores=0;
const ps=document.querySelector('#playerScore');
const cs=document.querySelector('#computerScore')
const btn=document.querySelectorAll('button');
btn.forEach((eachButton)=>{
    eachButton.addEventListener('click',()=>{
        // console.log(eachButton.innerText);
        userAns=eachButton.innerText;
        let k=playGame(userAns, getComputerChoice);
        if(k%2==0)
        {
            computerScores++;
            cs.innerText=computerScores;
            if(computerScores==5) alert("You Lost!");
        }
        else if(k!=1)
        {
            playerScores++;
            ps.innerText=playerScores;
            if(playerScores==5) alert("You Won!");
        } 
        else {
            alert("You both Choose same!");
        }
        // console.log(userAns);
        // userAns=userAns.toUpperCase();
    })
})
console.log(userAns);

