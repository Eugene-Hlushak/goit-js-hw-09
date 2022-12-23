function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення,
// використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

const startBtn = document.querySelector('button[data-start');
const stopBtn = document.querySelector('button[data-stop');
const background = document.querySelector('body');
let timeIntervalId = 0;

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn(e) {
  startBtn.disabled = true;
  timeIntervalId = setInterval(() => {
    let backgroundColor = getRandomHexColor();
    background.style.backgroundColor = backgroundColor;
  }, 1000);
}

function onClickStopBtn(e) {
  startBtn.disabled = false;
  clearInterval(timeIntervalId);
}
