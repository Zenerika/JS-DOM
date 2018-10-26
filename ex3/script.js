// Make the box blue when you click the button. (Here's some code to help you get started)

var button = document.getElementById("myButton")

button.addEventListener('click', changeColor)

function changeColor () {
  var element = document.getElementById("box")
  element.style.backgroundColor = 'blue'
}