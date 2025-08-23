import { elements } from "./domElements.js";


const options = ['rock', 'paper', 'scissors'];

const icons = {
    scissors: `<i class="fa-solid fa-hand-scissors"></i>`,
    paper: `<i class="fa-solid fa-hand"></i>`,
    rock: `<i class="fa-solid fa-hand-back-fist"></i>`
};

const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

let winsCount = 0, lossesCount = 0, drawsCount = 0;

function updateScore() {
    elements.wins.textContent = winsCount;
    elements.losses.textContent = lossesCount;
    elements.draws.textContent = drawsCount;
}

function startGame() {
    updateScore();

    elements.buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const player = btn.dataset.choice;
            elements.playerChoice.innerHTML = icons[player];

            printComputerChoice(player);
        });
    });
}

function getRandomChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function printComputerChoice(player) {
    elements.loader.classList.remove('hidden');
    elements.computerChoice.innerHTML = '';

    setTimeout(() => {
        const computerRandomChoice = getRandomChoice();
        elements.computerChoice.innerHTML = icons[computerRandomChoice];

        elements.loader.classList.add('hidden');
        getWinner(player, computerRandomChoice);
    }, 1000);
}

function getWinner(player, computer) {
    if (player === computer) {
        elements.result.textContent = "It's a tie! 🤝";
        drawsCount++;
    } else if (rules[player] === computer) {
        elements.result.textContent = "You win! 🎉";
        winsCount++;
    } else {
        elements.result.textContent = "Computer wins! 💻";
        lossesCount++;
    }
    updateScore();
}

function resetGame() {
    winsCount = lossesCount = drawsCount = 0;
    updateScore();
    elements.playerChoice.innerHTML = "";
    elements.computerChoice.innerHTML = "";
}

startGame();



