const checkCase = (character) => {
    if (character == character.toLowerCase()) {
        return 'LowerCase'
    }
    else {
        return 'UpperCase'
    }
}
const isLetter = (character) => {
    return (/[a-zA-Z]/).test(character)
}
const sameCase = (char1, char2) => {
    if (isLetter(char1) || isLetter(char2)) {
        if (checkCase(char1) === checkCase(char2)) {
            return 1
        }
        else {
            return 0
        }
    }
    else {
        return -1
    }
}

console.log(sameCase('0', '?'))

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns - 1