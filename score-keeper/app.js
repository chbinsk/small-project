const p1Name = document.querySelector('#p1name');
const buttonP1Plus = document.querySelector('#p1plus');
const p1Score = document.querySelector('#p1score');
const p1Board = document.querySelector('#p1board');
const p2Name = document.querySelector('#p2name');
const buttonP2Plus = document.querySelector('#p2plus');
const p2Score = document.querySelector('#p2score');
const p2Board = document.querySelector('#p2board');

const winningScoreSelect = document.querySelector('#playto');
const buttonAdd = document.querySelector('#add');
const buttonReset = document.querySelector('#reset');

// form input before play
p1Name.addEventListener('input', function (e) {
    buttonP1Plus.innerText = `${p1Name.value} + 1`;
    p1Board.innerText = p1Name.value;
});

p2Name.addEventListener('input', function (e) {
    buttonP2Plus.innerText = `${p2Name.value} + 1`;
    p2Board.innerText = p2Name.value;
});

let p1sco = 0;
let p2sco = 0;
let winningScore = 3;
let maxsco = 5;
let isGameOver = false;
let p1win = false;
let p2win = false;

// button effectiveness
buttonP1Plus.addEventListener('click', function (e) {
    if (!isGameOver) {
        p1sco += 1;
        if (p1sco === winningScore) {
            isGameOver = true;
            p1win = true;
        }
        p1Score.innerText = p1sco;
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

buttonP2Plus.addEventListener('click', function (e) {
    if (!isGameOver) {
        p2sco += 1;
        if (p2sco === winningScore) {
            isGameOver = true;
            p2win = true;
        }
        p2Score.innerText = p2sco;
    }
})

buttonReset.addEventListener('click', reset);

function reset() {
    p1sco = 0;
    p2sco = 0;
    p1Score.innerText = p1sco;
    p2Score.innerText = p2sco;
    isGameOver = false;
    p1win = false;
    p2win = false;
}

// menampilkan hasil pertandingan

buttonAdd.addEventListener('click', function(e) {
    e.preventDefault();
    const player1Name = p1Name.value;
    const player2Name = p2Name.value;

    const newHistory = document.createElement('div');
    let pWin = "";

    if (p1sco > p2sco) {
        newHistory.className = "notification is-info is-light";
        pWin = player1Name;
        newHistory.innerText = `${pWin} won the game! ( ${player1Name} ${p1sco} - ${p2sco} ${player2Name} )`;
    } else if (p2sco > p1sco) {
        newHistory.className = "notification is-link is-light";
        pWin = player2Name;
        newHistory.innerText = `${pWin} won the game! ( ${player1Name} ${p1sco} - ${p2sco} ${player2Name} )`;
    } else {
        newHistory.className = "notification is-light";
        newHistory.innerText = `Draw! ( ${player1Name} ${p1sco} - ${p2sco} ${player2Name} )`;
    }

    alllist.append(newHistory)
    pWin = "";
});

