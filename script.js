// document.querySelector('.message').textContent = '🥳 Correct Number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 20;

let secretNmber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

// function used

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}

const displayNumber = function(number){
    document.querySelector('.number').textContent = number
}

// Main Logic

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('⛔ No Number!!');
    }
    else if(guess === secretNmber){
        displayMessage('🥳 Correct Number');
        displayNumber(secretNmber)
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
        }
    }
    else if(guess !== secretNmber){
        if(score > 1){
            displayMessage(guess > secretNmber? '📈 Too High' : '📉 Too Low')
            score--;
            displayScore(score)
        }
        else{
            displayMessage('💥Sorry you lost the game')
            displayScore(0);
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNmber = Math.trunc(Math.random()*20) + 1;

    displayMessage('Start guessing...')
    displayScore(score)
    displayNumber('?')
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})