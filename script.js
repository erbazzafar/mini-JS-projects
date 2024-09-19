/*
const inputbox = document.getElementById('input-box');
const listContainer = document.getElementById('list');

function addTask() {
    if (inputbox.value === "") {
        alert("YOU MUST WRITE SOMETHING");
    } else {
        // Create a new list item element
        let li = document.createElement("li");

        // Set the text content of the new list item
        li.textContent = inputbox.value;

        // Append the new list item to the list container
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        listContainer.appendChild(span);

        // Clear the input box for the next task
        inputbox.value = "";
    }
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElemet.remove();
    }
}, false); 
*/

const questions = [
    {
        question: "Which is the worst university for CS",
        answers: [
            {text: "FAST", correct: false},
            {text: "UOL", correct: true},
            {text: "UET", correct: false},
            {text: "NUST", correct: false},
        ]   
    },
    // Further questions...
];

const questionElement = document.querySelector(".question");
const answerButton = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let qNo = currentQuestionIndex + 1;
    questionElement.innerHTML = qNo + ". " + currentQuestion.question;

    // Clear previous answers
    answerButton.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        // Create a new button for each answer
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
        // Add event listener to handle answer selection
        button.addEventListener('click', () => handleAnswerSelection(answer));

        // Append each button to the answerButton container
        answerButton.appendChild(button);
    });
}

function handleAnswerSelection(answer) {
    if (answer.correct) {
        score++;
    }

    // Move to the next question or show results
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    answerButton.innerHTML = '';
    nextBtn.innerHTML = 'Restart';
    nextBtn.disabled = false;
    nextBtn.addEventListener('click', startQuiz);
}

startQuiz();
