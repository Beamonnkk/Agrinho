const questions = [
    {
        question: "Qual é o nome do personagem principal da série?",
        answers: [
            "Rick Grimes",
            "Daryl Dixon",
            "Glenn Rhee",
            "Negan"
        ],
        correct: 0
    },
    {
        question: "Qual é o nome do grupo de sobreviventes que lidera Rick Grimes?",
        answers: [
            "Os Salvadores",
            "O Reino",
            "Os Andantes",
            "O Grupo de Alexandria"
        ],
        correct: 3
    },
    {
        question: "Quem é o vilão principal introduzido na sexta temporada?",
        answers: [
            "The Governor",
            "Negan",
            "Alpha",
            "Beta"
        ],
        correct: 1
    },
    {
        question: "Qual é o nome da filha de Rick Grimes?",
        answers: [
            "Judith",
            "Carl",
            "Beth",
            "Andrea"
        ],
        correct: 0
    },
    {
        question: "Qual é o local onde o grupo de Rick se refugia na quinta temporada?",
        answers: [
            "A Fazenda",
            "O Presídio",
            "A Caverna",
            "Terminus"
        ],
        correct: 3
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    let quizHTML = '';
    
    questions.forEach((q, index) => {
        quizHTML += `<div class="question">Pergunta ${index + 1}: ${q.question}</div>`;
        q.answers.forEach((answer, i) => {
            quizHTML += `
                <div class="answer">
                    <input type="radio" name="question${index}" value="${i}" id="q${index}a${i}">
                    <label for="q${index}a${i}">${answer}</label>
                </div>
            `;
        });
    });
    
    quizContainer.innerHTML = quizHTML;
}

function submitQuiz() {
    let score = 0;
    
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        
        if (selectedAnswer) {
            const answerValue = parseInt(selectedAnswer.value, 10);
            if (answerValue === q.correct) {
                score++;
            }
        }
    });
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Você acertou ${score} de ${questions.length} perguntas.`;
}

document.addEventListener('DOMContentLoaded', loadQuiz);
