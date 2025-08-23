const buttons = document.querySelectorAll('.buttons button');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.getElementById('computer-result');;
const result = document.querySelector("#result");
const winsEl = document.getElementById("wins");
const lossesEl = document.getElementById("losses");
const drawsEl = document.getElementById("draws");
const resetGameEl = document.getElementById("resetGame");
const loader = document.getElementById('loader');


const options = ['rock', 'paper', 'scissors'];

const icons = {
    scissors: `<i class="fa-solid fa-hand-scissors"></i>`,
    paper: `<i class="fa-solid fa-hand"></i>`,
    rock: `<i class="fa-solid fa-hand-back-fist"></i>`
};

const rules = {
    rock: "scissors",     // אבן מנצח מספריים
    paper: "rock",        // נייר מנצח אבן
    scissors: "paper"     // מספריים מנצח נייר
};

let winsCount = 0;
let lossesCount = 0;
let drawsCount = 0;

function updateScore() {
    winsEl.textContent = winsCount;
    lossesEl.textContent = lossesCount;
    drawsEl.textContent = drawsCount;

}


function startGame() {
    updateScore();

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const choice = btn.dataset.choice;
            const player = choice;
            playerChoice.innerHTML = icons[player]

            printComputerChoice(player);
        });
    });
}

function printComputerChoice(player) {

    loader.classList.remove('hidden');
    computerChoice.innerHTML = '';

    setTimeout(() => {
        const computerRandomChoice = options[Math.floor(Math.random() * 3)];
        computerChoice.innerHTML = icons[computerRandomChoice];

        loader.classList.add('hidden');

        getWinner(player, computerRandomChoice);
    }, 1000)
}


function getWinner(player, computer) {
    if (player === computer) {
        result.textContent = "It's a tie! 🤝";
        drawsCount++;
    } else if (rules[player] === computer) {
        result.textContent = "You win! 🎉";
        winsCount++;
    } else {
        result.textContent = "Computer wins! 💻";
        lossesCount++;
    }
    updateScore();
}

function resetGame() {
    winsCount = 0;
    lossesCount = 0;
    drawsCount = 0;
    updateScore();
    playerChoice.innerHTML = "";
    computerChoice.innerHTML = "";
}

startGame();






