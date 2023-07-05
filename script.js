const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");


function calculatTotal(){
   const billValue = billInput.value;
   console.log (billValue)

   const tipValue = tipInput.value;
   console.log(tipValue);
   
}

btnEl.addEventListener("click", calculatTotal)