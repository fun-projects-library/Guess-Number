


var secretNumber = Math.floor(Math.random() * 50 + 1);
var checkButton = document.getElementById('button_id');
var guess = document.querySelector('.guess').value; 
let classNum = document.querySelector(".number")

let againButton = document.querySelector(".again")

var score = document.querySelector('.score');
let message = document.querySelector('.message')

let point = 10;
let highScore = document.querySelector(".highscore");
let highPoint = 0;


checkButton.onclick = () => {

    var guess = document.querySelector('.guess').value; 
    var classNum = document.querySelector('.number');

    if(point > 1) {

        if(guess <= 50 && guess >= 1){

            if(guess < secretNumber){
                point--
                score.innerHTML = point
                message.innerHTML = "it is low"
        
                } else if(guess > secretNumber){
                point.innerHTML--
                score.innerHTML = point
                message.innerHTML = "it is high"
        
            } else {
                classNum.innerHTML = secretNumber;
                classNum.style.fontSize = "20px";
                document.body.style.backgroundColor = "yellowgreen";
                message.innerHTML = "you are a winner!";
                checkButton.disabled = true
                if (point > highPoint){
                    highPoint = point;
                    highScore.innerHTML = highPoint;
                    }
                }
            } else {
                alert('enter a valid number')
            }

    } else {
        point--;
        score.innerHTML = point;
        message.innerHTML = " LOST!!!"
        document.body.style.backgroundColor = "red";
        checkButton.disabled = true
        
    }

    

    document.querySelector('.guess').value = "";
    console.log(secretNumber, guess)
};




againButton.onclick = () => {
    point = 10;
    secretNumber = Math.floor(Math.random() * 50 + 1);
    message.innerHTML = "Start guessing..."
    classNum.innerHTML = "?"
    document.body.style.backgroundColor = "#222";
    checkButton.disabled = false;
    score.innerHTML = point;
}

// let reset = document.querySelector(".reset")
// reset.style.marginTop = "150px";

// reset.onclick = () => {
//     highScore.innerHTML = 0;
// }


alert("I got this :)")

