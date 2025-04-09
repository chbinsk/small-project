// Object mata kuliah dengan pre-requisitenya
const subjectPrequisite = {
    // term 1
    "MPK Agama": [],
    "MPK Bahasa Inggris": [],
    "Pengantar Ekonomi 1": [],
    "Matematika Dasar untuk Ekonomi dan Bisnis": [],
    "Pengantar Bisnis": [],
    "Teknik Penulisan Akademik dan Pengantar Komunikasi Bisnis": [],
    "Statistika Ekonomi dan Bisnis": [],
    "Literasi dalam Bahasa Inggris": [],

    // term 2
    "MPK Terintegrasi": [],
    "Pengantar Ekonomi 2": [],
    "Pengantar Manajemen": [],
    "Pengantar Akuntansi": [],
    "Matematika Keuangan": [],
    "Koperasi": [],
    "Metode Analisis Kasus Akuntansi dan Bisnis (MAKAB)": [],

    // term 3
    "Akuntansi Biaya": [],
    "Pengantar Manajemen Operasi": [],
    "Pengantar Manajemen Pemasaran": [],
    "Sistem Informasi Akuntansi dan Pengendalian Internal (SIAPI)": [],
    "Mikroekonomi 1": [],
    "Struktur, Proses, dan Perilaku Organisasi": [],
    "Akuntansi Keuangan 1": [],
    "Manajemen Keuangan": [],

    // term 4
    "Pengauditan dan Asuransi 1": [],
    "Akuntansi Manajemen (AM)": [],
    "Transformasi Digital untuk Bisnis": [],
    "Hukum dan Regulasi Bisnis": [],
    "Perpajakan 1": [],
    "Akuntansi Keuangan 2": [],
    "Dasar-dasar Kepemimpinan": [],
    "Pengantar Kewirausahaan": [],
    "Manusia Sebagai Pelaku Ekonomi dan Bisnis": [],

    // term 5
    "Investasi dan Pasar Modal": [],
    "Pengauditan dan Asuransi 2": [],
    "Perpajakan 2": [],
    "Analitik Bisnis": [],
    "Akuntansi Keuangan Lanjutan": [],
    "Tata Kelola dan Manajemen Risiko": [],
    "Etika dan Keberlanjutan": [],

    // term 6
    "Strategi dan Manajemen Kinerja Organisasi": [],
    "Analisis dan Pelaporan Keuangan": [],
    "Bisnis Global": [],

    // term 8
    "Magang Tugas Akhir": [],
    "Skripsi": [],
    "Studi Mandiri (plus 1 Mata Kuliah Pilihan Bebas)": [],

    // mk pilihan
    "Audit Keuangan Negara": [],
    "Akuntansi Organisasi Nirlaba": [],
    "Akuntansi Sektor Publik": [],
    "Akuntansi Syariah": [],
    "Analisis dan Perancangan Sistem": [],
    "Analisis Keputusan Bisnis": [],
    "Audit Sistem Informasi": [],
    "Manajemen Teknologi Informasi": [],
    "Perpajakan Internasional": [],
    "Manajemen Perpajakan": [],
    "Audit Internal": [],
    "Audit Investigasi dan Akuntansi Forensik": [],
    "Transformasi Digital dan Implikasi Akuntansi": [],
    "Keuangan Perusahaan Lanjutan": [],
    "Akuntansi Keuangan Lanjutan": [],
    "Tata Kelola Perusahaan dan Manajemen Risiko": [],
    "Metode Penelitian Akuntansi": [],
    "Akuntansi Manajemen Lanjutan": [],
    "Praktik Akuntansi dan Bisnis Kontemporer": [],
    "Praktik Audit pada Industri Spesifik": [],
    "Big Data dan Komputasi Kognitif": [],
    "Dasar-Dasar Merger dan Akuisisi": [],
    "Audit dan Analitik": [],
    "Akuntan dan Kepemimpinan Ekonomi Digital": [],
    "Dasar-Dasar Restrukturisasi Bisnis": [],
    "Prinsip-Prinsip Berpikir Kreatif": [],
    "Akuntansi dan Bisnis Berkelanjutan": [],
    "Analitik Bisnis Lanjutan": [],
    "Teori Akuntansi Keuangan": [],
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
        4,
        "CSGE601020"
    ],
    "Pengantar Sistem Digital": [
        4,
        "CSCM601150"
    ],
    "Matematika Diskret 1": [
        3,
        "CSGE601010"
    ],
    "Kalkulus 1": [
        3,
        "CSGE601012"
    ],
    // term 2
    "Dasar-Dasar Pemrograman 2": [
        4,
        "CSGE601021"
    ], 
    "Pengantar Organisasi Komputer": [
        3,
        "CSCM601252"
    ],
    "Matematika Diskret 2": [
        3,
        "CSGE601011"
    ],
    "Kalkulus 2": [
        3,
        "CSCM601213"
    ],
    // term 3
    "Pemrograman Berbasis Platform": [
        4,
        "CSGE602022"
    ],
    "Struktur Data dan Algoritma": [
        4,
        "CSGE602040"
    ],
    "Metodologi Penelitian dan Penulisan Ilmiah": [
        3,
        "CSGE602091"
    ],
    "Sistem Operasi": [
        4,
        "CSCM602055"
    ],
    "Aljabar Linier": [
        3,
        "CSGE602012"
    ],
    // term 4
    "Statistika dan Probabilitas": [
        3,
        "CSGE602013"
    ],
    "Sistem Interaksi": [
        3,
        "CSGE602024"
    ],
    "Pemrograman Lanjut": [
        4,
        "CSCM602223"
    ],
    "Teori Bahasa dan Automata": [
        4,
        "CSCM602241"
    ],
    "Basis Data": [
        4,
        "CSGE602070"
    ],
    // term 5
    "Jaringan Komputer": [
        4,
        "CSCM603154"
    ],
    "Kecerdasan Artifisial dan Sains Data Dasar": [
        4,
        "CSGE603130"
    ],
    "Analisis Numerik": [
        3,
        "CSCM603117"
    ],
    "Desain dan Analisis Algoritma": [
        4,
        "CSCM603142"
    ],
    "Rekayasa Perangkat Lunak": [
        3,
        "CSCM603125"
    ],
    // term 6-8
    "Proyek Perangkat Lunak": [
        6,
        "CSCM603228"
    ],
    "Komputer dan Masyarakat": [
        3,
        "CSGE614093"
    ],
    "Tugas Akhir": [
        6,
        "CSGE604099"
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
        sks.innerText = subjectData[myArray[i]][0] + " SKS"
        const code = document.createElement('span')
        code.className = "tag is-info is-light"
        code.innerText = subjectData[myArray[i]][1]

        boxx.id = myArray[i]
        
        boxx.append(oneSubject)
        boxx.append(sks)
        boxx.append(code)
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
                board.innerText = this.id + " (" + subjectData[this.id][0] + "SKS) - " + subjectData[this.id][1]
            });
        }
    }
    // Klik dari daftar mata kuliah lalu
    const matkulBoxx = document.querySelectorAll('div')
    for (let matkul of matkulBoxx) {
        if (matkul.className == "box") {
            matkul.addEventListener('click', function() {
                printMataKuliah(this.id)
                board.innerText = this.id + " (" + subjectData[this.id][0] + "SKS) - " + subjectData[this.id][1]
            })
        }
    }
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
