// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton")

button.addEventListener('click', changeColor)

function changeColor() {
    var element = document.getElementsByClassName('box')

    for (i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = 'blue'
    }

}