var html = '';
var rgbColor;

// THE RANDOM COLOR FUNCTION
function colorRgb() {
  return Math.floor(Math.random() * 256);
}

// THE COLOR MIXER FUNCTION
function colorRandom() {
  var color = 'rgb(';
  color += colorRgb() + ',';
  color += colorRgb() + ',';
  color += colorRgb() + ')';
  return color;
}

// THE PRINT FUNCTION
function print(message) {
  document.write(message);
}

// THE LOOP THAT COUNTS 
for (var i = 1; i <= 100; i += 1) {
  rgbColor = colorRandom();
  html += '<div style="background-color:' + rgbColor + '"></div>'
}


// THE PRINT FUNCTION
print(html);