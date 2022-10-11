const questions = [
    {
        question:"Who is your girlfriend?",
        a: 'Fatimah',
        b: 'Suraju',
        c: 'Rekiah',
        d: 'Merlin',
        answer: 'Fatimah',
    },
    {
        question:"How old are you?",
        a: 26,
        b: 52,
        c: 34,
        d: 22,
        answer: '22',
    },
    {
        question:"What is the name of your institution?",
        a: 'Unilorin',
        b: 'Lautech',
        c: 'Unilag',
        d: 'UI',
        answer: 'Unilorin',
    },
    {
        question:"When did Nigeria get independence?",
        a: 'August 21 1960',
        b: 'August 23 1991',
        c: 'October 21 1960',
        d: 'October 1st 1960',
        answer: 'October 1st 1960',
    },
    {
        question:"The capital of Nigeria is?",
        a: 'Lagos',
        b: 'Ibadan',
        c: 'Abuja',
        d: 'Kano',
        answer: 'Abuja',
    },
   
];

let question = document.getElementById('question');
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let currentQuiz = 0;
let btn = document.getElementById('next');
let message =document.querySelector('.message');
let score = 0; 

const loadQuestion = ()=>{

    question.innerHTML = questions[currentQuiz].question;
    a.innerHTML = questions[currentQuiz].a;
    b.innerHTML = questions[currentQuiz].b;
    c.innerHTML = questions[currentQuiz].c;
    d.innerHTML = questions[currentQuiz].d;
}

loadQuestion();

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    currentQuiz++
    loadQuestion();
    // console.log(currentQuiz++)
    if (currentQuiz === questions.length -1){
        btn.innerHTML = "Submit question"
        btn.style.backgroundColor = "red"
        alert('This is your last question');
        btn.disabled = true

        if(currentQuiz === questions.length -1){
            let display = document.querySelector('.quiz-container');
            message.style.display = 'block';
            display.style.display = 'none'
            
        }
    }

})
