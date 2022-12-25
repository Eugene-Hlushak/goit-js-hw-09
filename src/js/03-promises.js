import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

const inputs = [];
[...form.children].forEach(child => {
  if (!child.firstElementChild) {
    return;
  }
  inputs.push(child.firstElementChild);
});

let intervalId = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    intervalId = setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(e) {
  e.preventDefault();

  let delay = Number(inputs[0].value);
  const step = Number(inputs[1].value);
  const amount = Number(inputs[2].value);

  for (position = 1; position <= amount; position += 1) {
    createPromise(position, delay).then(onSuccess).catch(onError);
    delay += step;
  }
}

function onSuccess(result) {
  Notify.success(
    `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
  );
}
function onError(error) {
  Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
}
