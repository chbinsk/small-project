const subjectPrequisite = {
    // term 1
    "Dasar-Dasar Pemrograman 1": [],
    "Pengantar Sistem Digital": [],
    "Matematika Diskret 1": [],
    "Kalkulus 1": [],
    // term 2
    "Dasar-Dasar Pemrograman 2": [
        "Dasar-Dasar Pemrograman 1"
    ],
    "Pengantar Organisasi Komputer": [
        "Pengantar Sistem Digital"
    ],
    "Matematika Diskret 2": [],
    "Kalkulus 2": [
        "Kalkulus 1"
    ],
    // term 3
    "Pemrograman Berbasis Platform": [
        "Dasar-Dasar Pemrograman 1"
    ],
    "Struktur Data dan Algoritma": [
        "Dasar-Dasar Pemrograman 1"
    ],
    "Metodologi Penelitian dan Penulisan Ilmiah": [],
    "Sistem Operasi": [
        "Pengantar Organisasi Komputer"
    ],
    "Aljabar Linier": [],
    // term 4
    "Statistika dan Probabilitas": [
        "Matematika Diskret 1"
    ],
    "Sistem Interaksi": [
        "Pemrograman Berbasis Platform"
    ],
    "Pemrograman Lanjut": [
        "Pemrograman Berbasis Platform",
        "Dasar-Dasar Pemrograman 2"
    ],
    "Teori Bahasa dan Automata": [
        "Matematika Diskret 1",
        "Matematika Diskret 2"
    ],
    "Basis Data": [
        "Dasar-Dasar Pemrograman 2"
    ],
    // term 5
    "Jaringan Komputer": [
        "Sistem Operasi",
        "Dasar-Dasar Pemrograman 1"
    ],
    "Kecerdasan Artifisial dan Sains Data Dasar": [
        "Aljabar Linier",
        "Statistika dan Probabilitas"
    ],
    "Analisis Numerik": [
        "Aljabar Linier",
        "Kalkulus 2"
    ],
    "Desain dan Analisis Algoritma": [
        "Struktur Data dan Algoritma"
    ],
    "Rekayasa Perangkat Lunak": [
        "Dasar-Dasar Pemrograman 2"
    ],
    // term 6-8
    "Proyek Perangkat Lunak": [
        "Basis Data",
        "Rekayasa Perangkat Lunak"
    ],
    "Komputer dan Masyarakat": [
        "100 SKS"
    ],
    "Tugas Akhir": [
        "114 SKS"
    ]
}

const allSubject = [
    "Dasar-Dasar Pemrograman 1",
    "Pengantar Sistem Digital",
    "Matematika Diskret 1",
    "Kalkulus 1",
    // term 2
    "Dasar-Dasar Pemrograman 2",
    "Pengantar Organisasi Komputer",
    "Matematika Diskret 2",
    "Kalkulus 2",
    // term 3
    "Pemrograman Berbasis Platform",
    "Struktur Data dan Algoritma",
    "Metodologi Penelitian dan Penulisan Ilmiah",
    "Sistem Operasi",
    "Aljabar Linier",
    // term 4
    "Statistika dan Probabilitas",
    "Sistem Interaksi",
    "Pemrograman Lanjut",
    "Teori Bahasa dan Automata",
    "Basis Data",
    // term 5
    "Jaringan Komputer",
    "Kecerdasan Artifisial dan Sains Data Dasar",
    "Analisis Numerik",
    "Desain dan Analisis Algoritma",
    "Rekayasa Perangkat Lunak",
    // term 6-8
    "Proyek Perangkat Lunak",
    "Komputer dan Masyarakat",
    "Tugas Akhir"
]

function len(array) {
    return array.length
}

function recursive(object, search, array) {
    if (len(object[search]) == 0) {
        // do nothing
    } else {
        for (matkul of object[search]) {
            array.push(matkul)
        }
        for (i = 0; i < len(object[search]); i++) {
            recursive(object, object[search][i], array)
        }
    }
}

function searchSubject(search) {
    // search by sequences
    console.log(search)
    const result = []
    const searchSub = search.toLowerCase()
    const searchLength = searchSub.length
    for (matkul of allSubject) {
        const mataKuliah = matkul.toLowerCase()
        if (searchSub == mataKuliah.slice(0, searchLength)) {
            result.push(matkul)
        }
    }
    return result
}

const subject= document.querySelector("#subject")
const board = document.querySelector("#board")
const searchButton = document.querySelector("#searchButton")
const printList = document.querySelector("#subjectList")

let myArray = []
// recursive(subjectPrequisite, subject, myArray)
console.log(myArray)

// tombol pilih matkul search
setInterval(() => {
    const subjectSearchButton = document.querySelectorAll('button');
    for (let buton of subjectSearchButton) {
        if (buton.className == "button is-light") {
            console.log(buton)
            buton.addEventListener('click', function () {
                console.log(this.id)
                this.className = "button is-success"
                printMataKuliah(this.id)
            });
        }
    }
}, 1000)

subject.addEventListener('input', function (e) {
    board.innerText = subject.value;
    console.log(searchSubject(subject.value))

    const searchSubjectList = searchSubject(subject.value)
    const searchListHTML = document.querySelector("#searchList")
    // clear search first every ngetik wkwk
    searchListHTML.innerText = ""

    for (s of searchSubjectList) {
        const newChoice = document.createElement("button")
        newChoice.className = "button is-light"
        newChoice.id = s
        newChoice.innerText = s;
        searchListHTML.append(newChoice);
    }
});

// fungsi print daftar mata kuliah prerequisite
function printMataKuliah(search) {
    let myArray = []
    recursive(subjectPrequisite, search, myArray)
    console.log(myArray)

    // reset isi printList
    printList.innerText = ""
    const need = document.querySelector("#need")
    need.innerText = "Mata kuliah membutuhkan kelulusan :"

    for (i = 0; i < myArray.length; i++) {
        const oneSubject = document.createElement("ul")
        oneSubject.innerText = myArray[i]
        printList.append(oneSubject)
    }
}

searchButton.addEventListener('click', function (e) {
    console.log(subject.value);
    printMataKuliah(subject.value)
})




// bikin fitur search memudahkan click

// hilangkan error tetep ijo
// hilangkan error all keluar saat input kosong lagi
// tambahkan keterangan nama, sks, dan sebagainya
// perbaiki susunan Search  : ... (matkul nama full saat tombol matkul diklik)

// development data
// tambahkan deskripsi mata kuliah (proyek baru)