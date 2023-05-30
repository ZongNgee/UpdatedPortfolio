let mybutton = document.getElementById("topBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
mybutton.style.display = "block";

} else {
mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

VANTA.BIRDS({
    el: "#animation",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x1a1a1a,
    color1: 0x464646,
    birdSize: 0.90,
    wingSpan: 14.00,
    separation: 37.00,
    alignment: 38.00,
    cohesion: 28.00
  })

