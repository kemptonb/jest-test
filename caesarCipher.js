
function caesarCipher(str) {
    let alpha = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]

    let index = 1;
    var result = '';

    let cipherLetter = (element, letter) => {
        let letterIndex = alpha.indexOf(element) + index;
        letter = alpha[letterIndex];
        result += letter;
    }

    let matchStrings = (letter) => {
        alpha.forEach(element => {
            if (element === letter) { cipherLetter(element, letter) };
        });
    }

    let checkSpaces = (letter) => {
        if (typeof letter === 'string' && letter.trim().length === 0) {
            result += letter;
        }
    }

    let checkNumbers = (letter) => {
        if (typeof parseInt(letter) === 'number') {
           
        }
    }

    str.split('').forEach(letter => {
        checkNumbers(letter);
        checkSpaces(letter);
        matchStrings(letter);
    });

    return result;

}



module.exports = caesarCipher;