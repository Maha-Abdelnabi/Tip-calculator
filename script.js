const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalIEl = document.getElementById("total");


function calculatTotal(){
  const billValue = billInput.value;
  console.log(billValue);

  const tipValue = tipInput.value;
  console.log(tipValue);
  //calculate tip multiply the total check by 1 plus the decimal percentage
  const totalTip =Math.floor(billValue * (1 + tipValue / 100));
  totalIEl.innerText = `${totalTip}`
}

btnEl.addEventListener("click", calculatTotal)