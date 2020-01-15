let computerPlay = () => {
  let options = ["rock", "paper", "scissors"];
  let rand = options[Math.floor(Math.random() * options.length)];
  return rand;
};

// rock beats scissors, scissors beats paper, paper beats rock
let playRound = (playerSelection, compSelection) => {
  let player = playerSelection.toLowerCase();
  let comp = compSelection.toLowerCase();
  if (player === comp) {
    alert(`Computer also choose ${compSelection}! 
      Tie!`);
  } else if (player === "rock" && comp === "scissors") {
    alert(`Computer chose ${compSelection}! 
        You win! Rock beats scissors.`);
    return "win";
  } else if (player === "paper" && comp === "rock") {
    alert(`Computer chose ${compSelection}!
        You win! Paper beats rock.`);
    return "win";
  } else if (player === "scissors" && comp === "paper") {
    alert(`Computer chose ${compSelection}!
        You win! Scissors beats paper.`);
    return "win";
  } else if (player === "scissors" && comp === "rock") {
    alert(`Computer chose ${compSelection}!
      You lose! Rock beats scissors.`);
    return "lose";
  } else if (player === "paper" && comp === "scissors") {
    alert(`Computer chose ${compSelection}!
      You lose! Scissors beats paper.`);
    return "lose";
  } else if (player === "rock" && comp === "paper") {
    alert(`Computer chose ${compSelection}!
      You lose! Paper beats rock.`);
    return "lose";
  }
};

let game = () => {
  alert(`Welcome to Rock, Paper, Scissors!
    Best out of 5 wins!`);
  let win = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, Scissors?");
    let compSelection = computerPlay();
    let result = playRound(playerSelection, compSelection);
    if (result === "win") {
      win++;
    }
  }
  if (win >= 3) {
    alert(`You won ${win} out of 5 rounds! You win!`);
    return `You win!`;
  } else {
    alert(`You won ${win} out of 5 rounds! You lose!`);
    return `You lose!`;
  }
};

game();
