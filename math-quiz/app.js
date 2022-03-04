const judul = document.querySelector('#judul')
const bab = document.querySelector('#bab')
const soalHTML = document.querySelector('#soal')
const jawabanHTML = document.querySelector('#jawaban')

// lokasi simpan kunci jawaban
let KUNCI = ""

const babList = [
    {
    "name": "Persamaan Kuadrat",
    "soal": function () {
        judul.innerText = "Persamaan Kuadrat"
        const x1 = Math.floor(Math.random() * 10 + 1)
        const x2 = Math.floor(Math.random() * 10 + 1)
        const soal = "Berapakah akar-akar dari x^2 + " + (x1+x2) + "x + " + (x1*x2) + "?"
        susunSoal(soal)

        // susun jawaban random
        const arrayJawaban = [x1, x2]
        const jawaban = getRandomNumber(8, arrayJawaban)
        console.log(jawaban)

        // formatting jawaban to 5
        let formatJawaban = []
        for (i = 0; i < 10; i+=2) {
            formatJawaban.push(jawaban[i] + " dan " + jawaban[i+1])
        }

        return formatJawaban
        }
    }
]

// iterasi tiap bab ke laman HTML
for (b of babList) {
    console.log(b)
    const daftarBab = document.createElement('button')
    daftarBab.className = "button is-info"
    daftarBab.innerText = b["name"]
    daftarBab.id = b["name"]

    const scoreCounter = document.createElement('button')
    scoreCounter.className = "button is-info is-light"
    scoreCounter.innerText = 0
    scoreCounter.id = "score"

    bab.append(daftarBab)
    bab.append(scoreCounter)
}

function susunSoal(soal) {
    // clear semua soal dulu
    const soalBox = document.querySelectorAll('div')
    for (let soalBoxx of soalBox) {
        if (soalBoxx.id == "soalBox") {
            soalBoxx.remove()
        }
    }

    // susun soal
    console.log(soal)
    const soalDisplay = document.createElement('div')
    soalDisplay.className = "box"
    soalDisplay.innerText = soal
    soalDisplay.id = "soalBox"

    soalHTML.append(soalDisplay)
    
}

function callJawaban(jawaban) { // wajib berisi 5 isi dalam 1 array, index 0 adalah index yang benar (kunjaw)
    // clear semua abcde, opsi dan newLine dulu
    const jawabanButton = document.querySelectorAll('button')
    for (let jwbButton of jawabanButton) {
        if (jwbButton.id == "opsiJawaban") {
            jwbButton.remove()
        }
    }
    const newLineHTML = document.querySelectorAll('br')
    for (let line of newLineHTML) {
        line.remove()
    }
    const divOpsiBox = document.querySelectorAll('div')
    for (let div of divOpsiBox) {
        if (div.id == "opsiBox") {
            div.remove()
        }
    }

    KUNCI = jawaban[0]
    console.log(KUNCI)
    jawaban = acakJawaban(jawaban)

    // susun opsi jawaban
    let count = 0
    const arrayAbcde = ['a', 'b', 'c', 'd', 'e']
    const kotak = document.createElement('div')
    kotak.className = "box"
    kotak.id = "opsiBox"
    for (j of jawaban) {
        const divBlock = document.createElement('div')
        divBlock.className = "block"

        const abcde = document.createElement('button')
        abcde.className = "button is-info"
        abcde.id = "opsiJawaban"
        abcde.innerText = arrayAbcde[count]
        const opsi = document.createElement('button')
        const newLine = document.createElement('br')
        opsi.className = "button is-info is-light"
        opsi.innerText = j
        opsi.id = "opsiJawaban"

        divBlock.append(abcde)
        divBlock.append(opsi)
        kotak.append(divBlock)
        kotak.append(newLine)
        count += 1
    }
    jawabanHTML.append(kotak)
}

function callOperation(bab) {
    console.log("MASUK " + bab)
    for (bb of babList) {
        if (bb.name == bab) {
            const jawaban = bb.soal() // panggil operasi
            callJawaban(jawaban)
        }
    }
}

function getRandomNumber(total, array) {
    for (i = 0; i < total; i++) {
        let tambahan = Math.floor(Math.random() * 10 + 1)
        while (array.includes(tambahan)) {
                tambahan = Math.floor(Math.random() * 10 + 1)
        }
        array.push(tambahan)   
    }
    return array
}

// digunakan untuk mengacak jawaban
function acakJawaban(arrayJawaban) {
    // menukar jawaban benar index 0 acak 
    let newIndexJawaban = []
    for (i = 0; i < 5; i++) {
        let newIndex = Math.floor(Math.random() * 5 + 1) - 1
        while (newIndexJawaban.includes(newIndex)) {
            newIndex = Math.floor(Math.random() * 5 + 1) - 1
        }
        newIndexJawaban.push(newIndex)
    }
    console.log(newIndexJawaban)
    
    let newArrayJawaban = []
    for (index of newIndexJawaban) {
        newArrayJawaban.push(arrayJawaban[index])
    }
    console.log(newArrayJawaban)
    return newArrayJawaban
}

function scoreCounting(bool) {
    const scorePlus = document.querySelector("#score")
    let oldScore = parseInt(scorePlus.innerText)
    if (bool == true) {
        scorePlus.innerText = oldScore + 5
    } else {
        scorePlus.innerText = oldScore - 5
    }
}

setInterval(() => {
    const allBab = document.querySelectorAll('button')
    for (b of allBab) {
        if (b.className == "button is-info") {
            b.addEventListener('click', function() {
                // this.innerText = "YEAY"
                callOperation(this.id)
            });
        }
    }
}, 1000);

// cekJawaban
setInterval(() => {
    const allOpsiJawaban = document.querySelectorAll('button')
    for (buton of allOpsiJawaban) {
        if (buton.id == "opsiJawaban" && buton.className == "button is-info is-light") {
            buton.addEventListener('click', function() {
                if (this.innerText == KUNCI) {
                    this.className = "button is-success is-light"
                    scoreCounting(true)
                } else {
                    this.className = "button is-danger is-light"
                    scoreCounting(false)
                }
            })
        }
    }
}, 2000);
