const loadingText = document.querySelector('.loading-text')
const textToAdd = '...a full-stack developer'
let addedText = ''

let currentTime = 0
let blinkInterval = setInterval(()=>{
    addedText += textToAdd[addedText.length]
    loadingText.textContent = addedText + '|'

    if (addedText == textToAdd) {
        clearInterval(blinkInterval)
    }
}, 100)