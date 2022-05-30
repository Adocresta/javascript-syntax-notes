// always use === or !== to avoid bugs otherwise js turns them into same type

if (1 === "1") {
  console.log("this will be skipped");
}
if (1 == "1") {
  console.log("this will be printed");
}

// indexof returns us -1 if means no space
let password = prompt("Enter your password: ");
console.log(password.indexOf(" "));

if (password.length >= 6 && password.indexOf(" ") < 0) {
  console.log("valid password");
} else {
  console.log("invalid password");
}

// && runs before || all the time unless paranthesis

// **switch statement

let dayPast = 0;
// first day ends at 24:00
dayPast++;

switch (dayPast) {
  case 1:
    console.log("You've survived the first day Congratulations");
    break;
  case 2:
    console.log("You've survived the Second day Congratulations");
  // if you want same outcome leave it empty
  case 3:
  case 4:
    console.log("You've survived the 3rd and 4th day Congratulations");
  default:
    break;
}

// defining empty array

let colors = [];

//can't change string values

// indexOf checks if element exist if not give -1

// we use  const with array because reference

const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];

console.log(airplaneSeats);
