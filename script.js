var name = prompt("Enter your name").trim();

if (name === "") {
  alert("Enter your name").trim();
}

else if (name.length < 3) {
  alert("The name is too short!").trim();
}
else {
var question = prompt("Why do you want to enter the university?").trim();
var change = prompt("Which word would you change?").trim();
var text = change.replaceAll(change , "alicode").trim();
alert("Result: " + text);
}