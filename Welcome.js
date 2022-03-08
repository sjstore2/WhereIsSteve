
const greet = ["Yes", "All signs point to yes", "maybe even two at the same time"];

const random = Math.floor(Math.random() * greet.length);

var show = document.getElementById('message');
show.textContent = random;

