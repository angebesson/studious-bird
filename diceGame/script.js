const listOfAllDice = document.querySelectorAll('.die');
const scoreInputs = document.querySelectorAll('#score-options input');
const scoreSpans = document.querySelectorAll('#score-options span');
const roundElement = document.getElementById('current-round');
const rollsElement = document.getElementById('current-round-rolls');
const totalScoreElement = document.getElementById('total-score');
const scoreHistory = document.getElementById('score-history');
const rollDiceBtn = document.getElementById('roll-dice-btn');
const keepScoreBtn = document.getElementById('keep-score-btn');
const rulesBtn = document.getElementById('rules-btn');
const rulesContainer = document.querySelector('.rules-container');
let isModalShowing = false;
let diceValuesArr = [];
let rolls = 0;
let score = 0;
let round = 1;

const updateStats = () => {
  rollsElement.textContent = rolls;
  roundElement.textContent = round;
};
const updateRadioOption = (index, score) => {
  scoreInputs[index].disabled = false;
  scoreInputs[index].value = score;
  scoreSpans[index].textContent = `, score = ${score}`;
};
const getHighestDuplicates = (arr) => {
  const counts = {};
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
  for (let num in counts) {
    if (counts[num] >= 4) {
      const score = arr.reduce((sum, die) => sum + die, 0);
      updateRadioOption(1, score);
      updateRadioOption(0, score);
    } else if (counts[num] >= 3) {
      const score = arr.reduce((sum, die) => sum + die, 0);
      updateRadioOption(0, score);
    }
  }
  updateRadioOption(5, 0);
  return counts;
};
const resetRadioOptions = ()=>{
  scoreInputs.forEach(input => {
    input.disabled = true;           
    input.checked = false;           
  });
  scoreSpans.forEach(span => {
    span.textContent = "";           
  });
};
resetRadioOptions();

rollDiceBtn.addEventListener("click", () => {
  if (rolls >= 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    rollDice();
    updateStats();
     
  }
  diceValuesArr = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 6) + 1
  );
  listOfAllDice.forEach((die, index) => {
    die.textContent = diceValuesArr[index];
  });


});

rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;
  if (isModalShowing) {
    rulesContainer.style.display = "block";
    rulesBtn.textContent = "Hide rules";
  } else {
    rulesContainer.style.display = "none";
    rulesBtn.textContent = "Show rules";
  }
});