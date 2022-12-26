import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      return;
    }

    startBtn.disabled = false;
    clearInterval(intervalId);
  },
};

const fp = new flatpickr('#datetime-picker', options);
const timer = document.querySelector('.timer');
const timerItems = [];
[...timer.children].forEach(child => timerItems.push(child.firstElementChild));

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
startBtn.addEventListener('click', startCountdown);

let intervalId = null;

// functions

function startCountdown() {
  startBtn.disabled = true;

  intervalId = setInterval(() => {
    const remainingTime = fp.selectedDates[0] - new Date();
    if (remainingTime <= 0) {
      clearInterval(intervalId);
    }
    const timeComponents = convertMs(remainingTime);
    setTimer(timeComponents, pad);
  }, 1000);
}

function setTimer(timeComponents, pad) {
  timerItems[0].textContent = pad(timeComponents.days);
  timerItems[1].textContent = pad(timeComponents.hours);
  timerItems[2].textContent = pad(timeComponents.minutes);
  timerItems[3].textContent = pad(timeComponents.seconds);
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
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
