const flagsList = ["too-short", "no-numbers", "dictionary-word"]

// do something with the word

const activeFlags = ["flags"]

const setFlagsVisibility = (flags) => {
    for (const possible of flagsList) {
        // maybe cache this?
        const element = document.getElementsByClassName(possible)[0]
        if (activeFlags.includes(flags)) {
            element.classList.remove('active')
        }
    }
}

const inputElement = document.querySelector('.password-input')

inputElement.addEventListener('keyup', (event) => {
    const flags = passwordFlags(event.target.value)
    console.log(flags)
})