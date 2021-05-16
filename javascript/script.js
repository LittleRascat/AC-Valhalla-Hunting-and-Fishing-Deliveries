const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  let status = incomplete;
  if (status = incomplete) {
    button.addEventListener('click', () => {
      button.style.cssText = 'background: lightgreen';
    });
    status = complete;
  } else {
    button.addEventListener('click', () => {
      button.style.cssText = 'background: white';
    });
    status = incomplete;
  }
});









  