const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputEl.value;
  if (enteredValue.trim().length === 0) {
    return;
  }
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);
