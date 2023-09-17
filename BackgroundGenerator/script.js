var colorPicker1 = document.getElementById('colorPicker1');
var colorPicker2 = document.getElementById('colorPicker2');
var gradientBackground = document.getElementById('gradientBackground');

function setGradientBackground() {
  var selectedColor1 = colorPicker1.value;
  var selectedColor2 = colorPicker2.value;
  
  gradientBackground.style.background = "linear-gradient(to right, " + selectedColor1 + ", " + selectedColor2 + ")";
}

colorPicker1.addEventListener('input', setGradientBackground);
colorPicker2.addEventListener('input', setGradientBackground);

setGradientBackground(); // To set initial gradient background on page load