const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');
const navLogo = document.querySelector('#navbarMenu');
// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  
  menu.addEventListener('click', mobileMenu);

  menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homePage = document.querySelector('#homePage');
  const aboutMenu = document.querySelector('#historyPage');
  const servicesMenu = document.querySelector;
  let scrollPos = window.scrollY;
  
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if 
  (window.innerWidth > 960 && scrollPos < 600) {
    homePage.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);



let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
circle.style.left = e.pageX + 'px';
circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);









//select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create the questions
let questions = [
    {
        question : "What was the first Variation on the Steel Drum",
        imgSrc : "lolz.jpeg",
        choiceA : "Tamboo Bamboo",
        choiceB : "Wood sticks",
        choiceC : "Tin can",
        correct : "A"
    },{
        question : "Who created the E-Pan",
        imgSrc : "salmon.png",
        choiceA : "Salmon Cupid",
        choiceB : "Adam Cancer",
        choiceC : "Bruno Sanchez",
        correct : "A"
    },{
        question : "What is Toronto's most famous Steel Orchestra",
        imgSrc : "boy.jpeg",
        choiceA : "ALLSO",
        choiceB : "TASSO",
        choiceC : "LMSDS",
        correct : "B"
    },{
        question : "How does the drum create notes",
        imgSrc : "grooving.jpeg",
        choiceA : "Crafted dents in the drum",
        choiceB : "Using rubber",
        choiceC : "Using bamboo",
        correct : "A"
    },{
        
    }
];

// create some variables for the questions and timer variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// starting quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnswer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green and add to score
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red(does not add to score)
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length); 
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "5.png" : //If score percent is at this value, it will display an image with the percentage
              (scorePerCent >= 60) ? "4.png" :
              (scorePerCent >= 40) ? "3.png" :
              (scorePerCent >= 20) ? "2.png" :
              "1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}



