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



function addDelivery(countID, add1, add2, add3, add4, buttonID1, buttonID2, buttonID3, buttonID4) {
  let deliveryCount = 0;
  let add = [add1, add2, add3, add4];
  let buttonID = [buttonID1, buttonID2, buttonID3, buttonID4];

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


addDelivery('#animal-bone-number', 2, 4, 5, 0, 'fur-3', 'scrying-1', 'goblets-1');
addDelivery('#animal-guts-number', 4, 2, 3, 0, 'bone-3', 'style-3', 'goblets-2');
addDelivery('#animal-heart-number', 4, 3, 3, 0, 'art-3', 'throw-2', 'goblets-3');
addDelivery('#arctic-fox-fur-number', 5, 6, 0, 0, 'style-1', 'reasons-1');
addDelivery('#black-bear-fur-number', 5, 7, 0, 0, 'bone-2', 'art-1');
addDelivery('#brown-bear-fur-number', 7, 5, 7, 0, 'ornamental-1', 'fur-1', 'bone-1');
addDelivery('#deer-hoof-number', 5, 4, 0, 0, 'valka-1', 'fertilizer-2');
addDelivery('#dog-fang-number', 3, 2, 4, 0, 'vs-3','warm-3', 'recycling-2');
addDelivery('#fox-fur-number', 6, 4, 2, 0, 'vs-1', 'warm-1' ,'scrying-2');
addDelivery('#hare-foot-number', 4, 2, 3, 0, 'vs-2', 'warm-2', 'fur-2');
addDelivery('#heron-beak-number', 4, 3, 3, 0, 'ornamental-3', 'recycling-3', 'reasons-3');
addDelivery('#lynx-paw-number', 3, 5, 0, 0, 'fresco-2', 'flute-1');
addDelivery('#polar-bear-fur-number', 6, 4, 0, 0, 'recycling-1', 'totems-1');
addDelivery('#raven-feather-number', 3, 5, 4, 0, 'flute-2', 'art-2', 'reasons-2');
addDelivery('#reindeer-antler-number', 3, 4, 2, 5, 'valka-2', 'crafts-1', 'decorations-3', 'ornamental-2');
addDelivery('#seal-tail-number', 5, 2, 2, 0, 'throw-1', 'totems-2', 'goblets-4');
addDelivery('#viper-egg-number', 2, 3, 2, 0, 'scrying-3', 'style-2', 'totems-3');
addDelivery('#wild-boar-tusk-number', 6, 2, 5, 3, 'fertilizer-1', 'crafts-2', 'decorations-1', 'bone-4');
addDelivery('#wolf-claw-number', 3, 5, 3, 0, 'decorations-2', 'fresco-1', 'art-4');
