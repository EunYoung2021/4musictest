document.addEventListener("DOMContentLoaded", function(){

    let startB = document.getElementById("start");
    var tutorial = document.getElementById("tutorial");

    startB.addEventListener('click', function(){
        let inputName = document.getElementById('player-name').value;
        if (checkValidName(inputName)){
            startGame(inputName);
        }
        
    });
    tutorial.addEventListener('click', function(){
        displayTutorial();
    });
});

/**
 * Main Function of the Game
 * @param {string of player name} name 
 */
function startGame(name){
    document.getElementById('footer-text').style.marginTop = '8rem';
    document.getElementById('player-status').classList.remove('hidden');
    var score = 0;
    var lives = 3;
    var counter = 0;
    var currentStage = document.querySelector('.selected');
    var allButtons = document.getElementsByClassName('info-answer-box');
    var questionsList = getQuestionByType(currentStage.getAttribute('data-type'));
    var stageTitles = document.getElementById('stage-name');
    var stageIcon = document.querySelector('.music');
    var nextButton = document.getElementById('next');
    var playerName = name;
    var playAgain = document.getElementById('play-again');

    var screen = window.matchMedia("(max-width: 649px)");
    if(screen.matches){
        document.querySelector('.game-area').style.height = '60vh';//64vh
    } else{
        document.querySelector('.game-area').style.height = '63vh';//40vh
    }

    //initial setup for the music stage style
    stageIcon.classList.add('music-on');
    stageIcon.innerHTML = '<i class="fas fa-music"></i>';
    stageTitles.style.visibility = 'visible';
    stageTitles.classList.add('music-title');
    stageTitles.innerHTML = currentStage.getAttribute('data-type');
    //set the  initial player stats for the game
    document.getElementById('player').textContent = playerName;
    document.getElementById('player').style.display = 'none';
    updatePlayerLives(lives);

    //display the first question of music stage
    displayQuestion(questionsList, counter);

    //Listeners
    //restore the game stage when clicked
    playAgain.addEventListener('click', function(){
        score = 0;
        document.getElementById("score").innerHTML = score;
        counter = 0;
        questionsList = getQuestionByType('music');
        lives = 3;
        restetIcons();
        currentStage = document.querySelector('.music');
        currentStage.classList.add('selected');
        updatePlayerLives(lives);
        updateStageIcons();
        playAgain.classList.add('hidden');
        stageTitles.style.visibility = 'visible';
        displayQuestion(questionsList, counter);
    });

    //button to change states
    nextButton.addEventListener('click', function() {
        counter = 0;
        questionsList = updateStageQuestions();
        updateStageIcons();
        displayQuestion(questionsList, counter);
    });
    // multiple choice buttons
    for(let button of allButtons){
        button.addEventListener('click', function(){
            let playerAnswer = false;
            counter ++;
            if(button.innerHTML === questionsList[counter - 1].rightAnswer){
                console.log('Got it Right');
                playerAnswer = true;
                score = scoreSystem(score);
                questionTransfer(counter, playerAnswer, questionsList, lives);

            } else{
                lives --;
                updatePlayerLives(lives);
                questionTransfer(counter, playerAnswer, questionsList, lives);
            }
        });
    }
}

/**
 * takes que score, add 10 and display on html
 * @param {string  of the score} scoreNumb 
 * @returns string number new score
 */
function scoreSystem(scoreNumb){
    var newScore = parseInt(scoreNumb);
    newScore += 10;
    document.getElementById("score").innerHTML = newScore.toString();
    return newScore;
}

/**
 * Restore the stage icons to initial and remove the classes selected
 * and for style of the title stages
 */
function restetIcons(){
    let allStageIcons = document.getElementsByClassName("stage");
    for (let stage of allStageIcons){
        stage.innerHTML = '<i class="fas fa-lock"></i>';
    }
    var title = document.getElementById('stage-name');
    for (let stage of allStageIcons){
        if(stage.classList.contains('selected')){
            let stageType = stage.getAttribute('data-type');
            console.log(stageType);
            stage.classList.remove(`${stageType}-on`);
            stage.classList.remove('selected');
            title.classList.remove(`${stageType}-title`);
        }
    }   
}

/**
 * called when the player runs out lives
 * display a screen when you arre dead and a button to play again
 */
function displayDead(){
    document.querySelector('.multiple-choice').classList.add('hidden');
    document.getElementById('player-status').classList.add('hidden');
    document.getElementById('stage-name').style.visibility = 'hidden';
    document.getElementById('play-again').classList.remove('hidden');
    var textArea = document.getElementById('enter-data');
    textArea.innerHTML = "<p id='quest-para'>Sorry You've Lost the Game</p>";
}
/**
 * take the number of lives of the player and display on the game area
 * @param {the number of lives of the player} lives 
 */
function updatePlayerLives(lives){
    if(document.getElementById('player-status').classList.contains('hidden')){
        // document.getElementById('player-status').classList.remove('hidden');
    }
    document.getElementById('lives').innerHTML = "";
    for (let i=0; i < lives;i++){
        document.getElementById('lives').innerHTML += `<i class="fas fa-heart"></i>`;
    }
}

/**
 * Handle the transfer to the next stage show the Next button and
 * check if the game have reached the end
 */
function stageTransfer() {
    document.getElementById('player-status').classList.remove('hidden');
    var currentStage = document.querySelector('.selected');
    var textArea = document.getElementById('enter-data');
    console.log(currentStage.getAttribute('data-type'));
    textArea.style.width = '50em';
    if (currentStage.getAttribute('data-type') !== "final"){
        document.getElementById('next').classList.remove('hidden');
        textArea.innerHTML = `<p id='quest-para'>The ${currentStage.getAttribute('data-type')} stage is over, click on Next button to go to the following stage</p>`;
    } else {
        textArea.innerHTML = "<p id='quest-para'>Congratulations! You've completed the Game</p>";
        document.getElementById('play-again').classList.remove('hidden');
        document.getElementById('stage-name').style.visibility = 'hidden';
    }
}
/**
 * When called takes the element selected and place as the stage to load
 * update the icons and title for the stage
 */
function updateStageIcons(){
    var stageToLoad = document.querySelector('.selected');
    var title = document.getElementById('stage-name');
    if(stageToLoad.getAttribute('data-type') === 'music'){
        document.querySelector('.music').classList.add('music-on');
        stageToLoad.innerHTML = '<i class="fas fa-music"></i>';
        title.classList.add('music-title');
        title.innerHTML = 'music';
    } else if (stageToLoad.getAttribute('data-type') === 'movies'){
        document.querySelector('.music').classList.remove('music-on');
        stageToLoad.classList.add('movies-on');
        stageToLoad.innerHTML = '<i class="fas fa-film"></i>';
        title.classList.remove('music-title');
        title.classList.add('movies-title');
        title.innerHTML = 'movies';
    } else if (stageToLoad.getAttribute('data-type') === "geography"){
        document.querySelector('.movies').classList.remove('movies-on');
        stageToLoad.classList.add('geography-on');
        stageToLoad.innerHTML = '<i class="fas fa-atlas"></i>';
        title.classList.remove('movies-title');
        title.classList.add('geography-title');
        title.innerHTML = 'geography';
    } else if(stageToLoad.getAttribute('data-type') === "final"){
        document.querySelector('.geography').classList.remove('geography-on');
        stageToLoad.classList.add('final-on');
        stageToLoad.innerHTML = '<i class="fas fa-flag-checkered"></i>';
        title.classList.remove('geography-title');
        title.classList.add('final-title');
        title.innerHTML = 'final';
    }
}
/**
 * Update the class "selected" of the stages and update the questions list
 * of the main game
 * @returns array with the questions of the next stage
 */
function updateStageQuestions(){
    var allStages = document.getElementsByClassName('stage');
    var currStage = document.querySelector('.selected');
    var nextStage;
    currStage.classList.remove('selected');
    if((currStage !== allStages[allStages.length - 1])){
        for(let i=0; i<allStages.length; i++){
            if (allStages[i] === currStage){
                nextStage = allStages[i + 1];
                nextStage.classList.add('selected');
                let nextQuestions = getQuestionByType(nextStage.getAttribute('data-type'));
                return nextQuestions;
            }  
        }
    }
}
/**
 * Display the section between the questions and set a time out to call the next question
 * @param {the current counter} counter 
 * @param {the buttom pressed for the player} playerAnswer 
 * @param {list of the questions} questionsList 
 */
function questionTransfer(counter, playerAnswer, questionsList, lives){
    document.querySelector('.multiple-choice').classList.add('hidden');
    var textArea = document.getElementById('enter-data');
    document.getElementById('player-status').classList.add('hidden');
    if (playerAnswer){
        textArea.style.width = '6em';
        textArea.innerHTML = `<span id="right-check"><i class="far fa-check-circle"></i></span>`;
    } else{
        textArea.innerHTML = `<span id="wrong-check"><i class="far fa-times-circle"></i></span><br><p id="quest-para">The right answer is <span class="black">${questionsList[counter - 1].rightAnswer}</span></p>`;
    }
    setTimeout(function(){
      if(lives !== 0){
        if(counter === questionsList.length){
            stageTransfer();
        } else{
            displayQuestion(questionsList, counter);
        }
      } else{
          displayDead();
      }
    }, 2000);
}

/**
 * Display the questions
 * @param {List of the questions} listQuestions 
 * @param {current coutner for the questions displayed} indx 
 */
function displayQuestion(listQuestions, indx){
    document.querySelector('.multiple-choice').classList.remove('hidden');
    var nextBtn = document.getElementById('next');
    var questArea = document.getElementById('enter-data');
    var btnAnswers = document.getElementsByClassName('info-answer-box');
    if(!nextBtn.classList.contains("hidden")){
        nextBtn.classList.add('hidden');
    }
    questArea.style.width = '50em';
    questArea.style.animation = 'displayAni 1.1s ease-in forwards';
    questArea.innerHTML = `<p id="quest-para">${listQuestions[indx].question}</p>
    <div id="quest-img"><img src="assets/imgs/${listQuestions[indx].img}"></img></div>`;
    //questArea.innerHTML = `<img id="quest-img" src="assets/imgs/${listQuestions[indx].img}" style="width:300px; height:300px;"></img>`;

    var questParagraph = document.getElementById("quest-para");
    questParagraph.style.animation = "displayAni 1s ease-in forwards";
    for(let i=0;i < btnAnswers.length; i++){
        btnAnswers[i].innerHTML = `${listQuestions[indx].answers[i]}`;
    }
    if(document.getElementById('player-status').classList.contains('hidden')){
        document.getElementById('player-status').classList.remove('hidden');
    }
}
/**
 * Simple function that check if the name is valid for the website and send alert in cas is wrong
 * @param {string name} inputName 
 * @returns bool false or true
 */
function checkValidName(inputName){
    if (inputName === ""){
        alert('Please enter a name to play');
        return false;
    } else if (inputName.length > 9){
        alert('Your name can have max of 9 characters');
        return false;
    } else{
        return true;
    }
}

/**
 * Display the tutorial if is called
 */
function displayTutorial(){
    var questArea = document.getElementById('enter-data');
    var textContent =  document.getElementById("quest-para");
    document.getElementById('start').classList.add('play-tutorial');
    document.getElementById('tutorial').style.visibility = 'hidden';
    questArea.style.width = '50em';
    var tutorialHTML = `<p id="quest-para">The has three stages with thematic questions, Music, Movies, Geography and The Final. When you 
                    complete one stage the next one is unlocked. You'll start with three lives <i class="fas fa-heart"></i>, each wrong
                    answer will cost one <i class="fas fa-heart"></i>. Do you think you can pass the final stage?? Good luck!</p>`;
    textContent.innerHTML = tutorialHTML;
}

/**
 * Is where the questions objects are stored
 * when called return the the questions for a specific stage
 * @param {string type of question} type 
 * @returns an array with all questions objects
 */
function getQuestionByType (type){
    var questionArray = [];
    const allQuestions =[
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "music", answers: ["세게", "조금세게", "여리게", "조금여리게"], rightAnswer: "조금여리게", img:"img44.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "music", answers: ["매우세게", "조금세게", "세게", "매우여리게"], rightAnswer: "세게", img:"img22.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "music", answers: ["매우세게", "세게", "여리게", "조금여리게"], rightAnswer: "매우세게", img:"img11.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "music", answers: ["조금세게", "세게", "조금여리게", "여리게"], rightAnswer: "조금세게", img:"img33.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "music", answers: ["조금세게", "매우세게", "여리게", "매우여리게"], rightAnswer: "매우여리게", img:"img66.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "music", answers: ["매우세게", "매우여리게", "여리게", "세게"], rightAnswer: "여리게", img:"img55.png"},
		
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "movies", answers: ["보통빠르게", "느리게", "빠르게", "조금빠르게"], rightAnswer: "빠르게", img:"img2.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "movies", answers: ["조금느리게", "보통빠르게", "빠르게", "조금빠르게"], rightAnswer: "보통빠르게", img:"img4.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "movies", answers: ["매우빠르게", "조금빠르게", "조금느리게", "보통빠르게"], rightAnswer: "조금빠르게", img:"img3.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "movies", answers: ["보통빠르게", "빠르게", "느리게", "아주느리게"], rightAnswer: "느리게", img:"img6.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "movies", answers: ["느리게", "조금빠르게", "조금느리게", "빠르게"], rightAnswer: "조금느리게", img:"img5.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "movies", answers: ["빠르게", "매우빠르게", "느리게", "보통빠르게"], rightAnswer: "매우빠르게", img:"img1.png"},
        {question: "다음 음악기호 뜻은 무엇입니까?", type: "movies", answers: ["아주느리게", "빠르게", "조금빠르게", "보통빠르게"], rightAnswer: "아주느리게", img:"img7.png"},
    ];
    for (let question of allQuestions){
        if (question.type === type){
            questionArray.push(question);
        }
    }
    return questionArray; 
}
