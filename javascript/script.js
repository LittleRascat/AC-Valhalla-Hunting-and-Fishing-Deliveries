const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  let status = 0;
  button.addEventListener('click', () => {
    let statusColors = ['lightgreen', 'cornsilk'];
    button.style.background = statusColors[status];
    status++;
    if (status === statusColors.length) {status = 0;}
  });
});

let regularEel = 4;

const container = document.querySelector('#regular-eel');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = `${regularEel}`;

container.appendChild(content);


let offering2 = document.getElementById("offering-2");
let offering2Status = 0;

offering2.addEventListener('click', () => {
  let statusColors = [-2, 2];
  regularEel += statusColors[offering2Status];
  offering2Status++;
  if (offering2Status === statusColors.length) {offering2Status = 0;}
  content.textContent = `${regularEel}`;
});















