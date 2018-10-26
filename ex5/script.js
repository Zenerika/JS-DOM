// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

const btnEl = document.getElementById('myButton')
const boxEl = document.getElementById('boxContainer')

function clickOnBtn () {
    let newBoxEl = document.createElement('div')
    newBoxEl.className = 'box'
    boxEl.appendChild(newBoxEl)
}

btnEl.addEventListener('click', clickOnBtn)

// function myBoxMaker() {
//     var element = document.getElementById("box");
//     element.classList.add("main");
//     element.appendChild("boxContainer");
// }

// Cheat Option:
// boxEl.innerHTML += '<div class="box"></div>'

// function clickOnBody (evt) {
//     console.log('Click event on body')
// }

// function clickOnContainer (evt) {
//     console.log('Click event on container')
// }

// function clickOnBox (evt) {
//     console.log('Click event on box')
//     console.dir(evt)
// }

// document.body.addEventListener('cick', clickOnBody)

// // 
// const myArr = [ ‘uno’, 'two', 'buckle my shoe']

// function printWithX (itm) {
//     console.log('xxx' + itm + 'xxx')
// }

// myArr.forEach(printWithX)

// // 
// myArr.map()
