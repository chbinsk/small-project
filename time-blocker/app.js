const colorSchedule = {
    "MPK Terintegrasi" : "#81b29a",
    "Dasar-Dasar Pemrograman 2" : "#d5bdaf",
    "Pengantar Organisasi Komputer" : "#fad2e1",
    "Kalkulus 2" : "#89c2d9" ,
    "Matematika Diskret 2" : "#f2cc8f",
    "Aljabar Linier" : "#c1d3fe"
}

// day -> hour -> [matkul][minute start, end]
const mySchedule = [
    {
        // sunday
    },
    { // monday
        "10" : [
            ["Matematika Diskret 2"], 
            [0, 59]
        ],
        "11" : [
            ["Matematika Diskret 2"],
            [0, 39]
        ],
        "13" : [
            ["Dasar-Dasar Pemrograman 2"],
            [0, 59]
        ],
        "14" : [
            ["Dasar-Dasar Pemrograman 2"],
            [0, 39]
        ],
        "20" : [
            ["Matematika Diskret 2"],
            [0, 13]
        ]
    },
    { // tuesday
        "8" : [
            ["Kalkulus 2"],
            [0, 59]
        ],
        "9" : [
            ["Kalkulus 2"],
            [0, 39]
        ],
        "10" : [
            ["Aljabar Linier"],
            [0, 59]
        ],
        "11" : [
            ["Aljabar Linier"],
            [0, 39]
        ],
        "15" : [
            ["Pengantar Organisasi Komputer"],
            [0, 59]
        ],
        "16" : [
            ["Pengantar Organisasi Komputer"],
            [0, 39]
        ]
    },
    { // wednesday
        "10" : [
            ["Matematika Diskret 2"],
            [0, 49]
        ],
        "13" : [
            ["Dasar-Dasar Pemrograman 2"],
            [0, 59]
        ],
        "14" : [
            ["Dasar-Dasar Pemrograman 2"],
            [0, 39]
        ],
        "16" : [
            ["Matematika Diskret 2"],
            [0, 49]
        ]
    },
    { // thursday
        "8" : [
            ["Kalkulus 2"],
            [0, 49]
        ]
    }
]

const monthLists = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];
const dayLists = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

// get query html
const dayNowQuery = document.querySelector('#daynow');
const timeNowQuery = document.querySelector('#timenow');
const sectionMain = document.querySelector('#sectionmain')
const sectionRest = document.querySelector('.cont');
const imageMode = document.querySelector('#mode');
const imageSec = document.querySelector('#imagesec');
const textMode = document.querySelector('#centered')
const matkulNowQuery = document.querySelector('#nowmatkul');
const body = document.querySelector('body');

let sectionMainOn = false;
let sectionRestOn = false;

function createSectionMain () {
    sectionMainOn = true;
    sectionRestOn = false;
    // <section class="section is-small" id="sectionmain">
    //     <div class="columns">
    //         <div class="column">
    //             <img id="imagesec">
    //         </div>
    //         <div class="column">
    //             <span align="center" id="nowmatkul" class="content is-large">Get Data...</span>
    //         </div>
    //     </div>
    // </section>
    const sectionMainBuild = document.createElement('section');
    sectionMainBuild.className = "section is-small";
    sectionMainBuild.id = "sectionmain";
    const sectionMainColumns = document.createElement('div');
    sectionMainColumns.className = "columns";
    const sectionMainColumn01 = document.createElement('div');
    sectionMainColumn01.className = "column";
    const sectionMainImg = document.createElement('img');
    sectionMainImg.id = "imagesec";
    const sectionMainColumn02 = document.createElement('div');
    sectionMainColumn02.className = "column";
    const sectionMainSpan = document.createElement('span');
    sectionMainSpan.id = "nowmatkul";
    sectionMainSpan.className = "content is-large";
    sectionMainSpan.aligm = "center";

    sectionMainColumn01.appendChild(sectionMainImg);
    sectionMainColumn02.appendChild(sectionMainSpan);
    sectionMainColumns.appendChild(sectionMainColumn01);
    sectionMainColumns.appendChild(sectionMainColumn02);
    sectionMainBuild.appendChild(sectionMainColumns);
}

function createSectionRest () {
    sectionRestOn = true;
    sectionMainOn = false;
    // <div class="cont">
    //     <img id="mode" style="width:100%;">
    //     <div id="centered"></div>
    // </div>
    const sectionRestBuild = document.createElement('div');
    sectionRestBuild.className = "cont";
    const sectionRestImg = document.createElement('img');
    sectionRestImg.id = "mode";
    sectionRestImg.style = "width:100%;";
    const sectionRestText = document.createElement('div');
    sectionRestText.id = "centered";

    sectionRestBuild.appendChild(sectionRestImg);
    sectionRestBuild.appendChild(sectionRestText);
}

// getting time attributes every 1 second
setInterval(() => {
    const calendar = new Date();
    const yearNow = calendar.getFullYear();
    const monthNow = monthLists[calendar.getMonth()];
    const dateNow = calendar.getDate();
    const dayNow = dayLists[calendar.getDay()];
    const hourNow = calendar.getHours();
    const minuteNow = calendar.getMinutes();
    const secondNow = calendar.getSeconds();
    console.log(`${dayNow}, ${dateNow} ${monthNow} ${yearNow} (${hourNow}:${minuteNow}:${secondNow})`);
    timeNowQuery.innerText = `(${hourNow}:${minuteNow}:${secondNow})`;
    dayNowQuery.innerText = `${dayNow}, ${dateNow} ${monthNow} ${yearNow} `;
    dayNowQuery.append(timeNowQuery);
    

    // monday
    if (dayNow == "Monday") {
        if (hourNow == 16) {
            if (minuteNow == 3) {
                console.log("CHECK SUCCESS!");
            }
        }
    }

    // check updates every 1 second
    const dayIndex = calendar.getDay();
    const hourString = hourNow.toString();
    try {
        const matkulNow = mySchedule[dayIndex][hourString][0][0];
        if ((minuteNow >= mySchedule[dayIndex][hourString][1][0]) && (minuteNow <= mySchedule[dayIndex][hourString][1][1])) {
            if (sectionMainOn == false) {
                sectionRest.remove();
                createSectionMain();
                console.log(matkulNow);
                matkulNowQuery.innerText = `${matkulNow}`;
                body.style.backgroundColor = colorSchedule[matkulNow];
                // sectionMain.remove();
                imageSec.src="images/mode-work.gif";
                imageSec.width=650;
                imageSec.height=325;
            }
        } else {
            // true and false bool
            if (sectionRestOn == false) {
                createSectionRest();
                console.log("Jadwal Kosong :D");
                // sectionMain.remove();
                imageMode.src="images/mode-slow.jpg";
                textMode.innerText="I'm Free Now :D";
            }
        }
    } 
    catch (err) {
        if (sectionRestOn == false) {
            createSectionRest();
            console.log("Jadwal Kosong :D");
            // sectionMain.remove();
            imageMode.src="images/mode-slow.jpg";
            textMode.innerText="I'm Free Now :D";
        }
    }

}, 1000);
