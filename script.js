console.log("Hello World")

let counter=0;

const counterValue=document.getElementById("counter_value");
const plus=document.getElementById("counterPlus")
const minus=document.getElementById("counterMinus")
const resetBtn=document.getElementById("reset");

// To increase the number
plus.addEventListener("click", ClickPlus)

function ClickPlus(){
    counter++;
    counterValue.innerHTML = counter;
    UpdateButtonStates()
}

//To decrease the number
minus.addEventListener("click", ClickMinus)

function ClickMinus(){
    counter--;
    counterValue.innerHTML = counter;
    UpdateButtonStates()
}

// Change buttons and span messages
function UpdateButtonStates(){
    // update minus button
    if (counter === 0) {
        minus.disabled = true
        minus.style.backgroundColor="grey"
    } 
    if (counter > 0 && minus.disabled) {
        minus.disabled = false;
        minus.style.backgroundColor="#ab9dd5"
    }

    // update plus button
    if (counter <20){
        plus.style.backgroundColor= "#ab9dd5";
     }
     else if (counter>=20){
        plus.style.backgroundColor="red";
     }
 
    // update span message
    if (counter <10) {
        document.getElementById('messageContainer').textContent = ""
    }
    else if (counter < 20) {
        document.getElementById('messageContainer').textContent ="You have free shipping!"
    }  
    else if (counter>=20){
        document.getElementById('messageContainer').textContent ="Out of Stock"
    }
}

// to reset to zero
resetBtn.addEventListener("click", Resetar)

function Resetar (){
    counter=0;
    counterValue.innerHTML = counter;
    UpdateButtonStates()
}


