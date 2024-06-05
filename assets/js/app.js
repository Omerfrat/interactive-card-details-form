let cardNameInput = document.querySelector('.card-name1');
let cardNumberInput = document.querySelector('.card-number1');
let cardAaInput = document.querySelector('#aa');
let cardYyInput = document.querySelector('#yy');
let cardCvcInput = document.querySelector('.card-cvc');
let gonder = document.querySelector('#submit');

let ccName = document.querySelector('#card-name');
let ccNumber = document.querySelector('#cc-number');
let ccAa = document.querySelector('#card-aa');
let ccYy = document.querySelector('#card-yy');
let cvc = document.querySelector('#cvc');



// gonder.addEventListener("click", (e)=>  {
//   my
//   e.preventDefault();
//   ccName.innerText = cardNameInput.value;
//   ccNumber.innerText = cardNumberInput.value;
//   ccAa.innerText = cardAaInput.value;
//   ccYy.innerText = cardYyInput.value;
//   cvc.innerText = cardCvcInput.value;
// })


function myFunction() {
  ccName.innerText = cardNameInput.value;
  ccNumber.innerText = cardNumberInput.value;
  ccAa.innerText = cardAaInput.value;
  ccYy.innerText = cardYyInput.value;
  cvc.innerText = cardCvcInput.value;
}

gonder.addEventListener("click", myFunction)