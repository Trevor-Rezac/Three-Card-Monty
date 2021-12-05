// import functions and grab DOM elements
const card1 = document.querySelector('.back1');
const card2 = document.querySelector('.back2');
const card3 = document.querySelector('.back3');
const joker1 = document.getElementById('joker-1');
const joker2 = document.getElementById('joker-2');
// console.log(joker1);

const leftCardBtn = document.getElementById('left-card-btn');
const middleCardBtn = document.getElementById('middle-card-btn');
const rightCardBtn = document.getElementById('right-card-btn');
const shuffleBtn = document.querySelector('#shuffle-btn');
const resetStatsBtn = document.querySelector('#reset-stats-btn');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const attemptsEl = document.getElementById('attempts');

let wins = 0;
let attempts = 0;

const cardArr = [
    card1,
    card2,
    card3
];

const wrongCardArr = [
    joker1,
    joker2
];

// console.log(wrongCardArr[0]);
// console.log(getRandomItem(wrongCardArr));

leftCardBtn.addEventListener('click', () => {
    const correctCard = getRandomItem(cardArr);
    handleGuess(card1, correctCard);
});

middleCardBtn.addEventListener('click', () => {
    const correctCard = getRandomItem(cardArr);
    handleGuess(card2, correctCard);
});

rightCardBtn.addEventListener('click', () => {
    const correctCard = getRandomItem(cardArr);
    handleGuess(card3, correctCard);
});

shuffleBtn.addEventListener('click', () => {
    resetCards();
    enableBtns();
});

resetStatsBtn.addEventListener('click', () => {
    resetStats();
});

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function handleGuess(userGuess, correctCard) {
    resetCards();
    attempts++;
    if (userGuess === correctCard) {
        correctCard.src = './assets/requiemAOS.jpeg';
        wins++;
    } else {
        userGuess.src = './assets/requiemJoker1.jpeg';
    }
    updateWinsLossAtt();
    disableBtns();
}

function resetCards() {
    card1.src = './assets/requiemBack.jpeg';
    card2.src = './assets/requiemBack.jpeg';
    card3.src = './assets/requiemBack.jpeg';
}

function updateWinsLossAtt() {
    winsEl.textContent = wins;
    attemptsEl.textContent = attempts;
    lossesEl.textContent = attempts - wins;
}

function resetStats() {
    wins = 0;
    attempts = 0;
    updateWinsLossAtt();
}

function disableBtns() {
    leftCardBtn.disabled = true;
    middleCardBtn.disabled = true;
    rightCardBtn.disabled = true;
}

function enableBtns() {
    leftCardBtn.disabled = false;
    middleCardBtn.disabled = false;
    rightCardBtn.disabled = false;
}