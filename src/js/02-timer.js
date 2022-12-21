import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

//flatpicker object options

const days = document.querySelector('span[data-days');
const hours = document.querySelector('span[data-hours');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
  },
};

const fp = new flatpickr('#datetime-picker', options);

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
startBtn.addEventListener('click', startCountdown);
let intervalId = null;
// functions

function startCountdown(e) {
  intervalId = setInterval(() => {
    const remainingTime = fp.selectedDates[0] - new Date();
    if (remainingTime <= 0) {
      clearInterval(intervalId);
    }
    const timeComponents = convertMs(remainingTime);
    days.textContent = timeComponents.days;
    hours.textContent = timeComponents.hours;
    minutes.textContent = timeComponents.minutes;
    seconds.textContent = timeComponents.seconds;
  });
  startBtn.removeEventListener('click', startCountdown);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
