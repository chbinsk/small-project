const people = [
    {
        "name": "Dignasia Fahman Asna",
        "panggilan": "Ignas",
        "email": "",
        "password": "",
        "post-test": [45, 72],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": []
    },
    {
        "name": "Falah Naufal Zaki",
        "panggilan": "Falah",
        "email": "",
        "password": "",
        "post-test": [100, 76],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": []
    },
    {
        "name": "Muhammad Raffa Al Ghiffary",
        "panggilan": "Raffa",
        "email": "",
        "password": "",
        "post-test": [70, 88],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": []
    },
    {
        "name": "Muhammad Ramdhan Yusuf",
        "panggilan": "Ramdhan",
        "email": "",
        "password": "",
        "post-test": [80, 76],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": []
    },
    {
        "name": "Muhammad Yahya Fatahillah Safiq",
        "panggilan": "Yahya",
        "email": "",
        "password": "",
        "post-test": [80, 100],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": []
    },
    {
        "name": "Radar Zinggih Kusuma Wibawa",
        "panggilan": "Radar",
        "email": "",
        "password": "",
        "post-test": [40, 72],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": []
    },
    {
        "name": "Radinka Rafi'ie Achmad Pradipta",
        "panggilan": "Rafi'ie",
        "email": "",
        "password": "",
        "post-test": [100, 88],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": []
    },
    {
        "name": "Ririn Muthii'atussolikhah",
        "panggilan": "Ririn",
        "email": "ririnlucky06@gmail.com",
        "password": "",
        "post-test": [85, 24],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": []
    }
]

const taskNamePostTest = [
    "Post-test Sesi 1 - 5 Maret 2022",
    "Post-test Sesi 2 - 5 Maret 2022"
]

const taskNameLatihan = [
    "Latihan 1"
]

const emailTag = document.querySelector('#emailTag')
const input = document.querySelector("#inputEmail")
const inputButton = document.querySelector("#inputButton")

const getTitle = document.querySelector("#titleName")
const getSubtite = document.querySelector("#subtitleName")

const dashboardScene = document.querySelector("#dashboard")
const postTestScene = document.querySelector("#post-test")
const latihanScene = document.querySelector("#latihan")

function ValidationAndDeleteLoginForm(bool) {
    if (bool == true) {
        emailTag.remove()
        input.remove()
        inputButton.remove()
    } else {
        
    }
}

function buildDashboard(email) {
    const dashboardTitle = document.createElement('span')
    dashboardTitle.innerText = "Rerata Nilai :"
    dashboardTitle.className = "tag"
    
    const boxRerata = document.createElement('div')
    boxRerata.className = "box"

    const postTestRerataButton = document.createElement('button')
    postTestRerataButton.className = "button is-info is-small"
    postTestRerataButton.innerText = "Post-test :"

    const postTestRerataNilai = document.createElement('button')
    postTestRerataNilai.className = "button is-info is-light is-small"
    postTestRerataNilai.innerText = "100"

    const latihanRerataButton = document.createElement('button')
    latihanRerataButton.className = "button is-info is-small"
    latihanRerataButton.innerText = "Latihan         :"

    const latihanRerataNilai = document.createElement('button')
    latihanRerataNilai.className = "button is-info is-light is-small"
    latihanRerataNilai.innerText = "100"

    const newLine = document.createElement('br')

    dashboardScene.append(dashboardTitle)
    boxRerata.append(postTestRerataButton)
    boxRerata.append(postTestRerataNilai)

    boxRerata.append(newLine)
    boxRerata.append(latihanRerataButton)
    boxRerata.append(latihanRerataNilai)

    dashboardScene.append(boxRerata)
}

function tampilanNilaiPostTest(email) {
    for (person of people) {
        if (person["email"] == email) {
            const postTestTag = document.createElement('span')
            postTestTag.className = "tag"
            postTestTag.innerText = "Post-test"
            postTestScene.append(postTestTag)

            let count = 0
            for (score of person["post-test"]) {
                const scoreBox = document.createElement('div')
                scoreBox.className = "box"

                const taskNameButton = document.createElement('p')
                taskNameButton.className = "has-text-weight-bold"      
                taskNameButton.innerText = taskNamePostTest[count]

                const scoreButtonTag = document.createElement('button')
                scoreButtonTag.className = "button is-info is-small"
                scoreButtonTag.innerText = "Score"

                const scoreButton = document.createElement('button')
                scoreButton.className = "button is-info is-light is-small"
                
                if (Number.isInteger(score)) {
                    scoreButton.innerText = score + " / 100"
                } else {
                    scoreButton.innerText = score 
                }

                scoreBox.append(taskNameButton)  
                scoreBox.append(scoreButtonTag) 
                scoreBox.append(scoreButton)             
                postTestScene.append(scoreBox)
                count+=1
            }
        }
    }
}

function tampilanNilaiLatihan(email) {
    for (person of people) {
        if (person["email"] == email) {
            const latihanTag = document.createElement('span')
            latihanTag.className = "tag"
            latihanTag.innerText = "Latihan"
            latihanScene.append(latihanTag)

            let count = 0
            for (score of person["latihan"]) {
                const scoreBox = document.createElement('div')
                scoreBox.className = "box"

                const taskNameButton = document.createElement('p')
                taskNameButton.className = "has-text-weight-bold"
                taskNameButton.innerText = taskNameLatihan[count]

                const scoreButtonTag = document.createElement('button')
                scoreButtonTag.className = "button is-info is-small"
                scoreButtonTag.innerText = "Score"

                const scoreButton = document.createElement('button')
                scoreButton.className = "button is-info is-light is-small"

                if (score.isInteger) {
                    scoreButton.innerText = score + " / 100"
                } else {
                    scoreButton.innerText = score 
                }
                

                scoreBox.append(taskNameButton)
                scoreBox.append(scoreButtonTag)
                scoreBox.append(scoreButton)    
                latihanScene.append(scoreBox)
                count+=1
            }
        }
    }
}


inputButton.addEventListener('click', function () {
    const getInputValue = input.value
    for (person of people) {
        if (person["email"] == getInputValue) {
            getTitle.innerText = "Hai " + person.name + "!"
            getSubtite.innerText = "pertahankan nilai yang sudah baik ya :> semisal masih ada nilai yang masih kurang memuaskan gapapa masih ada waktu untuk belajar lebih giat lagi,   jadi semangat terus belajarnya " + person["panggilan"].toLowerCase() + "!"
            getSubtite.className = "notification is-info is-light"

            buildDashboard(getInputValue)
            tampilanNilaiPostTest(getInputValue)
            tampilanNilaiLatihan(getInputValue)
            ValidationAndDeleteLoginForm(true)
        } else {
            ValidationAndDeleteLoginForm(false)
        }
    }
})