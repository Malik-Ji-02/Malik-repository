const score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Looses: 0,
    Ties: 0
};

Score();

function playGame(playerMove){
    const computer = pickComputerMove();
    result = '';
    if(playerMove === 'scessior'){
        if (computer == 'rock'){
            result = 'You loose.';
        }else if(computer == 'paper'){
            result = 'You win.';
        }else{
            result = 'Tie.';
        }
    } else if (playerMove === 'paper'){
        if (computer == 'rock'){
            result = 'You win.';
        }else if(computer == 'paper'){
            result = 'Tie.';
        }else{
            result = 'You loose.';
        }
    } else {
        if (computer == 'rock'){
            result = 'Tie.';
        }else if(computer == 'paper'){
            result = 'You loose.';
        }else{
            result = 'You win.'
        }
    }
    
    if (result === 'You win.'){
        score.Wins += 1;
    } else if (result === 'You loose.'){
        score.Looses += 1;
    } else if (result === 'Tie.'){
        score.Ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    
    Move(playerMove, computer);

    Result(result);

    Score();

}

function Move (playerMove, computer) {
    console.log(playerMove);
    const jsmove = document.querySelector('.js-move');
    jsmove.innerHTML = `You - 
    <img class="move-img" src="Images-Icons/${playerMove}-emoji.png">
    <img class="move-img" src="Images-Icons/${computer}-emoji.png">
    - Computer`;
};

function Result(result) {
    const jsresult = document.querySelector('.js-result');
    jsresult.innerHTML = result;
};


function Score () {
    const jsScore = document.querySelector('.js-score');
    jsScore.innerHTML = `Wins: ${score.Wins}, Looses: ${score.Looses}, Ties: ${score.Ties}.`;
};

function pickComputerMove(){
    const chance = Math.random();
    let computer = '';

    if(chance > 0 && chance <= 1/3){
        computer = 'rock';
    } else if(chance > 1/3 && chance <= 2/3){
        computer = 'paper';
    } else{
        computer = 'scessior';
    }

    return computer;
}