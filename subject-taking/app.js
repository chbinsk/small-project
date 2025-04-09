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
    "MPK Agama",
    "MPK Bahasa Inggris",
    "Pengantar Ekonomi 1",
    "Matematika Dasar untuk Ekonomi dan Bisnis",
    "Pengantar Bisnis",
    "Teknik Penulisan Akademik dan Pengantar Komunikasi Bisnis",
    "Statistika Ekonomi dan Bisnis",
    "Literasi dalam Bahasa Inggris",

    // term 2
    "MPK Terintegrasi",
    "Pengantar Ekonomi 2",
    "Pengantar Manajemen",
    "Pengantar Akuntansi",
    "Matematika Keuangan",
    "Koperasi",
    "Metode Analisis Kasus Akuntansi dan Bisnis (MAKAB)",

    // term 3
    "Akuntansi Biaya",
    "Pengantar Manajemen Operasi",
    "Pengantar Manajemen Pemasaran",
    "Sistem Informasi Akuntansi dan Pengendalian Internal (SIAPI)",
    "Mikroekonomi 1",
    "Struktur, Proses, dan Perilaku Organisasi",
    "Akuntansi Keuangan 1",
    "Manajemen Keuangan",

    // term 4
    "Pengauditan dan Asuransi 1",
    "Akuntansi Manajemen (AM)",
    "Transformasi Digital untuk Bisnis",
    "Hukum dan Regulasi Bisnis",
    "Perpajakan 1",
    "Akuntansi Keuangan 2",
    "Dasar-dasar Kepemimpinan",
    "Pengantar Kewirausahaan",
    "Manusia Sebagai Pelaku Ekonomi dan Bisnis",

    // term 5
    "Investasi dan Pasar Modal",
    "Pengauditan dan Asuransi 2",
    "Perpajakan 2",
    "Analitik Bisnis",
    "Akuntansi Keuangan Lanjutan",
    "Tata Kelola dan Manajemen Risiko",
    "Etika dan Keberlanjutan",

    // term 6
    "Strategi dan Manajemen Kinerja Organisasi",
    "Analisis dan Pelaporan Keuangan",
    "Bisnis Global",

    // term 8
    "Magang Tugas Akhir",
    "Skripsi",
    "Studi Mandiri (plus 1 Mata Kuliah Pilihan Bebas)",

    // mk pilihan
    "Audit Keuangan Negara",
    "Akuntansi Organisasi Nirlaba",
    "Akuntansi Sektor Publik",
    "Akuntansi Syariah",
    "Analisis dan Perancangan Sistem",
    "Analisis Keputusan Bisnis",
    "Audit Sistem Informasi",
    "Manajemen Teknologi Informasi",
    "Perpajakan Internasional",
    "Manajemen Perpajakan",
    "Audit Internal",
    "Audit Investigasi dan Akuntansi Forensik",
    "Transformasi Digital dan Implikasi Akuntansi",
    "Keuangan Perusahaan Lanjutan",
    "Akuntansi Keuangan Lanjutan",
    "Tata Kelola Perusahaan dan Manajemen Risiko",
    "Metode Penelitian Akuntansi",
    "Akuntansi Manajemen Lanjutan",
    "Praktik Akuntansi dan Bisnis Kontemporer",
    "Praktik Audit pada Industri Spesifik",
    "Big Data dan Komputasi Kognitif",
    "Dasar-Dasar Merger dan Akuisisi",
    "Audit dan Analitik",
    "Akuntan dan Kepemimpinan Ekonomi Digital",
    "Dasar-Dasar Restrukturisasi Bisnis",
    "Prinsip-Prinsip Berpikir Kreatif",
    "Akuntansi dan Bisnis Berkelanjutan",
    "Analitik Bisnis Lanjutan",
    "Teori Akuntansi Keuangan",
]

// Objek berisi data dari tiap mata kuliah
const subjectData = {
     // term 1
    "MPK Agama": [
        2,
        "UIGE600004"
    ],
    "MPK Bahasa Inggris": [
        2,
        "UIGE600003"
    ],
    "Pengantar Ekonomi 1": [
        3,
        "ECEE600001"
    ],
    "Matematika Dasar untuk Ekonomi dan Bisnis": [
        3,
        "ECEE600002"
    ],
    "Pengantar Bisnis": [
        2,
        "ECMN600001"
    ],
    "Teknik Penulisan Akademik dan Pengantar Komunikasi Bisnis": [
        2,
        "ECCL600004"
    ],
    "Statistika Ekonomi dan Bisnis": [
        3,
        "ECEE600003"
    ],
    "Literasi dalam Bahasa Inggris": [
        2,
        "ECCL600001"
    ],

    // term 2
    "MPK Terintegrasi": [
        6,
        "UIGE600007"
    ],
    "Pengantar Ekonomi 2": [
        3,
        "ECEE600004"
    ],
    "Pengantar Manajemen": [
        2,
        "ECMN600003"
    ],
    "Pengantar Akuntansi": [
        3,
        "ECAC600001"
    ],
    "Matematika Keuangan": [
        2,
        "ECAC600002"
    ],
    "Koperasi": [
        2,
        "ECCL600003"
    ],
    "Metode Analisis Kasus Akuntansi dan Bisnis (MAKAB)": [
        2,
        "ECAC600003"
    ],

    // term 3
    "Akuntansi Biaya": [
        3,
        "ECAC600004"
    ],
    "Pengantar Manajemen Operasi": [
        2,
        "ECMN600084"
    ],
    "Pengantar Manajemen Pemasaran": [
        2,
        "ECMN600085"
    ],
    "Sistem Informasi Akuntansi dan Pengendalian Internal (SIAPI)": [
        3,
        "ECAC600005"
    ],
    "Mikroekonomi 1": [
        3,
        "ECEE600007"
    ],
    "Struktur, Proses, dan Perilaku Organisasi": [
        2,
        "ECMN600086"
    ],
    "Akuntansi Keuangan 1": [
        3,
        "ECAC600006"
    ],
    "Manajemen Keuangan": [
        3,
        "ECAC600006"
    ],

    // term 4
    "Pengauditan dan Asuransi 1": [
        3,
        "ECAC600007"
    ],
    "Akuntansi Manajemen (AM)": [
        3,
        "ECAC600008"
    ],
    "Transformasi Digital untuk Bisnis": [
        2,
        "ECAC600009"
    ],
    "Hukum dan Regulasi Bisnis": [
        2,
        "ECAC600010"
    ],
    "Perpajakan 1": [
        3,
        "ECAC600011"
    ],
    "Akuntansi Keuangan 2": [
        3,
        "ECAC600012"
    ],
    "Dasar-dasar Kepemimpinan": [
        2,
        "ECCL600006"
    ],
    "Pengantar Kewirausahaan": [
        2,
        "ECCL600002"
    ],
    "Manusia Sebagai Pelaku Ekonomi dan Bisnis": [
        2,
        "ECCL600005"
    ],

    // term 5
    "Investasi dan Pasar Modal": [
        3,
        "ECAC600013"
    ],
    "Pengauditan dan Asuransi 2": [
        3,
        "ECAC600014"
    ],
    "Perpajakan 2": [
        3,
        "ECAC600015"
    ],
    "Analitik Bisnis": [
        3,
        "ECAC600016"
    ],
    "Akuntansi Keuangan Lanjutan": [
        3,
        "ECAC600017"
    ],
    "Tata Kelola dan Manajemen Risiko": [
        3,
        "ECAC600018"
    ],
    "Etika dan Keberlanjutan": [
        3,
        "ECAC600019"
    ],

    // term 6
    "Strategi dan Manajemen Kinerja Organisasi": [
        3,
        "ECAC600020"
    ],
    "Analisis dan Pelaporan Keuangan": [
        3,
        "ECAC600021"
    ],
    "Bisnis Global": [
        2,
        "ECAC600022"
    ],

    // term 8
    "Magang Tugas Akhir": [
        6,
        "ECAC600053"
    ],
    "Skripsi": [
        6,
        "ECAC600052"
    ],
    "Studi Mandiri (plus 1 Mata Kuliah Pilihan Bebas)": [
        6,
        "ECAC600054"
    ],

    // mk pilihan
    "Audit Keuangan Negara": [
        3,
        "ECAU606401"
    ],
    "Akuntansi Organisasi Nirlaba": [
        3,
        "ECAU606102"
    ],
    "Akuntansi Sektor Publik": [
        3,
        "ECAU606101"
    ],
    "Akuntansi Syariah": [
        3,
        "ECAU605101"
    ],
    "Analisis dan Perancangan Sistem": [
        3,
        "ECAU607301"
    ],
    "Analisis Keputusan Bisnis": [
        3,
        "ECAU609102"
    ],
    "Audit Sistem Informasi": [
        3,
        "ECAU604201"
    ],
    "Manajemen Teknologi Informasi": [
        3,
        "ECAU607302"
    ],
    "Perpajakan Internasional": [
        3,
        "ECAU603203"
    ],
    "Manajemen Perpajakan": [
        3,
        "ECAU603203"
    ],
    "Audit Internal": [
        3,
        "ECAU604303"
    ],
    "Audit Investigasi dan Akuntansi Forensik": [
        3,
        "ECAU604203"
    ],
    "Transformasi Digital dan Implikasi Akuntansi": [
        3,
        "ECAU607211"
    ],
    "Keuangan Perusahaan Lanjutan": [
        3,
        "ECAU609118"
    ],
    "Akuntansi Keuangan Lanjutan": [
        3,
        "ECAU601313"
    ],
    "Tata Kelola Perusahaan dan Manajemen Risiko": [
        3,
        "ECAU601307"
    ],
    "Metode Penelitian Akuntansi": [
        3,
        "ECAU609106"
    ],
    "Akuntansi Manajemen Lanjutan": [
        3,
        "ECAU607304"
    ],
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
