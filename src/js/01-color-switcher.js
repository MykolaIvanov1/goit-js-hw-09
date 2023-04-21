const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');

const INTERVAL_DELAY = 1000;
let intervalId = null;
let btnIsActive = (startBtnEl.disabled = false);
let btnIsDisable = (stopBtnEl.disabled = true);

startBtnEl.addEventListener('click', onStartClickChangeColor);
stopBtnEl.addEventListener('click', onStopClickChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function onStartClickChangeColor() {
  if (btnIsActive) {
    return;
  }

  intervalId = setInterval(callBackSetInterval, INTERVAL_DELAY);
  btnIsActive = startBtnEl.disabled = true;
  btnIsDisable = stopBtnEl.disabled = false;
}

function onStopClickChangeColor() {
  clearInterval(intervalId);
  btnIsActive = startBtnEl.disabled = false;
  btnIsDisable = stopBtnEl.disabled = true;
}

function callBackSetInterval() {
  return (bodyEl.style.backgroundColor = getRandomHexColor());
}
