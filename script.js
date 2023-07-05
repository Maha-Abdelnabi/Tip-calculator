const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const personInput = document.getElementById("person");
const totalIEl = document.getElementById("total");
const shartEl = document.getElementById("share");


function calculatTotal(){
  const billValue = billInput.value;


  const tipValue = tipInput.value;

  //calculate tip multiply the total check by 1 plus the decimal percentage
  const totalTip =Math.floor(billValue * (1 + tipValue / 100));


//divide the bill 
const personValue = personInput.value;

const sharedBill = totalTip/personValue;


if(personValue > 1){
    shartEl.innerHTML=`Each Person should pay: ${sharedBill}`;
}
else{
   shartEl.innerHTML=`You should pay the total amount of: ${totalTip}` 
}
}

btnEl.addEventListener("click", calculatTotal)