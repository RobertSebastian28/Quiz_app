let questions = [
    {
        'image': 'img/mustang.jpg',
        'question': 'Welches Auto siehst du hier ?',
        'answer_1': 'Ein Chevrolet Camaro',
        'answer_2': 'Ein Bentley Continental',
        'answer_3': 'Ein Ford Kuga',
        'answer_4': 'Ein Ford Mustang 500 GT',
        'right_answer': '4'
    },
    {
        'image': 'img/audi.jpg',
        'question': 'Welches Auto siehst du hier ?',
        'answer_1': 'Ein Audi A6',
        'answer_2': 'Ein Mercedes Vito',
        'answer_3': 'Ein Opel Corsa',
        'answer_4': 'Ein Audi R8',
        'right_answer': '4'
    },
    {
        'image': 'img/vw.jpg',
        'question': 'Welches Auto siehst du hier ?',
        'answer_1': 'Ein VW Beatle',
        'answer_2': 'Ein Koenigsegg Regera',
        'answer_3': 'Ein VW Käfer',
        'answer_4': 'Ein Porsche Caymen',
        'right_answer': '3'
    },
    {
        'image': 'img/gtr.jpg',
        'question': 'Welches Auto siehst du hier ?',
        'answer_1': 'Ein Nissan GTR',
        'answer_2': 'Ein Ford Focus',
        'answer_3': 'Ein toyota Supra',
        'answer_4': 'Ein Nissan Skyline 2000',
        'right_answer': '1'
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

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

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
    }
    else {
        document.getElementById(selection).classList.add('bg-danger');
    }
}