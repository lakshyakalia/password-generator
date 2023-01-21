const demoPassword = 'mypassword'

// list of concerns
// - is long enough
// - has numbers
// - has exclamation mark
// - 


const passwordFlags = (password) => {
    const flags = []

    if(password.length < 8)
        flags.push('too-short')
    
    if(!/[0-9]/.exec(password))
        flags.push('no-numbers')

    return flags
}

const fixNoNumbers = (password) => {
    let newPassword = password.split('')

    const transformsList = {
        "e": ["3"],
        "i": ["1"],
        "l": ["1"],
        "o": ["0"],
        "s": ["5"],
        "t": ["7"],
    }

    for(i in password) {
        i = Number(i)
        const transforms = transformsList[password[i]]
        if(transforms != null)
            newPassword[i] = transforms[0]
    }

    return newPassword.join('')
}

const fixPassword = (password, flags) => {
    if(flags.includes('no-numbers'))
        password = fixNoNumbers(password)
    
    return password
}


console.log(
    fixPassword(demoPassword, ['no-numbers'])
)