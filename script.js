"use strict";

const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipAmountNumber = document.querySelector(".tip-amount-number");
const tipTotalNumber = document.querySelector(".tip-total-number");
const resetBtn = document.querySelector(".reset-btn");
const customInput = document.querySelector(".custom-input");
const tipsBtns = document.querySelector(".tips-btns");
//######################################################################

const error = function (e) {
  e.target.classList.add("error");
  e.target.previousElementSibling.classList.add("error-text");
  setTimeout(() => {
    e.target.classList.remove("error");
    e.target.previousElementSibling.classList.remove("error-text");
  }, 5000);
  return true;
};

const tipCalculator = function(){
    if(bill === 0 || numberOfPeople === 0) return;
    let tipAmount = 0;
    let temporary = 0;
    let total = 0;
    temporary = bill / numberOfPeople;
    tipAmount = (temporary * rate) / 100;
    tipAmountNumber.textContent = `$${tipAmount.toFixed(2)}`;
    total = temporary + tipAmount;
    tipTotalNumber.textContent = `$${total.toFixed(2)}`;
    resetBtn.classList.add("active");
}


//########################## Main ######################################
let rate = 0;
let bill = 0;
let numberOfPeople = 0;

tipsBtns.addEventListener("click", function (e) {
  if (e.target.classList.contains("btns")) {
    rate = parseInt(e.target.textContent);
    tipCalculator();
    }
});

customInput.addEventListener("input", function (e) {
  if (e.target.value !== '' || e.target.value !== null) {
      rate = Number(e.target.value);
      tipCalculator();
    }
});

billInput.addEventListener("input", function (e) {
  if (Number(e.target.value) === 0) error(e);
  bill = Number(e.target.value);
});

peopleInput.addEventListener("input", function (e) {
  if (Number(e.target.value) === 0) error(e);
  numberOfPeople = Number(e.target.value);
  
});

resetBtn.addEventListener("click",function(){
    tipAmountNumber.textContent = tipTotalNumber.textContent = "$0.00";
    bill = numberOfPeople = 0;
    billInput.value = peopleInput.value = customInput.value = ''; 
    resetBtn.classList.remove("active");
});