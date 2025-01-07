const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");

// if(checkBtn){
//     checkBtn.addEventListener("click", () => {
//        let userValue  = document.getElementById("user-input").value;
//         if(userValue.trim() === ""){
//             alert("Please provide a phone number");
//         }else if(userValue.trim() === "1 555-555-5555"){
//             results.innerText += "Valid US number: 1 555-555-5555";           
//         }else if(isValid()){
//             results.innerText += "Valid US number";           
//         }else{
//             alert("anda");         
//         }     
//     })
// }

if(clearBtn){
    clearBtn.addEventListener("click",()=>{
       results.innerHTML = "";
       
    })
}


    if(checkBtn) {
        checkBtn.addEventListener("click", () => {
            let userValue = document.getElementById("user-input").value;
            let cleanNumber = userValue.replace(/[\s\-()]/g, '');
            if(userValue.trim() === ""){
                    alert("Please provide a phone number");
            // Check if input contains only numbers
          if(!/^\d+$/.test(cleanNumber)) {
                alert("Please provide a valid phone number");
                return;
            }
            
            switch(cleanNumber.length) {
                case 0:
                    alert("Please enter a phone number");
                    break;
                case 10:
                    alert("Valid US number:");
                    break;
                case 11:
                    if(cleanNumber.startsWith('1')) {
                        alert("Valid 11-digit phone number");
                    } else {
                        alert("Invalid phone number format");
                    }
                    break;
                default:
                    alert("Phone number must be 10 or 11 digits");
            }
        });
    }
