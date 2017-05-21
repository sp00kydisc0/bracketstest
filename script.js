var num1;
var num2;
var guess;
var answer;
var response;


$(document).ready(function()  {
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    guess = document.getElementById("inputfield");
    response = document.getElementById("response");
    
    $("#submitbutton").click(function() {
       checkAnswer();
    });
    
    setNumbers();
    
                  });
function setNumbers() {
    num1.innerHTML = Math.floor(Math.random() *10) + 1;
    num2.innerHTML = Math.floor(Math.random() *10) + 1;
    
}

function checkAnswer () {
    var n1 = parseInt(num1.innerHTML);
    var n2 = parseInt(num2.innerHTML);
    answer = n1 * n2
    
    if (parseInt (guess.value) == answer) {
        response.innerHTML = "Fucking god damn it you nailed it my dude, making me proud"; 
        setNumbers();
    } else
        response.innerHTML = "Who taught you math you shitty dumb dick? Try harder next time.";
}