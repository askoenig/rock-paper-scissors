const roundMessage = document.querySelector("#roundsLeft");
const gameMessage = document.querySelector("#prompts");

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
    gameMessage.textContent = `Computer also choose ${compSelection}! 
      Tie!`;
  } else if (player === "rock" && comp === "scissors") {
    gameMessage.textContent = `Computer chose ${compSelection}! 
        You win! Rock beats scissors.`;
    return "win";
  } else if (player === "paper" && comp === "rock") {
    gameMessage.textContent = `Computer chose ${compSelection}!
        You win! Paper beats rock.`;
    return "win";
  } else if (player === "scissors" && comp === "paper") {
    gameMessage.textContent = `Computer chose ${compSelection}!
        You win! Scissors beats paper.`;
    return "win";
  } else if (player === "scissors" && comp === "rock") {
    gameMessage.textContent = `Computer chose ${compSelection}!
      You lose! Rock beats scissors.`;
    return "lose";
  } else if (player === "paper" && comp === "scissors") {
    gameMessage.textContent = `Computer chose ${compSelection}!
      You lose! Scissors beats paper.`;
    return "lose";
  } else if (player === "rock" && comp === "paper") {
    gameMessage.textContent = `Computer chose ${compSelection}!
      You lose! Paper beats rock.`;
    return "lose";
  }
};

const grabPlayerSelection = document.querySelectorAll(".button");
for (let i = 0; i < grabPlayerSelection.length; i++) {
  grabPlayerSelection[i].addEventListener("click", () => {
    let buttonPushed = grabPlayerSelection[i].innerHTML;
    game(buttonPushed);
  });
}

let win = 0;
let rounds = 0;

let game = buttonPushed => {
  //   alert(`Welcome to Rock, Paper, Scissors!
  //     Best out of 5 wins!`);

  rounds++;
  let playerSelection = buttonPushed;
  let compSelection = computerPlay();
  let result = playRound(playerSelection, compSelection);
  if (result === "win") {
    win++;
  }
  if (rounds === 5 && win >= 3) {
    roundMessage.textContent = `You won ${win} out of 5 rounds! You win!`;
    console.log(rounds.textContent);
  } else if (rounds === 5 && win < 3) {
    roundMessage.textContent = `You won ${win} out of 5 rounds! You lose!`;
    console.log(rounds);
  } else {
    roundMessage.textContent = `${5 - rounds} round(s) left! Go again!`;
    console.log(rounds);
  }
};

// game();
