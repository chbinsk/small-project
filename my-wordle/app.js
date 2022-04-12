const word = [
    "FASILKOM",
    "PACIL",
    "NYODOK",
    "DEKDEPE",
    "POKOKEPOK"
]

// ----------------- Create column for input character -------------------
// Pick a random word
const pickWord = word[Math.floor(Math.random()*5)]
const lenWord = pickWord.length
console.log(pickWord)
const container = document.querySelector('#container')
for (i = 0; i < lenWord; i++) {
    const divcol = document.createElement('div')
    const col = document.createElement('input')
    col.size = 1
    col.maxLength = 1
    divcol.className = "coll"
    divcol.append(col)
    container.append(divcol);
}

// Build keyboard for input the character
const keyboard = document.querySelector('#keyboard')
const characters = ['Q', 'W', 'E', 'R', 'T', 'Y ', 'U', 'I', 'O', 'P',
                    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
                    'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
for (i = 0; i < 28; i++) {
    const divKey = document.createElement('div')
    divKey.innerText = characters[i]
    divKey.className = "keybo"
    if (i != 10 && i != 19) {
        keyboard.append(divKey)
    } else {
        const br = document.createElement('br')
        keyboard.append(br)
        keyboard.append(divKey)
    }
}
