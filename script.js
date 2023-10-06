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
        return "Oops! You both have same choice, try again";
    }
    if(userChoice=="ROCK" && compResult=="PAPER"){
        return "You lost! Paper beats Rock";
    }
    else if(userChoice=="ROCK" && compResult=="SCISSORS"){
        return "You Won! Rock beats scissors";
    }
    else if(userChoice=="SCISSORS" && compResult=="ROCK"){
        return "You lost! Scissors beats Rock";
    }
    else if(userChoice=="SCISSORS" && compResult=="PAPER"){
        return "You Won! Scissors beats Paper";
    }
    else if(userChoice=="PAPER" && compResult=="SCISSORS"){ 
        return "You Lost! Scissors beats Paper";
    }
    else{
        return "You Won! Paper beats Rock";
    }
}


function game(){
    let result=0;
    // console.log("helloworld");
    for(let i=0; i<5; i++){
        let userChoice=prompt(`Write down your choice. Game No. - ${i+1}`);
        let upperCaseChoice=userChoice.toUpperCase();
        let thisGameResult=playGame(upperCaseChoice, getComputerChoice);
        alert(thisGameResult);
        if(thisGameResult=="Oops! You both have same choice, try again"){
            console.log(result);
            continue;
        }
        if(thisGameResult== "You lost! Paper beats Rock"|| "You lost! Scissors beats Rock" || "You Lost! Scissors beats Paper"){
            result--;
        }
        else result++;
        console.log(result);
    }
    if(result<0) console.log("You lost");
    else console.log("You Won");
}
game();