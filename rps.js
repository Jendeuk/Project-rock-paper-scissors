
//(Rock paper scissor)
//Human vs computer
//humanpoint
//computerpoint

    const computerPlay = () => { //computer pick random [rock, paper, scissor]; 
        let chose = ['rock', 'paper', 'scissor'];
        return chose [Math.floor(Math.random() * chose.length)];
    }

    const playRound = (playerSelection, computerSelection ) =>{ //playround
        playerSelection = playerSelection.toLowerCase()
        if(playerSelection === 'rock'){
            if(computerSelection === 'rock'){
                return "tie!";
            }
            else if(computerSelection === 'paper'){
                return "You lose!"; 
            }
            else{
                return "You win!";  
            }
        
        }
    else if(playerSelection === 'paper'){
            if(computerSelection === 'paper'){
                return "tie!";
            }
            else if(computerSelection === 'rock'){
                return "You lose!"; 
            }
            else{
                return "You win!";  
            }
        
        }
        else if(playerSelection === 'scissor'){
            if(computerSelection === 'scissor'){
                return "tie!";
            }
            else if(computerSelection === 'rock'){
                return "You lose!"; 
            }
            else{
                return "You win!";  
            }
        
        }
    }
    const playerSelection = "rock";
    const computerSelection = computerPlay();
    console.log(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    const game = () =>{
        for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("Pick"); 
            const computerSelection = computerPlay();
            console.log(playerSelection, computerSelection);
            console.log(playRound(playerSelection, computerSelection));
          }
    }
    game();