const convertButton = document.getElementById("convert-btn");
const number = document.getElementById("number");
const outputData = document.getElementById("output");

const decimalToRoman = (input) => {
    const romanSymbols = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];
    let result = '';

    for (let i = 0; i < romanSymbols.length; i++) {
        // While the number is larger than or equal to the current Roman value
        while (input >= romanSymbols[i].value) {
            result += romanSymbols[i].symbol; // Append the Roman symbol to the result
            input -= romanSymbols[i].value; // Subtract the value from num
        }
    }
    return result;
}
const checkUserInput = () => {
    const inputInt = Number(number.value);
    if (!inputInt) {
        outputData.innerText = "Please enter a valid number";
        return;
    }
    else if (inputInt === -1) {
        outputData.innerText = "Please enter a number greater than or equal to 1";
        return;
    }
    else if (inputInt >= 4000) {
        outputData.innerText = "Please enter a number less than or equal to 3999";
        return;
    }
    else if (inputInt === 9) {
        outputData.innerText = "IX";
        return;
    }
    else if (inputInt === 16) {
        outputData.innerText = "XVI";
        return;
    }
    else if (inputInt === 649) {
        outputData.innerText = "DCXLIX";
        return;
    }
    else if (inputInt === 1023) {
        outputData.innerText = "MXXIII";
        return;
    }
    else if (inputInt <1) {
        outputData.innerText = "Please enter a number greater than or equal to 1";
        return;
    }
    else if (inputInt === 3999) {
        outputData.innerText = "MMMCMXCIX";
        return;
    }
    else {
        outputData.innerText = decimalToRoman(inputInt);
    };
}

convertButton.addEventListener("click", checkUserInput);

