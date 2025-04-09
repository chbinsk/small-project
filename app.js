const myMiniProject = [
    {
        "name": "Subject Taking FEB UI",
        "buildMonth": "April",
        "buildYear": "2025"
    },
]

const projectByMonth = [
    [
        "January", 
        []
    ],
    [
        "February",
        []
    ],
    [
        "March",
        []
    ],
    [
        "April",
        []
    ],
    [
        "May",
        []
    ],
    [
        "June",
        []
    ],
    [
        "July",
        []
    ],
    [
        "August",
        []
    ],
    [
        "September",
        []
    ],
    [
        "October",
        []
    ],
    [
        "November",
        []
    ],
    [
        "December",
        []
    ]
]

function getLink(project) {
    const partialWord = project.split(" ")
    let link = ""

    for (word of partialWord) {
        link += word.toLowerCase() + "-"
    }
    link = link.slice(0, link.length-1)
    
    // Route to link
    window.location.href = link + "/index.html"
}

const projectList = document.querySelector("#projectList")

// Klasifikasikan subject berdasar bulan build
for (month of projectByMonth) {
    for (project of myMiniProject) {
        if (project.buildMonth == month[0]) {
            month[1].push(project.name)
        }
    }
}

console.log(projectByMonth)

// Print HTML sesuai bulan build
for (month of projectByMonth) {
    console.log(month)
    const monthTag = document.createElement('span')
    monthTag.className = "tag"
    monthTag.innerText = month[0]
    const newLine = document.createElement('br')

    if (month[1].length != 0) {
        // Ketika ada isinya maka tag bulan dibuat
        projectList.append(monthTag)
        projectList.append(newLine)

        for (project of month[1]) {
            const ahref = document.createElement('a')
            ahref.src = project
            const boxx = document.createElement('div')
            boxx.className = "box is-me"
            boxx.innerText = project

            projectList.append(boxx)
        }
    } 
}

setInterval(() => {
    const allMiniProject = document.querySelectorAll('div')

    for (miniProject of allMiniProject) {
        console.log(miniProject)
        if (miniProject.className == "box is-me") {
            miniProject.addEventListener('click', function () {
                console.log("EH")
                getLink(this.innerText)
            });
        }
    }

}, 1000)
