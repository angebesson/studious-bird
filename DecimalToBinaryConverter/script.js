const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// const decimalToBinary = (input) => {
//   const inputs = [];
//   const quotients = [];
//   const remainders = [];
//   while (input > 0) {
//     const quotient = Math.floor(input / 2);
//     const remainder = input % 2;

//     inputs.push(input);
//     quotients.push(quotient);
//     remainders.push(remainder);
//     input = quotient;
//   }

//   console.log("Inputs: ", inputs);
//   console.log("Quotients: ", quotients);
//   console.log("Remainders: ", remainders);

//   result.innerText = remainders.reverse().join("");
// };
//how the call stack and recursion work:
// const countDownAndUp = (number) => {
//   console.log(number);

//   if (number === 0) {
//     console.log("Reached base case");
//     return;
//   } else {
//     countDownAndUp(number - 1);
//     console.log(number);
//   }
// };

// countDownAndUp(3);

// const decimalToBinary = (input) => {
//   let binary = "";

//   if (input === 0) {
//     binary = "0";
//   }

//   while (input > 0) {
//     binary = (input % 2) + binary;
//     input = Math.floor(input / 2);
//   }

//   result.innerText = binary;
// };
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000
  },
  {
    inputVal: 2,
    addElDelay: 1500
  },
  {
    inputVal: 1,
    addElDelay: 2000
  },
];
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {

};
const checkUserInput = () => {
    if (
      !numberInput.value ||
      isNaN(parseInt(numberInput.value)) ||
      parseInt(numberInput.value) < 0
    ) {
      alert("Please provide a decimal number greater than or equal to 0");
      return;
    }
  
    console.log(numberInput.value);
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
  };
  
  convertBtn.addEventListener("click", checkUserInput);
  
  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  });
  
  convertBtn.addEventListener("click", checkUserInput);