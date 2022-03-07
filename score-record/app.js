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
        "pemrograman": [10],
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
        "email": "dignasiafahman19@gmail.com",
        "password": "dfa99",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [45, 72],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"],
        "pekerjaan": "https://drive.google.com/drive/folders/1dhM1zLwIM59LveRfgSOASSfyzTyWIbvg?usp=sharing"
    },
    {
        "name": "Falah Naufal Zaki",
        "panggilan": "Falah",
        "email": "falahnzk@gmail.com",
        "password": "fnz98",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [100, 76],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"],
        "pekerjaan": "https://drive.google.com/drive/folders/1uK6SADIAeoZd_3UiDYt1A3fPnMlE5h2g?usp=sharing"
    },
    {
        "name": "Muhammad Raffa Al Ghiffary",
        "panggilan": "Raffa",
        "email": "muhammadraffaal88@gmail.com",
        "password": "mrag97",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [70, 88],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"],
        "pekerjaan": "https://drive.google.com/drive/folders/1Gi_oBB4WFs8vq_Tj1vGz-qMKUbNR5l2W?usp=sharing"
    },
    {
        "name": "Muhammad Ramdhan Yusuf",
        "panggilan": "Ramdhan",
        "email": "ramdhanyusuf73@gmail.com",
        "password": "mry96",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [80, 76],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"],
        "pekerjaan": "https://drive.google.com/drive/folders/1HFinz25rbpGqghpHZE9SW6py2QXYtSRu?usp=sharing"
    },
    {
        "name": "Muhammad Yahya Fatahillah Safiq",
        "panggilan": "Yahya",
        "email": "muhammadsafiq959@gmail.com",
        "password": "myfs95",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [80, 100],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"],
        "pekerjaan": "https://drive.google.com/drive/folders/12gecWdFTw4T4uaBfvjjVWlZtmWfaXvMJ?usp=sharing"
    },
    {
        "name": "Radar Zinggih Kusuma Wibawa",
        "panggilan": "Radar",
        "email": "radarkusuma90@gmail.com",
        "password": "rzkw94",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [40, 72],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"],
        "pekerjaan": "https://drive.google.com/drive/folders/1B8jQUNThArRtq26DQFXEVrLGrm3aKbkw?usp=sharing"
    },
    {
        "name": "Radinka Rafi'ie Achmad Pradipta",
        "panggilan": "Rafi'ie",
        "email": "rafi.radinka@gmail.com",
        "password": "rrap93",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [100, 88],
        "latihan": ["Belum mengumpulkan"],
        "pemrograman": ["Belum ada"],
        "pekerjaan": "https://drive.google.com/drive/folders/1QHIfadpxglcQ_wDhZYcangiFUh82jA8N?usp=sharing"
    },
    {
        "name": "Ririn Muthii'atussolikhah",
        "panggilan": "Ririn",
        "email": "ririnlucky06@gmail.com",
        "password": "rm92",
        "role": "member",
        "pretest": ["Belum ada"],
        "post-test": [85, 24],
        "latihan": [93.33],
        "pemrograman": ["Belum ada"],
        "pekerjaan": "https://drive.google.com/drive/folders/1y_FZhx1t-YxDAPK6PZlucbrypc7hvWNu?usp=sharing"
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


const imageSaka = document.querySelector('#sakaimg')
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
        if (Number.isFinite(index)) {
            sum += index
        }
    }
    if (sum == 0) {
        return "-"
    } else {
        return sum / total
    }
}

function getAllAverageTotal(email) {
    for (person of people) {
        if (person["email"] == email) {
            let pretest = 0
            let postTest = 0
            let latihan = 0
            let pemrograman = 0
            if (Number.isFinite(averageArray(person["pretest"]))) {
                pretest += averageArray(person["pretest"]) 
            }
            if (Number.isFinite(averageArray(person["post-test"]))) {
                postTest += averageArray(person["post-test"]) 
            }
            if (Number.isFinite(averageArray(person["latihan"]))) {
                latihan += averageArray(person["latihan"]) 
            }
            if (Number.isFinite(averageArray(person["pemrograman"]))) {
                pemrograman += averageArray(person["pemrograman"]) 
            }

            return pretest + postTest + latihan + pemrograman
        }
    }
}

function ValidationAndDeleteLoginForm(bool) {
    if (bool == true) {
        imageSaka.remove()
        emailTag.remove()
        passwordTag.remove()

        input.remove()
        password.remove()
        inputButton.remove()
    } else {
        
    }
}

function generateLinks(person) {
    const allLinks = document.querySelector('#allLinks')
    allLinks.className = "box"

    const tagLink = document.createElement('span')
    tagLink.className = "tag"
    tagLink.innerText = "Hasil Tugas Anda"
    const link = document.createElement('a')
    link.href = person["pekerjaan"]
    const buttonLink = document.createElement('button')
    buttonLink.className = "button is-info is-small"
    buttonLink.innerText = "Your Assignments"

    link.append(buttonLink) 
    allLinks.append(tagLink)
    const newLine1 = document.createElement('br')
    allLinks.append(newLine1)
    allLinks.append(link)
    const newLine2 = document.createElement('br')
    allLinks.append(newLine2)

    const tagEmailTo = document.createElement('span')
    tagEmailTo.className = "tag"
    tagEmailTo.innerText = "Kirim Tugas Anda"
    const linkEmailTo = document.createElement('a')
    linkEmailTo.href = "mailto:eugeniusms@gmail.com?subject=Pengumpulan%20Tugas%20-%20" + person["name"] + "&body=<%20Isi%20Nama%20Tugas%20dan%20Upload%20File%20Anda%20>"
    const buttonEmailTo = document.createElement('button')
    buttonEmailTo.className = "button is-info is-small"
    buttonEmailTo.innerText = "Submit Your Assignments"

    const newLine3 = document.createElement('br')
    allLinks.append(newLine3)
    allLinks.append(tagEmailTo)
    const newLine4 = document.createElement('br')
    allLinks.append(newLine4)
    linkEmailTo.append(buttonEmailTo)
    allLinks.append(linkEmailTo)
    const newLine5 = document.createElement('br')
    allLinks.append(newLine5)

    const tagToki = document.createElement('span')
    tagToki.className = "tag"
    tagToki.innerText = "Latihan Pemrograman"
    const linkToki = document.createElement('a')
    linkToki.href = "https://tlx.toki.id/courses/basic"
    const buttonToki = document.createElement('button')
    buttonToki.className = "button is-info is-small"
    buttonToki.innerText = "TLX TOKI"

    const newLine6 = document.createElement('br')
    allLinks.append(newLine6)
    allLinks.append(tagToki)
    const newLine7 = document.createElement('br')
    allLinks.append(newLine7)
    linkToki.append(buttonToki)
    allLinks.append(linkToki)
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
            pretestTag.innerText = "Pretest"
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
                
                if (Number.isFinite(score)) {
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
                
                if (Number.isFinite(score)) {
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

                if (Number.isFinite(score)) {
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

                if (Number.isFinite(score)) {
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

function sortRank(allMember, allScore) { // array
    let allScoreClone = []
    for (score of allScore) {
        allScoreClone.push(score)
    }
    let sortNameRank = []
    let sortResult = allScoreClone.sort(function(a, b){return b-a})

    for (result of sortResult) {
        console.log(allMember[allScore.indexOf(result)])
        sortNameRank.push(allMember[allScore.indexOf(result)])
    }

    console.log(sortNameRank)
    console.log(sortResult)
    return sortNameRank
}

function buildAdminDashboard(sortNameRank) {
    const boxx = document.createElement('div')
    boxx.className = "box"
    console.log(sortNameRank)
    for (nama of sortNameRank) {
        const namaUrut = document.createElement('p')
        namaUrut.innerText = nama
        boxx.append(namaUrut)
    }
    const adminDashboard = document.querySelector('#adminDashboard')
    adminDashboard.append(boxx)
}

function adminDashboard() {
    dashboardScene.innerText = "YOHO"

    let allMember = []
    let allScore = []
    for (person of people) {
        if (person["role"] == "member") {
            allMember.push(person["name"])
            allScore.push(getAllAverageTotal(person["email"])) // test total rerata
        }
    }
    console.log(allMember)
    console.log(allScore)

    let sortNameRank = sortRank(allMember, allScore)
    console.log("anda" + sortNameRank)
    buildAdminDashboard(sortNameRank)
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
                    getSubtite.innerText = "Pertahankan nilai yang sudah baik ya :> semisal masih ada nilai yang masih kurang memuaskan gapapa masih ada waktu untuk belajar lebih giat lagi, semangat terus belajarnya " + person["panggilan"].toLowerCase() + "!"
                    getSubtite.className = "notification is-info is-light"

                    generateLinks(person)
                    buildDashboard(person)
                    tampilanNilaiPretest(getInputValue)
                    tampilanNilaiPostTest(getInputValue)
                    tampilanNilaiLatihan(getInputValue)
                    tampilanNilaiPemrograman(getInputValue)

                    console.log(getAllAverageTotal(getInputValue)) // test total rerata

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

// change isInteger -> isFinite
