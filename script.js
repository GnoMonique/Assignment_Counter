console.log("Hello World")

let counter=0;

const counterValue=document.getElementById("counter_value");
const plus=document.getElementById("counterPlus")
const minus=document.getElementById("counterMinus")
const resetBtn=document.getElementById("reset");

//To increment the number
plus.addEventListener("click",()=>{ 
    if (counter<10){
    counter++;
    if (counter===10) {alert(`You have reached the limit of 10!`)}
    counterValue.innerHTML = counter;
}});

//To decrease the number
minus.addEventListener("click", () =>{
    if (counter > 0) {
    counter--;
    counterValue.innerHTML = counter;
}})

/*to reset to zero
function tozero() {
    counter= O;
    counterValue.innerHTML = counter;
}  
resetBtn.addEventListener("click",tozero); 
*/

resetBtn.addEventListener("click", () =>{
    counter=0;
    counterValue.innerHTML = counter;
})

