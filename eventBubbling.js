function clickOnBody (){
    console.log('Click event on body')
}

function clickOnContainer () {
    console.log('Click event on container')
}

function clickOnBox () {
    evt.stopPropagation() 
    // ^stops the bubbling
    // evt.preventDefault()
    // ^stops the default
    console.log('Click event on box')
}

document.body.addEventListener('cick', clickOnBody)
boxContainerEl.addEventListener('click', clickOnContainer)
boxEl.addEventListener('click', clickOnBox)


