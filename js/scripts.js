console.log("Hello!");

// randomize temperature
var temp = Math.random() * 40;
temp = Math.floor(temp);

var tempElement = document.getElementById('temp');
// Get the temperature element

tempElement.innerText = temp;
// Update tempelement to the value of 'temp'

// Get the body element
var bodyElement = document.getElementById('weather-app');

// Get the paragraph element
var detailsElement = document.getElementById('details');

// Control Statements - condition statements - 'If, else if, else'
if (temp >= 20) {
  bodyElement.style.backgroundColor = '#fab1a0';
  detailsElement.innerText = "Yikes its too hot 🔥!";
  console.log("Its too hot");
}
else if (temp >= 0) {
  bodyElement.style.backgroundColor = '#55efc4';
  detailsElement.innerText = "It's just right 👍.";
  console.log("It's just right");
}
else {
  bodyElement.style.backgroundColor = '#74b9ff';
  detailsElement.innerText = "Brr! It's too cold ❄️!";
  console.log("it's too cold");
}