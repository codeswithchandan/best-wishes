window.onload = function(){
$(".loader_icon").click(function(){
    $(".loader_icon").fadeOut(500,function(){
        $(".left-slide22,.right-slide22").animate({
            "width":"0%"
        },500,function(){
            $(".loader_container").fadeOut();
        });
    });
});

};

function PlaySound() {
  var sound = document.getElementById("audioplay");
  sound.play()
}


function updateTimer() {
  future  = Date.parse("April 10, 2022 00:00:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
}
setInterval('updateTimer()', 1000 );

 // To disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

// To disable F12 options
document.onkeypress = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onmousedown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onkeydown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
// To To Disable ctrl+c, ctrl+u, ctrl+shift+i
jQuery(document).ready(function($){
$(document).keydown(function(event) {
var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();

if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
//disable key press porcessing
return false;
}
});
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
    }
});
});