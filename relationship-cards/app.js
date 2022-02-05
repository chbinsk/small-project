const questions = [
    "Who was your first crush, and what were they like?",
    "Can you describe what your first heartbreak was like?",
    "What was the biggest lesson from your worst breakup?",
    "What's something you used to believe about relationships, but no longer do?",
    "What's something surprising that you were afraid of as a child?",
    "What was your favorite food growing up?",
    "What's your favorite meal now?",
    "What was the first album you ever owned?",
    "How does your life compare to how you imagined it growing up?",
    "What was your dream job when you were a kid?" // 10
];


// console.log(questions[randint]);

const getRandomQuestion = () => {
    let randint = Math.floor((Math.random() * 10));
    const quest = `${questions[randint]}`;
    console.log(quest);
    return quest;
}

const container = document.querySelector('#cont-card');

for (let i=0; i < 10; i++) {
    const card = document.createElement('div');
    card.className = "card-content is-inline-block";
    // card.style.backgroundColor = "grey";
    const content = document.createElement('div');
    content.className = "content";
    const buttonContent = document.createElement('button');
    buttonContent.className = "button";
    buttonContent.innerText = `Card ${i+1}`;
    buttonContent.style.fontWeight = '700';

    const image = document.createElement('img');
    const label = document.createElement('span');
    image.src = "images/card.jpg";
    image.width = 200;
    image.height = 100;
   
    content.appendChild(buttonContent);
    card.appendChild(image);
    card.appendChild(content);
    container.appendChild(card);
}

const contents = document.querySelectorAll('div');
for (let conten of contents) {
    if (conten.className == "card-content is-inline-block") {
        conten.addEventListener('click', openCard);
    }
}

function openCard() {
    this.innerText = getRandomQuestion();
    // async javascript
    timerOn();
    setInterval(() => {
        this.remove();
    }, 10000);
}

function timerOn() {
    let time = 10;
    // async javascript
    const timer = setInterval(() => {
        time -= 1;
        const waktu = document.querySelector('#waktu');
        if (time <= 0) {
            waktu.innerText = "Time Out!"
        } else {
            waktu.innerText = time;
        }
        console.log(time);
    },1000);

    setInterval(() => {
        clearInterval(timer);
    }, 11000);
}

