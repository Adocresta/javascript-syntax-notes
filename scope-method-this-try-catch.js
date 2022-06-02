// Shorthand for object functions just functionName(args){}, don't forget the comma

// code exercise method for square
const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

// this is usually used in a object

// this itself refers to window obj out in the wild

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};

// try and catch for detecting errors

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (Typeeroer) {
    console.error("please pass a string next time");
  }
}
