var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var currentDate = new Date();

var month = currentDate.getMonth() + 1;
var date = currentDate.getDate();
var day = currentDate.getDay(); 


var monthName = months[currentDate.getMonth()];
var dayName = daysOfWeek[day];


document.getElementById("day").textContent= dayName + " " + date + " " + monthName;
