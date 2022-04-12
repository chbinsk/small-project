const word = [
    "RISTEK",
    "PACIL",
    "NYODOK",
    "DEKDEPE",
    "ALIN"
]

// ----------------- Create column for input character -------------------
// Pick a random word
const pickWord = word[Math.floor(Math.random()*5)]
const lenWord = pickWord.length
console.log(pickWord)
const container = document.querySelector('#container')
// Build square
for (i = 0; i < lenWord-1; i++) {
    for (j = 0; j < lenWord; j++) {
        const divcol = document.createElement('div')
        divcol.className = "coll"
        container.append(divcol);
    }
    const br = document.createElement('br')
    container.append(br)
}

// Build keyboard for input the character
const keyboard = document.querySelector('#keyboard')
const characters = ['Q', 'W', 'E', 'R', 'T', 'Y ', 'U', 'I', 'O', 'P',
                    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
                    'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
const keyboard1 = document.createElement('div')
keyboard1.id = "keybo1"
const keyboard2 = document.createElement('div')
keyboard2.id = "keybo2"
const keyboard3 = document.createElement('div')
keyboard3.id = "keybo3"
for (i = 0; i < 28; i++) {
    if (i < 10) {
        const divKey1 = document.createElement('div')
        divKey1.innerText = characters[i]
        divKey1.className = "keybo"
        keyboard1.append(divKey1)
    } else if (i < 19) {
        const divKey2 = document.createElement('div')
        divKey2.innerText = characters[i]
        divKey2.className = "keybo"
        keyboard2.append(divKey2)
    } else {
        const divKey3 = document.createElement('div')
        divKey3.innerText = characters[i]
        divKey3.className = "keybo"
        keyboard3.append(divKey3)
    }
}
keyboard.append(keyboard1)
keyboard.append(keyboard2)
keyboard.append(keyboard3)

// Get input from user
let userInput = ""
let counterInput = 0
// Click keyboard function
const getKey = document.querySelectorAll('div')
for (key of getKey) {
    if (key.className == "keybo") {
        key.addEventListener('click', function() {
            console.log(key)
            
            // CHECK COUNTER INPUT FIRST
            if (counterInput != lenWord || this.innerText == "ENTER" || this.innerText == "DEL") { 
                if (this.innerText == "ENTER" && counterInput != lenWord) {
                    // NO ARG DO NOTHING
                } else if (this.innerText == "ENTER" && counterInput == lenWord) {
                    counterInput = 0 // Reset
                    console.log("SUBMIT")
                } else if (this.innerText == "DEL") {
                    userInput = userInput.slice(0, userInput.length-1)
                    counterInput -= 1

                    // DELETE
                    let lstObj = []
                    const colls = document.querySelectorAll('div')
                    for (co of colls) {
                        if (co.className == "coll") {
                            if (co.innerText != "") {
                                lstObj.push(co)
                            }
                        }
                    }
                    lstObj[lstObj.length-1].innerText = ""
                    console.log(lstObj)
                } else {
                    userInput += this.innerText
                    counterInput += 1

                    // CREATE
                    let setof = false
                    const colls = document.querySelectorAll('div')
                    for (co of colls) {
                        if (co.className == "coll" && co.innerText == "" && setof == false) {
                            co.innerText = this.innerText
                            setof = true;
                        }
                    }
                }
            }
            console.log(userInput)

            


        })
    }
}

// Create help button
const help = document.querySelector("#help")
help.addEventListener('click', function() {
    const profile = document.createElement('div')
    profile.innerText = "Created by Eugenius Mario S"
    profile.className = "profile"
    const cont = document.querySelector('#cont')
    cont.append(profile)

    setInterval(() => {
        profile.remove()
    },2000)
})

 