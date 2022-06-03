function printHeart() {
  console.log("<3");
}

function rant(rantMessage) {
  let message = `${rantMessage}`;
  message = message.toUpperCase();
  console.log(message);
  console.log(message);
  console.log(message);
}

rant("I HATE BEETS");

function capitalize(stringName) {
  let newString = `${stringName}`;
  let secondPart = newString.slice(1).toLowerCase();
  newString = newString.slice(0, 1).toLocaleUpperCase();
  return newString + secondPart;
}
