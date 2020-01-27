var counter=0;
var page=1;
var score=0;
var time=60;
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Which of these colors isn't a primary color?",
        choices: ["yellow", "red", "blue", "green"],
        answer: "green"
      },
      {
        title: "These numbers all even except for:",
        choices: ["one", "six", "four", "two"],
        answer: "one"
      },
      {
        title: "Which of these is NOT considered a programming language?",
        choices: ["Java", "HTML", "Python", "C++"],
        answer: "HTML"
      },
];
function setPage() {
    questionHide()
    changeValues()
    document.getElementById("score-text").innerText="Score: "+score+"/5";
}
function questionHide() {
    $('#container-questions').hide();
    $('#container-over').hide();
    $('#container-score').hide();
    $('#container-timesup').hide();
}
function changeValues() {
    document.getElementById("question-text").innerText=questions[counter].title;
    document.getElementById("ans1").value=questions[counter].choices[0];
    document.getElementById("ans2").value=questions[counter].choices[1];
    document.getElementById("ans3").value=questions[counter].choices[2];
    document.getElementById("ans4").value=questions[counter].choices[3];
    document.getElementById("label1").innerText=questions[counter].choices[0];
    document.getElementById("label2").innerText=questions[counter].choices[1];
    document.getElementById("label3").innerText=questions[counter].choices[2];
    document.getElementById("label4").innerText=questions[counter].choices[3];
    document.getElementById("page-number").innerText=page+" of 5";
}
function quizStart() {
    countdownTime()
    $('#container-quiz').hide();
    $('#container-questions').show();
    $('#container-score').show();
}
function isRightAns(a) {
    if (document.querySelector('input[name="options"]:checked').value == questions[a].answer) {
        document.getElementById("check-correct").innerText="Correct!";
        score++;
        document.getElementById("score-text").innerText="Score: "+score+"/5";
        $('#test').hide();
    } else {
        document.getElementById("check-correct").innerText="Incorrect!";
    }
}
function nextQuestion() {
    page++;
    counter++;
    $('#test').show();
    if (counter <= questions.length-1) {
        document.getElementById("check-correct").innerText="";
        $('input[name=options]').prop('checked', false);
        changeValues()
    } else {
        $('#container-questions').hide();
        $('#container-over').show();
        clearInterval(timer);
    }
}
function countdownTime() {
    timer = setInterval(function() {
        time--;
        if(time < 0) {
            $('#container-questions').hide();
            $('#container-timesup').show();
            clearInterval(timer);
        } else {
            document.getElementById("time-left").innerText="Time: "+time;
        }
    }, 1000);   
}