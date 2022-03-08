const greet = ["Steve is in a meeting", "All signs point to Steve being in a meeting", "Steve is in two meetings at the same time", "Steve is in a meeting that should have been an email", "Steve wishes he wasn't in a meeting on WebEx", "Steve is on a zoom call"];

const random = Math.floor(Math.random() * greet.length);

var show = document.getElementById('message');
show.textContent = greet[random];

