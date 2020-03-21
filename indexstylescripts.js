var imageNames = ['assets/leninthanossfw.png','assets/maothick.jpg'];
var rand = Math.floor(Math.random()*imageNames.length);
function randomBackground() {document.getElementById('parallax').style.backgroundImage = "url("+imageNames[rand]+")";}
