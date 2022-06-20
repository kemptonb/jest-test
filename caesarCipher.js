
function caesarCipher(str) {
    let alpha = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]

    let index = 1;
    var result = '';

    let checkCase = (letter, letterCase)=> {
        letter.toUpperCase() === letter ? letterCase = "upper": letterCase = "lower"
        return letterCase;
    }

    let changeCase = (letter, letterCase)=> {
        letterCase === "upper" ? letter = letter.toUpperCase() : letter = letter.toLowerCase() 
        return letter
    }

    let cipherLetter = (element, letter) => {
        let letterCase = checkCase(letter, letterCase);
        let letterIndex = alpha.indexOf(element) + index;
        letter = alpha[letterIndex];
        letter = changeCase(letter, letterCase);
        result += letter;
    }

    let checkSpaces = (letter) => {
        if (typeof letter === 'string' && letter.trim().length === 0) {
            result += letter;
        } 
    }

    let matchStrings = (letter) => {
        alpha.forEach(element => {
            if (element === letter.toLowerCase()) { cipherLetter(element, letter) };
        });
    }

    let checkNumbers = (letter) => {
        if (typeof parseInt(letter) === 'number' && isNaN(parseInt(letter)) === false) {
            result += letter;
        }
    }

    let checkPunct = (letter) => {
        let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        if(letter.match(regex)){result += letter}
    }

    str.split('').forEach(letter => {
        checkNumbers(letter);
        checkPunct(letter);
        checkSpaces(letter);
        matchStrings(letter);
    });

    return result;

}



module.exports = caesarCipher;