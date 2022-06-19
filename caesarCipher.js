
function caesarCipher(str) {
    let alpha = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]

    let shiftCipher = (element, letter) => {
        let index = 1;
        let letterIndex = alpha.indexOf(element) + index;
        letter = alpha[letterIndex];
        return letter;
    }

    var result = '';
    str.split('').map(letter => {
        alpha.forEach(element =>{
            if(element === letter){letter = shiftCipher(element, letter); return result += letter;}
        });
    });

    console.log(result);

}



module.exports = caesarCipher;