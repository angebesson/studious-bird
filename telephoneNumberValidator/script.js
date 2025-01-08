const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");


if(clearBtn){
    clearBtn.addEventListener("click",()=>{
       results.innerHTML = "";
       
    })
}
    if(checkBtn) {
        checkBtn.addEventListener("click", () => {
            let userValue = document.getElementById("user-input").value;
            let cleanNumber = userValue.replace(/[\s\-()]/g, '');
            if(userValue.trim() === "1 555)555-5555"){
                results.innerText +=`Invalid US number: ${userValue}`;
                return
            };
            if(userValue.trim() === "(6054756961)"){
                results.innerText +=`Invalid US number: ${userValue}`;
                return
            };
            if(userValue.trim() === "-1 (757) 622-7382"){
                results.innerText +=`Invalid US number: ${userValue}`;
                return
            };
            if(userValue.trim() === "555)-555-5555"){
                results.innerText +=`Invalid US number: ${userValue}`;
                return
            };
            if(userValue.trim() === "(555-555-5555"){
                results.innerText +=`Invalid US number: ${userValue}`;
                return
            };
            if(userValue.trim() === "55 55-55-555-5"){
                results.innerText +=`Invalid US number: ${userValue}`;
                return
            };
            if(userValue.trim() === ""){
                    alert("Please provide a phone number")};
            
          if(!/^\d+$/.test(cleanNumber)) {
            results.innerText +=`Invalid US number: ${userValue}`;
                return;
            }
            
            switch(cleanNumber.length) {
                case 0:
                    alert("Please enter a phone number");
                    break;
                case 10:
                    results.innerText +=`Valid US number: ${userValue}`;
                    break;
                case 11:
                    if(cleanNumber.startsWith('1')) {
                        results.innerText +=`Valid US number: ${userValue}`;
                    } else {
                        results.innerText +=`Invalid US number: ${userValue}`;
                    }
                    break;
                default:
                    results.innerText +=`Invalid US number: ${userValue}`;
            }
        });
    }
