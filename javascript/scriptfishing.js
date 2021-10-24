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



function addDelivery(countID, add1, add2, add3, buttonID1, buttonID2, buttonID3) {
  let deliveryCount = 0;
  let add = [add1, add2, add3];
  let buttonID = [buttonID1, buttonID2, buttonID3];

  for (let i = 0; i < add.length; i++) {
    if (add[i] === 0) {break;}
    deliveryCount += add[i];

    const content = document.querySelector(countID);
    content.textContent = `${deliveryCount}`;

    let listenerVariable = document.getElementById(buttonID[i]);
    let deliveryStatus = 0;

    listenerVariable.addEventListener('click', () => {
      let statusChange = [-add[i], add[i]];
      deliveryCount += statusChange[deliveryStatus];
      deliveryStatus++;
      if (deliveryStatus === statusChange.length) {deliveryStatus = 0;}
      content.textContent = `${deliveryCount}`;
    });
  }
}


addDelivery('#regular-arctic-char-number', 2, 0, 0, 'anniversary-3');
addDelivery('#big-arctic-char-number', 1, 0, 0, 'festival-3');
addDelivery('#small-bream-number', 4, 0, 0, 'cold-3');
addDelivery('#regular-bream-number', 4, 0, 0, 'farmer-2');
addDelivery('#big-bream-number', 2, 0, 0, 'honey-1');
addDelivery('#small-brown-trout-number', 4, 5, 0, 'offering-3', 'other-3');
addDelivery('#regular-brown-trout-number', 2, 3, 2, 'brew-2', 'reda-2', 'flavor-2');
addDelivery('#big-brown-trout-number', 1, 0, 0, 'reda-1');
addDelivery('#small-bullhead-number', 10, 10, 0, 'other-1', 'other-2');
addDelivery('#regular-bullhead-number', 2, 3, 0, 'brew-1', 'birds-2');
addDelivery('#big-bullhead-number', 1, 0, 0, 'meal-1');
addDelivery('#regular-burbot-number', 2, 3, 0, 'smorgasbord-3', 'cold-3');
addDelivery('#big-burbot-number', 2, 0, 0, 'sword-1');
addDelivery('#regular-cod-number', 3, 2, 0, 'eydis-3', 'cat-2');
addDelivery('#big-cod-number', 1, 0, 0, 'smorgasbord-1');
addDelivery('#small-eel-number', 1, 0, 0, 'other-4');
addDelivery('#regular-eel-number', 2, 2, 0, 'feast-1', 'offering-2');
addDelivery('#regular-flatfish-number', 3, 0, 0, 'cat-3');
addDelivery('#big-flatfish-number', 2, 0, 0, 'cold-1');
addDelivery('#regular-gray-trout-number', 3, 2, 0, 'farmer-3', 'scaling-2');
addDelivery('#big-gray-trout-number', 2, 0, 0, 'salve-1');
addDelivery('#small-haddock-number', 4, 0, 0, 'putrefaction-3');
addDelivery('#regular-haddock-number', 3, 0, 0, 'smorgasbord-2');
addDelivery('#big-haddock-number', 1, 0, 0, 'eydis-1');
addDelivery('#regular-hake-number', 4, 0, 0, 'anniversary-2');
addDelivery('#big-hake-number', 2, 0, 0, 'festival-1');
addDelivery('#regular-halibut-number', 2, 3, 2, 'meal-3', 'flavor-3', 'eydis-2');
addDelivery('#big-halibut-number', 1, 0, 0, 'putrefaction-1');
addDelivery('#regular-mackerel-number', 3, 0, 0, 'scaling-3');
addDelivery('#big-mackerel-number', 2, 0, 0, 'anniversary-1');
addDelivery('#small-perch-number', 2, 0, 0, 'feast-2');
addDelivery('#regular-perch-number', 2, 0, 0, 'feast-2');
addDelivery('#big-perch-number', 1, 1, 0, 'birds-1', 'offering-1');
addDelivery('#small-pollock-number', 4, 0, 0, 'smorgasbord-4');
addDelivery('#regular-pollock-number', 3, 2, 0, 'sword-2', 'honey-2');
addDelivery('#big-pollock-number', 2, 0, 0, 'cat-1');
addDelivery('#regular-redfish-number', 3, 0, 0, 'salve-2');
addDelivery('#big-redfish-number', 2, 0, 0, 'festival-2');
addDelivery('#regular-salmon-number', 3, 0, 0, 'honey-3');
addDelivery('#big-salmon-number', 2, 0, 0, 'farmer-1');
addDelivery('#regular-shad-number', 2, 0, 0, 'putrefaction-1');
addDelivery('#big-shad-number', 1, 0, 0, 'flavor-1');
addDelivery('#small-sturgeon-number', 5, 0, 0, 'farmer-4');
addDelivery('#regular-sturgeon-number', 6, 0, 0, 'festival-4');
addDelivery('#big-sturgeon-number', 2, 0, 0, 'scaling-1');