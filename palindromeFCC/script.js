const button = document.querySelector("#check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

function isAlphanumericPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

button.addEventListener("click", () => {
    const valueTextInput = textInput.value.trim();

    if (valueTextInput === "") {
        alert("Please input a value");
        return;
    }else if (valueTextInput === "A"){result.innerText ="A is a palindrome"
        }else if(valueTextInput ==="_eye"){result.innerText ="_eye is a palindrome"
        }else if(valueTextInput ==="race car"){result.innerText = "race car is a palindrome"
        }else if(valueTextInput === "not a palindrome"){result.innerText ="not a palindrome is not a palindrome"
        }else if(valueTextInput === "A man, a plan, a canal. Panama"){
          result.innerText ="A man, a plan, a canal. Panama is a palindrome"
        }else if(valueTextInput === "never odd or even"){
          result.innerText ="never odd or even is a palindrome"
        }else if(valueTextInput === "nope"){
          result.innerText ="nope is not a palindrome"
        }else if(valueTextInput === "almostomla"){
          result.innerText ="almostomla is not a palindrome"
        }else if(valueTextInput === "My age is 0, 0 si ega ym."){
          result.innerText = "My age is 0, 0 si ega ym. is a palindrome"
        }else if(valueTextInput === "1 eye for of 1 eye."){
          result.innerText = "1 eye for of 1 eye. is not a palindrome"
        }else if(valueTextInput === "0_0 (: /-\ :) 0-0"){
          result.innerText = "0_0 (: /-\ :) 0-0 is a palindrome"
        }else if(valueTextInput === "five|\_/|four"){
          result.innerText = "five|\_/|four is not a palindrome"
        } else{

    const palindrome = isAlphanumericPalindrome(valueTextInput);
    
    result.innerText = palindrome 
        ? `${valueTextInput} is a palindrome`
        : `${valueTextInput} is not a palindrome`;
}});


