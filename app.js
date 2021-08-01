var questions = [
    {
        question:'Qual é o Deus principal da Mitologia?',
        choices:['Apolo', 'Hefesto', 'Zeus', 'Ares'],
        correctAnswer: 2
    },
    {
        question:'Quem derrotou a Hidra?',
        choices:['Hércules', 'Hades', 'Poseidon', 'Hera'],
        correctAnswer: 0 
    },
    {
        question:'Qual era a principal função de Apolo?',
        choices:['Carregar o Sol', 'Comandar o céu', 'Carregar a Lua', 'Comandar a terra'],
        correctAnswer: 0
    },
    {
        question:'Onde moravam os Deuses?',
        choices:['No céu', 'No Brasil', 'Monte Olimpo', 'Palácio de Versalhes'],
        correctAnswer: 2
    },
    {
        question:'Quem foi a Deusa do amor?',
        choices:['Medusa', 'Afrodite', 'Atena', 'Hera'],
        correctAnswer: 1
    },
    {
        question:'Quem era o filho de Afrodite?',
        choices:['Ênio', 'Épafo', 'Ersa', 'Eros'],
        correctAnswer: 3
    },
    {
        question:'Quem mutilou Urano?',
        choices:['Orfeu', 'Aquiles', 'Hércules', 'Cronos'],
        correctAnswer: 3
    },
    {
        question:'Os sátiros são servos de que Deus?',
        choices:['Hermes', 'Poseidon', 'Zeus', 'Dionísio'],
        correctAnswer: 3 
    },
    {
        question:'Quem se feriu no tendão?',
        choices:['Perseu', 'Teseu', 'Aquiles', 'Dionísio'],
        correctAnswer: 2
    },
    {
        question:'É a deusa grega da Sabedoria e da Justiça, na cultura romana ganhou o nome de Minerva:',
        choices:['Atena.', 'Medusa.', 'Hera.', 'Afrodite.'],
        correctAnswer: 0
    },
    {
        question:'Poseidon é muito conhecido, inclusive por ser o deus:',
        choices:['do Trovão.', 'dos Mares.', 'da Beleza.', 'da Sabedoria.'],
        correctAnswer: 1
    },
    {
        question:'É uma criatura com cabeça, braços e dorso de um ser humano e com corpo e pernas de cavalo:',
        choices:['Centauro.', 'Quimera.', 'Minotauro.', 'Équidna.'],
        correctAnswer: 0
    },
    {
        question:'Ares, o deus da guerra selvagem e sede de sangue é filho do rei e rainha dos deuses, são eles:',
        choices:['Hermes e Anfitrite.', 'Hermes e Perséfone.', 'Zeus e Hera.', 'Hermes e Afrodite.'],
        correctAnswer: 2
    },
    {
        question:'Afrodite, ou Vênus, é conhecida como sendo a deusa:',
        choices:['do Sol.', 'da agricultura e das estações do ano.', 'da Sabedoria e da Justiça.', 'do Amor e da Beleza.'],
        correctAnswer: 3
    },
    {
        question:'As divindades romanas Júpiter, Netuno e Plutão representam, respectivamente na mitologia grega:',
        choices:['Ares, Apolo e Atena.', 'Zeus, Cronos e Hades.', 'Hermes, Zeus e Poséidon.', 'Apolo, Hesfesto e Hades'],
        correctAnswer: 1
    },
    {
        question:'Todos são um dos dose trabalhos de Hércules, EXCETO:',
        choices:['Leão de Nemeia.', 'Touro de Creta.', 'Hidra de Lerna.', 'Tridente de Poséidon.'],
        correctAnswer: 3
    },
    {
        question: 'Qual personagem era conhecido como "O Esticador"?',
        choices: ['Pandora', 'Epimeteu', 'Procusto', 'Cronos'],
        correctAnswer: 2
    },
    {
        question: 'De acordo a Genealogia de Hesíodo, quais são os quatro primeiros seres a ter vida?',
        choices: ['Caos, Nix, Gaia e Urano', 'Zeus, Cronos, Poseidon e Hades', 'Teseu, Homero, Platão e Sócrates', 'Atena, Prometeu, Afrodite e Caos'],
        correctAnswer: 0
    },
    {
        question: 'No episódio em que o titã Prometeu rouba o fogo sagrado do Olimpo e entrega a humanidade, Zeus o castiga punindo ele a ter seu fígado comido diariamente por qual ave?',
        choices: ['Águia', 'Gaivota', 'Gavião', 'Urubu'],
        correctAnswer: 0
    },
    {
        question: 'No mito da Medusa, qual é o herói grego que mata a górgona?',
        choices: ['Ulisses', 'Perseu', 'Heitor', 'Teseu'],
        correctAnswer: 1 
    },
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function(e){
    displayCurrentQuestion();

    var quizMessage = document.querySelector('.quizMessage');

        quizMessage.style.display = 'none';

    document.querySelector('.nextButton').addEventListener('click', function(){
        
        if(!quizOver){
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

            if (radioBtnsChecked === null){
                quizMessage.innerText = 'Por favor selecione uma resposta';
                quizMessage.style.display = 'block';
            } else {
                console.log(radioBtnsChecked.value);
                quizMessage.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    document.querySelector('.nextButton').innerText = 'Jogar de novo?';
                    quizOver = true;
                 }
                }   
        } else {
            quizOver = false;
            document.querySelector('.nextButton').innerText = 'Próxima questão';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion(){
    console.log('In display current Questions');

    var question = questions[currentQuestion].question;
    var questionClass = document.querySelector('.quizContainer > .question');
    var choiceList = document.querySelector('.quizContainer > .choiceList');
    var numChoices = questions[currentQuestion].choices.length;

    //Set the questionClass text to the current question
    questionClass.innerText = question;

    //Remove all current <li> elements (if any)
    choiceList.innerHTML = '';

    var choice;
    for (i = 0; i < numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        var li = document.createElement('li');
            li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);

    }
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore(){
    document.querySelector('.quizContainer > .result').innerText = 'Acertou: ' + correctAnswers + ' de ' + questions.length;
    document.querySelector('.quizContainer > .result').style.display = 'block';
}

function hideScore(){
    document.querySelector('.result').style.display = 'none';
}
