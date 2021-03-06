var counter=0;
var page=1;
var score=0;
var oTime=0;
var qTime=15;

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
    $('#container-highscore').hide();
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
    countupTime()
    $('#container-quiz').hide();
    $('#container-questions').show();
    $('#container-score').show();
}
function isRightAns(a) {
    if (document.querySelector('input[name="options"]:checked').value == questions[a].answer) {
        document.getElementById("check-correct").innerText="Correct!";
        score++;
        qTime+=5;
        document.getElementById("score-text").innerText="Score: "+score+"/5";
        $('#test').hide();
    } else {
        qTime-=5;
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
        $('#container-highscore').show();

        clearInterval(downTimer);
        clearInterval(upTimer);

        document.getElementById("finish-time").innerText="You finished in "+oTime+" seconds with a score of "+score+"/5!"
    }
}
function countdownTime() {
    downTimer = setInterval(function() {
        qTime--;
        if(qTime < 0) {
            $('#container-questions').hide();
            $('#container-timesup').show();
            $('#container-highscore').show();

            clearInterval(downTimer);
            clearInterval(upTimer);

            document.getElementById("ran-out").innerText="Time's up. Your final score is "+score+"/5."
        } else {
            document.getElementById("time-left").innerText="Time Left: "+qTime;
        }
    }, 1000);   
}
function countupTime() {
    upTimer = setInterval(function() {
        oTime++;
        document.getElementById("time-passed").innerText="Time Passed: "+oTime;
    }, 1000);   
}
function storeScores() {
    name=document.getElementById("highscore-text").value;

    localStorage.setItem('user', name);
    localStorage.setItem('score', score);
    localStorage.setItem('time', oTime);

    var storedUser = localStorage.getItem('user');
    var storedScore = localStorage.getItem('score');
    var storedTime = localStorage.getItem('time');

    $('#highscores-list').append("<li>"+'Name: '+storedUser+" | "+'Score: '+storedScore+"/5 | Time: "+storedTime+"</li>");

    document.getElementById("record-submit").innerText = "Your record has been submitted!";
    document.getElementById("highscore-text").disabled = true;
    document.getElementById("store-scores").disabled = true;

    resetVars()
}
function resetVars() {
    counter=0;
    page=1;
    score=0;
    oTime=0;
    qTime=15;
}
function tryAgain() {
    $('#container-over').hide();
    $('#container-timesup').hide();
    $('#container-highscore').hide();
    $('#container-questions').show();

    resetVars()
    changeValues()
    countdownTime()
    countupTime()

    document.getElementById("highscore-text").disabled = false;
    document.getElementById("store-scores").disabled = false;
    document.getElementById("record-submit").innerText = "Enter your name to save your score!";
}
