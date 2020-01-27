var counter=0;
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
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "title four",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "title five",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
    
];
function setPage() {
    questionHide()
    changeValues()
}
function questionHide() {
    $('#container-questions').hide()
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
}
function quizStart() {
    $('#container-quiz').hide();
    $('#container-questions').show();
}
function isRightAns(a) {
    document.getElementById("ans1").disabled=true;
    document.getElementById("ans2").disabled=true;
    document.getElementById("ans3").disabled=true;
    document.getElementById("ans4").disabled=true;
    if (document.querySelector('input[name="options"]:checked').value == questions[a].answer) {
        document.getElementById("check-correct").innerText="Correct!";
        counter++;
    } else {
        document.getElementById("check-correct").innerText="Incorrect!";
    }
}
function nextQuestion() {
    document.getElementById("ans1").disabled=false;
    document.getElementById("ans2").disabled=false;
    document.getElementById("ans3").disabled=false;
    document.getElementById("ans4").disabled=false;
    document.getElementById("check-correct").innerText="";
    $('input[name=options]').prop('checked', false);
    changeValues()
}