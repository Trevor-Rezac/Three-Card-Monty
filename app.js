// import functions and grab DOM elements
const card1 = document.querySelector('.back1');
const card2 = document.querySelector('.back2');
const card3 = document.querySelector('.back3');
// console.log(joker1);

const leftCardBtn = document.getElementById('card-1-btn');
const middleCardBtn = document.getElementById('card-2-btn');
const rightCardBtn = document.getElementById('card-3-btn');
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

const correctAce = [
    'AOS',
    'AOC',
    'AOD',
    'AOH',
];
// console.log(correctAce);

const wrongCardArr = [
    1,
    2, 
    3
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
    // enableBtns();
    enablePointer();
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
    const correctAceID = getRandomItem(correctAce);
    const wrongCardID = getRandomItem(wrongCardArr);
    if (userGuess === correctCard) {
        correctCard.src = `./assets/requiem${correctAceID}.jpeg`;
        wins++;
    } else {
        userGuess.src = `./assets/requiemJoker${wrongCardID}.jpeg`;
    }
    updateWinsLossAtt();
    // disableBtns();
    disablePointer();
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

function disablePointer() {
    leftCardBtn.classList.add('noPointer');
    middleCardBtn.classList.add('noPointer');
    rightCardBtn.classList.add('noPointer');
}

function enablePointer() {
    leftCardBtn.classList.remove('noPointer');
    middleCardBtn.classList.remove('noPointer');
    rightCardBtn.classList.remove('noPointer');
}

// function disableBtns() {
//     leftCardBtn.disabled = true;
//     middleCardBtn.disabled = true;
//     rightCardBtn.disabled = true;
// }

// function enableBtns() {
//     leftCardBtn.disabled = false;
//     middleCardBtn.disabled = false;
//     rightCardBtn.disabled = false;
// }

