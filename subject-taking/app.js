// Object mata kuliah dengan pre-requisitenya
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

// Objek berisi semua mata kuliah yang ada
const allSubject = [
    // term 1
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

// Objek berisi data dari tiap mata kuliah
const subjectData = {
    // term 1
    "Dasar-Dasar Pemrograman 1": [
        4
    ],
    "Pengantar Sistem Digital": [
        4
    ],
    "Matematika Diskret 1": [
        3
    ],
    "Kalkulus 1": [
        3
    ],
    // term 2
    "Dasar-Dasar Pemrograman 2": [
        4
    ], 
    "Pengantar Organisasi Komputer": [
        3
    ],
    "Matematika Diskret 2": [
        3
    ],
    "Kalkulus 2": [
        3
    ],
    // term 3
    "Pemrograman Berbasis Platform": [
        4
    ],
    "Struktur Data dan Algoritma": [
        4
    ],
    "Metodologi Penelitian dan Penulisan Ilmiah": [
        3
    ],
    "Sistem Operasi": [
        4
    ],
    "Aljabar Linier": [
        3
    ],
    // term 4
    "Statistika dan Probabilitas": [
        3
    ],
    "Sistem Interaksi": [
        3
    ],
    "Pemrograman Lanjut": [
        4
    ],
    "Teori Bahasa dan Automata": [
        4
    ],
    "Basis Data": [
        4
    ],
    // term 5
    "Jaringan Komputer": [
        4
    ],
    "Kecerdasan Artifisial dan Sains Data Dasar": [
        4
    ],
    "Analisis Numerik": [
        3
    ],
    "Desain dan Analisis Algoritma": [
        4
    ],
    "Rekayasa Perangkat Lunak": [
        3
    ],
    // term 6-8
    "Proyek Perangkat Lunak": [
        6
    ],
    "Komputer dan Masyarakat": [
        3
    ],
    "Tugas Akhir": [
        6
    ]
}

// Fungsi untuk mengembalikan panjang suatu array
function len(array) {
    return array.length
}

// Fungsi untuk mencari mata kuliah pre-requisite secara rekursif
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

// Fungsi untuk mencari subject sesuai dengan input yang diambil per indexnya
// Kemudian jika ada maka push ke result kembalikan sebagai array
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

// Fungsi print daftar mata kuliah prerequisite (dibawah mata kuliah kelulusan :)
function printMataKuliah(search) {
    let myArray = []
    recursive(subjectPrequisite, search, myArray)
    console.log(myArray)

    // reset isi printList
    printList.innerText = ""
    const need = document.querySelector("#need")
    need.innerText = "Mata kuliah membutuhkan kelulusan :"

    // saat tidak ada mata kuliah pre-requisite
    const notificationForNull = document.querySelector("#divneed")
    
    if (myArray.length == 0) {
        // remove delButton first (reset)
        notificationForNull.className = "notification is-success is-light"
        need.innerText = "Mata kuliah ini tidak membutuhkan kelulusan mata kuliah lain"
    } else {
        notificationForNull.className = "block"
    }

    for (i = 0; i < myArray.length; i++) {
        const boxx = document.createElement('div')
        boxx.className = "box"
        const oneSubject = document.createElement("p")
        oneSubject.innerText = myArray[i] 
        oneSubject.className = "has-text-weight-semibold"
        const sks = document.createElement('span')
        sks.className = "tag is-info"
        sks.innerText = subjectData[myArray[i]] + " SKS"
        
        boxx.append(oneSubject)
        boxx.append(sks)
        printList.append(boxx)
    }
}

// Inisiasi object dari document HTML
const subject= document.querySelector("#subject")
const board = document.querySelector("#board")
const searchButton = document.querySelector("#searchButton")
const printList = document.querySelector("#subjectList")

let myArray = []
// recursive(subjectPrequisite, subject, myArray)
console.log(myArray)

// Interval tiap satu detik, jika tombol dipencet maka ubah warna
// dan jalankan fungsi printMataKuliah() yaitu mata kuliah pre-requisite
setInterval(() => {
    const subjectSearchButton = document.querySelectorAll('span');
    // Untuk setiap tombol yang ada di dalam HTML dan memiliki class "button is-light"
    // Jalankan addEventListener 'click' yang jika diclick maka akan merujuk ke this (objectnya)
    // Untuk mengubah className menjadi "button is-dark", kemudian lakukan printMataKuliah(sesuai id object diclick)
    // Setiap detik setelah klik akan ada reset ulang button ke "button is-light"
    for (let buton of subjectSearchButton) {
        if (buton.className == "tag") {
            // Jika tombol diclick maka jalankan fungsi di bawah
            buton.addEventListener('click', function () {
                console.log(this.id)
                this.className = "tag is-dark"
                // Cetak semua mata kuliah pre-requisite sesuai id dari object
                printMataKuliah(this.id)
                // Reset style tombol
                setInterval(() => {
                    this.className = "tag"
                }, 1000)
                board.innerText = this.id + " (" + subjectData[this.id] + "SKS)"
            });
        }
    }
    // if (subject.value == "") {
    //     printMataKuliah("kosong")
    // }
}, 1000)

// Ketika input dari laman diisi oleh user, maka program akan mencetak board yang ada dalam
// HTML menjadi sesuai apa yang diketik user, kemudian program akan menampilkan data yang 
subject.addEventListener('input', function (e) {
    // Reset isi printList ketika kosong
    if (subject.value == "") {
        printList.innerHTML = ""
        need.innerText = ""
    }
    board.innerText = subject.value
    console.log(searchSubject(subject.value))

    // Inisiasi array searchSubjectList yang merupakan return dari fungsi searchSubject,
    // searchSubject berguna untuk mencari potongan yang terketik pada input untuk dicocokan
    // dengan daftar subject yang didaftarkan di dalam array allSubject
    const searchSubjectList = searchSubject(subject.value)
    // Memilih query dengan id = "searchList" untuk dilakukan penambahan daftar subject yang dipilih
    const searchListHTML = document.querySelector("#searchList")

    // Digunakan sebagai reset searchList untuk setiap pengetikan di input
    searchListHTML.innerText = ""

    // Ketika isi input tidak kosong, maka lakukan penambahan button
    if (subject.value != "") {
        // searchSubjectList merupakan array yang dicocokkan dengan potongan slice input ke allSubject
        for (s of searchSubjectList) {
            // Menginisasi object button baru
            const newChoice = document.createElement("span")
            // Setiap button yang diinisiasi diset stylenya ke "button is-light"
            // Kemudian id dan innerText objek button disesuaikan dengan subject (s)
            newChoice.className = "tag"
            newChoice.id = s
            newChoice.innerText = s;
            // Setelah itu, semuanya ditambahkan ke searchList (daftar button yang di bawah kolom search)
            searchListHTML.append(newChoice);
        }
    }
});

// Ketika tombol search diklik maka jika ada mata kuliah yang sesuai dengan isi input
// Akan diprint setiap mata kuliah pre-requisitenya
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

// error null value show all button