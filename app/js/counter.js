let numContainer = document.getElementById('num');
let value = 0;

let btnInc = document.querySelector('.inc');
let btnDec = document.querySelector('.dec');
let btmReset = document.querySelector('.reset');

btnInc.addEventListener('click', () => {
  value++;
  numContainer.textContent = value;
});

btnDec.addEventListener('click', () => {
  if (value > 0) {
    value--;
    numContainer.textContent = value;
  }
});

// Чтобы число при уменьшении ушло в минус
// btnDec.addEventListener('click', () => {
//  value--;
//  numContainer.textContent = value;
// });

btmReset.addEventListener('click', () => {
  value = 0;
  numContainer.textContent = value;
})