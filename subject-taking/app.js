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

let myArray = []
recursive(subjectPrequisite, "Proyek Perangkat Lunak", myArray)
console.log(myArray)