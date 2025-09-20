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
  const updateScore = (selectedValue, selectedId) => {
  score += parseInt(selectedValue);
  totalScoreElement.textContent = score;
  const newListItem = document.createElement('li');
  newListItem.textContent = `${selectedId} : ${selectedValue}`;
  scoreHistory.appendChild(newListItem);
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
const detectFullHouse = (diceValuesArr)=> {
  const counts = {};
   diceValuesArr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
    const values = Object.values(counts);
    const hasThree = values.includes(3);
    const hasTwo = values.includes(2);

  
  if(hasThree && hasTwo){
    updateRadioOption(2, 25);
  }
   updateRadioOption(5, 0);
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
    getHighestDuplicates(diceValuesArr);
    detectFullHouse(diceValuesArr);
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
keepScoreBtn.addEventListener("click", () => {
  let selectedValue;
  let achieved;

  for (const radioButton of scoreInputs) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
      achieved = radioButton.id;
      break;
    }
  }

  if (selectedValue) {
    rolls = 0;
    round++;
    updateStats();
    resetRadioOptions();
    updateScore(selectedValue, achieved);
    if (round > 6) {
      setTimeout(() => {
        alert(`Game Over! Your total score is ${score}`);
        resetGame();
      }, 500);
    }
  } else {
    alert("Please select an option or roll the dice");
  }
});
