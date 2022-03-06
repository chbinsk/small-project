const people = [
    {
        "name": "John Doe",
        "panggilan": "John",
        "email": "john",
        "password": "doe",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [90, 100],
        "latihan": [75, 80],
        "pemrograman": [10]
    },
    {
        "name": "Eugenius Mario Situmorang",
        "panggilan": "mario",
        "email": "mario",
        "password": "admin",
        "role": "admin"
    },
    {
        "name": "Dignasia Fahman Asna",
        "panggilan": "Ignas",
        "email": "ignas",
        "password": "",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [45, 72],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"]
    },
    {
        "name": "Falah Naufal Zaki",
        "panggilan": "Falah",
        "email": "falah",
        "password": "",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [100, 76],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"]
    },
    {
        "name": "Muhammad Raffa Al Ghiffary",
        "panggilan": "Raffa",
        "email": "raffa",
        "password": "",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [70, 88],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"]
    },
    {
        "name": "Muhammad Ramdhan Yusuf",
        "panggilan": "Ramdhan",
        "email": "ramdhan",
        "password": "",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [80, 76],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"]
    },
    {
        "name": "Muhammad Yahya Fatahillah Safiq",
        "panggilan": "Yahya",
        "email": "yahya",
        "password": "",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [80, 100],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"]
    },
    {
        "name": "Radar Zinggih Kusuma Wibawa",
        "panggilan": "Radar",
        "email": "radar",
        "password": "",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [40, 72],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"]
    },
    {
        "name": "Radinka Rafi'ie Achmad Pradipta",
        "panggilan": "Rafi'ie",
        "email": "rafi",
        "password": "",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [100, 88],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"]
    },
    {
        "name": "Ririn Muthii'atussolikhah",
        "panggilan": "Ririn",
        "email": "ririnlucky06@gmail.com",
        "password": "",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [85, 24],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"]
    }
]

const taskNamePretest = [
    "Pretest 1"
]

const taskNamePostTest = [
    "Post-test Sesi 1 - 5 Maret 2022",
    "Post-test Sesi 2 - 5 Maret 2022"
]

const taskNameLatihan = [
    "Latihan 1",
    "Latihan 2"
]


const taskNamePemrograman = [
    "Perkenalan"
]


const emailTag = document.querySelector('#emailTag')
const passwordTag = document.querySelector('#passwordTag')
const input = document.querySelector("#inputEmail")
const inputValidation = document.querySelector("#emailValidation")
const password = document.querySelector("#inputPassword")
const passwordValidation = document.querySelector("#passwordValidation")
const inputButton = document.querySelector("#inputButton")

const getTitle = document.querySelector("#titleName")
const getSubtite = document.querySelector("#subtitleName")

const dashboardScene = document.querySelector("#dashboard")
const pretestScene = document.querySelector("#pretest")
const postTestScene = document.querySelector("#post-test")
const latihanScene = document.querySelector("#latihan")
const pemrogramanScene = document.querySelector("#pemrograman")

function averageArray(array) {
    let sum = 0
    let total = array.length
    for (index of array) {
        if (Number.isInteger(index)) {
            sum += index
        }
    }
    if (sum == 0) {
        return "-"
    } else {
        return sum / total
    }
}

function ValidationAndDeleteLoginForm(bool) {
    if (bool == true) {
        emailTag.remove()
        passwordTag.remove()

        input.remove()
        password.remove()
        inputButton.remove()
    } else {
        
    }
}

function buildDashboard(person) {
    const dashboardTitle = document.createElement('span')
    dashboardTitle.innerText = "Rerata Nilai :"
    dashboardTitle.className = "tag"
    
    const boxRerata = document.createElement('div')
    boxRerata.className = "box"

    const tableName = document.createElement('table')
    tableName.className = "table is-bordered is-striped is-narrow is-hoverable is-fullwidth"

    const tableContent = [
        [
            "Komponen",
            "Rerata"
        ],
        [
            "Pretest",
            averageArray(person["pretest"])
        ],
        [ // post-test
            "Post-test",
            averageArray(person["post-test"]) // post-test
        ],
        [
            "Latihan",
            averageArray(person["latihan"])
        ],
        [
            "Pemrograman",
            averageArray(person["pemrograman"])
        ]
    ]

    count = 0
    for (content of tableContent) {
        if (count == 0) {
            const thead = document.createElement('thead')

            const tr = document.createElement('tr')

            for (isi of content) {
                const th = document.createElement('th')
                th.innerText = isi
                th.className = "is-info"

                tr.append(th)
            }

            thead.append(tr)
            tableName.append(thead)
        } else {
            const tbody = document.createElement('tbody')
            const tr = document.createElement('tr')

            for (isi of content) {
                const th = document.createElement('th')
                th.innerText = isi
                tr.append(th)
            }

            tbody.append(tr)
            tableName.append(tbody)
        }
        count+=1
    }
            

    dashboardScene.append(dashboardTitle)
    boxRerata.append(tableName)
    dashboardScene.append(boxRerata)
}

function tampilanNilaiPretest(email) {
    for (person of people) {
        if (person["email"] == email) {
            const pretestTag = document.createElement('span')
            pretestTag.className = "tag"
            pretestTag.innerText = "Post-test"
            pretestScene.append(pretestTag)

            let count = 0
            for (score of person["pretest"]) {
                const scoreBox = document.createElement('div')
                scoreBox.className = "box"

                const taskNameButton = document.createElement('p')
                taskNameButton.className = "has-text-weight-bold"      
                taskNameButton.innerText = taskNamePretest[count]

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
                pretestScene.append(scoreBox)
                count+=1
            }
        }
    }
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

function tampilanNilaiPemrograman(email) {
    for (person of people) {
        if (person["email"] == email) {
            const pemrogramanTag = document.createElement('span')
            pemrogramanTag.className = "tag"
            pemrogramanTag.innerText = "Pemrograman"
            pemrogramanScene.append(pemrogramanTag)

            let count = 0
            for (score of person["pemrograman"]) {
                const scoreBox = document.createElement('div')
                scoreBox.className = "box"

                const taskNameButton = document.createElement('p')
                taskNameButton.className = "has-text-weight-bold"
                taskNameButton.innerText = taskNamePemrograman[count]

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
                pemrogramanScene.append(scoreBox)
                count+=1
            }
        }
    }
}

function adminDashboard() {
    dashboardScene.innerText = "YOHO"
}

inputButton.addEventListener('click', function () {
    const getInputValue = input.value // email
    const getPassword = password.value

    let countAvailableEmail = 0
    for (person of people) {
        if (person["email"] == getInputValue) { // cek email
            countAvailableEmail += 1
            // delete notification email false
            inputValidation.remove()

            if (person["password"] == getPassword) {// cek password
                // delete notification password false
                passwordValidation.remove()

                // jika admin alihkan ke laman admin
                if (person["role"] == "admin") {
                    adminDashboard()
                    getSubtite.innerText = "Halaman Admin"
                    ValidationAndDeleteLoginForm(true)
                } else {
                    getTitle.innerText = "Hai, " + person.name + "!"
                    getSubtite.innerText = "pertahankan nilai yang sudah baik ya :> semisal masih ada nilai yang masih kurang memuaskan gapapa masih ada waktu untuk belajar lebih giat lagi, semangat terus belajarnya " + person["panggilan"].toLowerCase() + "!"
                    getSubtite.className = "notification is-info is-light"

                    buildDashboard(person)
                    tampilanNilaiPretest(getInputValue)
                    tampilanNilaiPostTest(getInputValue)
                    tampilanNilaiLatihan(getInputValue)
                    tampilanNilaiPemrograman(getInputValue)
                    ValidationAndDeleteLoginForm(true)
                }
            } else {
                console.log("Password yang Anda masukkan salah!")
                passwordValidation.className = "tag is-danger is-light"
                passwordValidation.innerText = "Password yang Anda masukkan salah!"
                ValidationAndDeleteLoginForm(false)
            }
        } else {
            ValidationAndDeleteLoginForm(false)
        }
    }
    // saat tak ada email yang terdaftar
    if (countAvailableEmail == 0) {
        console.log("Email yang anda masukkan tidak terdaftar!")
        inputValidation.className = "tag is-danger is-light"
        inputValidation.innerText = "Email yang anda masukkan tidak terdaftar!"
    }
})