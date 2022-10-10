let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (user, computer, target) => {
  user = Math.abs(user - target);
  computer = Math.abs(computer - target);
  if (user === computer) return true;
  return user < computer ? true : false;
};

const updateScore = (str) => {
  if (str === "human") {
    return humanScore++;
  }
  if (str === "computer") {
    return computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;

console.log(compareGuesses(4, 3, 2));
