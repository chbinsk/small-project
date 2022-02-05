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

let randint = Math.floor((Math.random() * 10));
console.log(questions[randint]);

const container = document.querySelector('#container');

for (let i=0; i < 10; i++) {
    const card = document.createElement('div');
    const image = document.createElement('img');
    image.src = "images/card.jpg";
    image.width = 200;
    image.height = 100;

    card.appendChild(image);
    container.appendChild(card);
}