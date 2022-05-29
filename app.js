// always use === or !== to avoid bugs otherwise js turns them into same type

if (1 === "1") {
  console.log("this will be skipped");
}
if (1 == "1") {
  console.log("this will be printed");
}

let password = prompt("Enter your password: ");
console.log(password.indexOf(" "));

if (password.length >= 6 && password.indexOf(" ") < 0) {
  console.log("valid password");
} else {
  console.log("invalid password");
}
