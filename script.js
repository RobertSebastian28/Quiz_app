let questions = [
    {
        'question': 'Welcher dieser Gegenstände wird zum Spinn Fischen verwendet ?',
        'answer_1': 'Ein Kolben',
        'answer_2': 'Ein Dübel',
        'answer_3': 'Ein Hering',
        'answer_4': 'Ein Popper',
        'right_answer': '4'
    },
    {
        'question': 'Wer hat das erste Computer Programm geschrieben ?',
        'answer_1': 'Paris Hilton',
        'answer_2': 'Johannes Gutenberg',
        'answer_3': 'Albert Einstein',
        'answer_4': 'Ada Lovelace',
        'right_answer': '4'
    },
    {
        'question': 'Das Zentrum unserer Milchstraße ...?',
        'answer_1': 'riecht nach Honig',
        'answer_2': 'ist 19000 Lichtjahre von der Erde entfernt',
        'answer_3': 'schmeckt nach Himbeere',
        'answer_4': 'kling nach Vogelgezwitscher',
        'right_answer': '3'
    },
    {
        'question': 'Was entwickelt die NASA seit einigen Jahren ?',
        'answer_1': 'interplanetares Internet',
        'answer_2': 'sauerstofferzeugenden Raketenantrieb',
        'answer_3': 'Tiefschlafkapsel für Reisen zum Jupiter',
        'answer_4': 'Raumschiffe mit extrem dicker Metall verkleidung',
        'right_answer': '1'
    },
];

let currentQuestion = 0;
let rightQuestions = 0;
let success = new Audio('audio/sucess.mp3');
let wrong = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    updateProgress();

    document.getElementById('main-question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}



function answer(selection) {
    let question = questions[currentQuestion];
    console.log(selection);
    let selectedQuestionNumber = selection.slice(-1);

    let IdOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber,question)) {
        rightQuestions++;
        success.play();
        document.getElementById(selection).classList.add('bg-success');
    }
    else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(IdOfRightAnswer).classList.add('bg-success');
        wrong.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber,question) {
    return selectedQuestionNumber == question['right_answer'];
}

// Clean Code für jeden einfach zu verstehen
function nextQuestion() { 

    if (gameIsOver()) {

        showEndScreen();
    }
    else { // Next Question

        updateQuestion();
    }


}

function gameIsOver() {
    return currentQuestion == questions.length - 1;
}

function resetQuestionsButtons() {
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');
}

function repeatGame() {
    currentQuestion = 0;
    rightQuestions = 0;

    document.getElementById('curennt-number').innerHTML = currentQuestion + 1;
    document.getElementById('question-body').style = 'display:none;';
    document.getElementById('card-body').style = '';
    resetQuestionsButtons();
    init();
}

function showEndScreen() {
    document.getElementById('question-body').style = '';
    document.getElementById('question-body').style = 'text-align: center';
    document.getElementById('card-body').style = 'display:none';
    document.getElementById('questions-lenght').innerHTML = questions.length;
    document.getElementById('right-questions').innerHTML = rightQuestions;
}

function updateQuestion() {
    currentQuestion++;

    document.getElementById('curennt-number').innerHTML = currentQuestion + 1;
    resetQuestionsButtons();
    showQuestion();
}

function updateProgress() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);


    document.getElementById('progress').innerHTML = `${percent} %`;
    document.getElementById('progress').style = `width:${percent}%;`;
}
