# Brain Master Quiz
Brain Master Quiz has a goal of recreating the feeling of playing a classic pub quiz, containing different thematic stages. The player starts answering questions at the first stage and once all of the questions are answered, the player moves on to the next stage, moving this way until the last one. The player starts with three lives. Every wrong question costs one, thus the challenge is to finish the quiz before running out lives.

The website was developed with an emphasis on making it easy to customise questions. Any person with a basic knowledge of javascript can change the number of questions per stage and add new ones, making it their own customized version of the original game. Brain Master Quiz is totally responsive and can be played on both smartphones and tablets, bringing fun everywhere you go.

# Deployment
The web site is deployed using the **GitHub** pages -> [Brain Master Quiz](https://dabronzo.github.io/brain-master-quiz/)

# Table of Content
1. [**UX Development**](#ux-development)
    * [**Strategy**](#strategy)
    * [**Scope**](#scope)
    * [**User Stories**](#user-stories)
    * [**Structure**](#structure)
    * [**Wireframe Skeleton**](#wireframe-skeleton)
    * [**Surface Design and Colours**](#surface-design-and-colours)

2. [**Features**](#2-features)
    * [**Title and Stage Progress Area**](#title-and-stage-progress-area)
    * [**Game Area**](#game-area)
    * [**Buttons**](#buttons)
    * [**Input Area**](#input-area)
    * [**Tutorial**](#tutorial)
    * [**Stage title and question**](#stage-title-and-question)
    * [**Right Answer**](#right-answer)
    * [**Wrong Answer**](#wrong-answer)
    * [**Stage Transfer**](#stage-transfer)
    * [**Player Status**](#player-status)
    * [**Running out of Lives**](#running-out-of-lives)
    * [**The Endgame**](#the-endgame)
    * [**Multiple Choice Area**](#multiple-choice-area)
    * [**Footer**](#footer)

3. [**Tecnologies Used**](#3-tecnologies-used)

4. [**Testing Process**](#4-testing-process)
    * [**During the Development Process**](#during-the-development-process)
    * [**Testing Tools**](#testing-tools)

5. [**Known Bugs**](#5-known-bugs)

6. [**Customizing The Questions**](#6-customizing-the-questions)
    * [**Changing The Questions**](#changing-the-questions)
    * [**Number of questions per Stage**](#number-of-questions-per-stage)

7. [**Development Overview**](#7-development-overview)
    * [**The Set Up**](#the-set-up)
    * [**The Problem**](#the-problem)
    * [**The Fix**](#the-fix)
    * [**The Lesson**](#the-lesson)

8. [**Future Developments**](#8-future-developments)

9. [**Credits**](#9-credits)

10. [**10 Acknowledgments**](#10-acknowledgments)

# UX Development
## Responsive Behaviour
The website has responsive behaviour for different screen sizes: laptops, tablets and smartphones.

![Am I responsive pic](/docs/responsive.png)

### Strategy
Due to the nature of the quiz envolving different themes such as music, movies and geaography attracks persons who like quizzes in general or misses pub-quizzes and due to lockdowns is more difficult to find one near you.

### Our Target Audience:
* People who enjoy quiz with different themes.
* Those who like pop culture and general knowledge.
* People who know a bit of JavaScript and wants to use the quiz format to their own questions.

### Scope
The game is divided in four stages each one contains questions about their respective stage theme. The player starts in the Music stage, after the questions of this stage are finished the website brings the player to the Movies stage and so on for the following Geography and Final Stage.

### User Stories

#### For a Regular Quiz Player
* The player starts the quiz when they’re ready.
* The player can see a tutorial if they want to understand the game progress.
* The player can use a player name or a nickname.
* The player can follow their progress through the stages, seeing their score and the current count of lives.
* The player gets feedback containing a right answer if their answer is wrong.
* The player has the possibility to play the game again.

#### For a User of the Quiz as Template
* A simple way to add customized questions without interfering with the main game logic code.




### Structure
Brain Master Quiz has only one page where the user interacts with the website. The questions are displayed on the game area, and the possible answers are displayed on the buttons at the “multiple choice area”. If the current stage is finished the website display an info and waits for the player to click to move to the next one. If the player runs out lives or the game is finished there is an option to play again, by doing the game begins once again.

![structure flow](/docs/structure_flow.jpg)

#### Wireframe Skeleton
![wireframe skeleton](/docs/quiz_wireframe_small.png)
#### 3.2 Picture Legend 
- #### 1 Stage Icons
- #### 2 Game Area
- #### 3 PLay Again Button
- #### 4 Questions Area
- #### 5 Input Area
- #### 6 Player Status
- #### 7 Multiple Choice Area

### Surface Design and Colours
The website was designed with a minimalistic concept in mind, containing no pictures, only using the icons from **Font Awesome** and **Google** fonts.

####  Palette of Colours Used:
#### Black (Hex #272727) -------  Grey (Hex #747474) -------- Orange ( Hex #ff652f) ------- Yellow (Hex #ffe400) ------- Green (Hex #14a76c)
![Palette of Colours](/docs/palette.png)

#### Secondary Colours User
* For White (Hex #fff).
* Neon like colour (Hex #ff00ff).

# 2 Features

## Title and Stage Progress Area
The mentioned features are located in the header area of the website. The logo is a simple link which brings the user to the page of the stage, the Stage Progress Area is where all the icons of the four stages of the game are being displayed. This feature serves as navigation through the game. The icons were designed to provide clear understanding about which stage the player currently is on and which ones has the player already passed.

![Quiz Header pic](/docs/header_quiz.png)

At the beginning of the game all of the icons appear showing a closed lock. When the player starts the game, the first icon appears to indicate that the stage music has started. The style of the stage icon changes when it is the players current stage. 

![Music stage on](/docs/music_on.png) 
* Music stage icon on 

![Movies stage on](/docs/movies_on.png)
* Movies stage icon on 
* The music icon now has the music note displayed but is not glowing anymore

![Geaography stage on](/docs/geography_on.png)
* Geography stage icon on

![Final stage on](/docs/final_on.png)
* Final stage icon on

## Game Area
This area is where both the information and the questions are displayed for the user. Additionally, it holds some specific buttons: **Play** to start the game, **How to Play** to display a tutorial, **Next** to change the stage and Play Again to play the game again.

![Game Area](/docs/game_area.png)

### Buttons
All the buttons of the game area have a transparent background and a neon pink border, a pseudo class hover and also a cursor change to make it clear that it’s a button and can be clicked.

![Buttons image](/docs/play_button.png)
* Play button with hover style and How to Play normal display

![Next Button](/docs/next_button.png)
* Next button hover effect

![Play Again](/docs/play_again.png)
* Play Again button hover effect

### Input Area
When the page is loaded, a box will appear asking the player to enter the name in order to start playing the game or the player can be directed to the tutorial and start the game later.

![Input area](/docs/input_area.png)

### Tutorial
Simple paragraph explaining the basics of the game

![tutorial](/docs/tutorial.png)

### Stage title and question
TThe stage title holds the name of the stage that the player currently is on and also has the same colour of the respective stage icon. The questions are displayed in white colour to create a contrast with the background in order to provide an easily readable text. Some important words are displayed in different colours to highlight them in the question.

![question sample](/docs/question.png)

### Correct Answer
When a player answers correctly, a green ‘’correct’’ check icon image is displayed.

![right answer](/docs/right_answer.png)

### Wrong Answer
When a player answers wrong, a red ‘’wrong’’ check icon image together with a small text with the correct answer is displayed. 

![wrong answer](/docs/wrong_answer.png)

### Stage Transfer
DA message is displayed to let the player know that the current stage is over and when the player is ready they can move on to the next one, using the **Next** button.

![transfering stage](/docs/stage_transfer.png)

### Player Status
This area holds the player’s information, such as the name, the number of lives (displayed as heart icons) and the current score. The display is updated every time there is a change on lives or score.

![player status](/docs/player_status.png)

### Running out of Lives
The rule of the game is that the player has three lives when the game start and every wrong question will cost one life. If the player has no lives left, the game activates  the ‘’game over’’ and displays a message indicating that the player has lost the game.

![gameover](/docs/gameover.png)

### The Endgame
If the player passes all of the stages without loosing all of the lives, a message appears to congratulate the player and the final score is displayed on the player status. The player also has a possibility to play again.
![endgame](/docs/endgame.png)

## Multiple Choice Area

Every question has four possible answers, which are displayed on the buttons, at the multiple choice area. The buttons have a linear shading on the background and when hovered over, display a pink border. When the game does not require the player to insert an answer, this area is hidden in order to avoid being clicked on and thus, generating bugs on the game progress.

![multple choice buttons](/docs/answer_buttons.png)

## Footer

A simple paragraph is displayed at the bottom of the website as a footer, featuring information about the developer and an external link for the developers **GitHub** profile.

![footer](/docs/footer.png)

# 3 Tecnologies Used

- ### HTML
- ### CSS
- ### JavaScript

# 4 Testing Process

## During the Development Process
TThe website was tested along the changes being made on the website, to check all of the possibles outcomes of the changes. In this process, some adjustments needed to be done. Especially to the input area: it needed to be suitable for players name by avoiding the text to act as ‘’too big’’ and break the style of the page. At some parts of the game, the multiple-choice area becomes hidden to prevent the player from clicking on it when the game does not require it. 

## Testing Tools

- ### Google DevTool Lighthouse
![lighthouse result](/docs/lighthouse.png)

- ### JS Hint
One warning appeared on the JS hint in regards to calling functions within loops. Since that is not an error and the website functionality is not affected by it, the issue will be addressed in the future.

![jshint result](/docs/jshint.png)

- ### W3C Validator for HTML
No issues found, [link to the HTML validation on W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdabronzo.github.io%2Fbrain-master-quiz%2F)

- ### W3C CSS Validator
No issues found, [link to the CSS validation on W3C](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdabronzo.github.io%2Fbrain-master-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- ### Color Contrast Validator
No issues found, [link to the validator](https://color.a11y.com/Contrast/)

# 5 Known Bugs
During the development tests all of the major bugs and issues were addressed and solved, however I think the transition of the text in some parts of the game could have a better tweak to smooth it. The decision of not addressing this was taken due to the nature of the project, its deadlines and the  time available. When the game was tested by my social circle, no one noticed or mentioned anything about it. However, this could be addressed in the future.

# 6 Customizing The Questions
This part was created to give information about how the user can customize the questions to their own needs. More questions can be added and the number of questions per stage can be changed too.

- ## Changing The Questions
All of the game questions are objects, stored in a function called “getQuestionsByType”. This function is called in the games logic to return an array of specific type of questions, in relation to the game stages (music, movies, geography and the final). The question objects have the following attributes: 
- #### Question -> String with the question itself.
- #### Type -> String with the stage that the question belongs to (music, movies, geography and final).
- #### Answers -> Array of Strings with four possible answers for that question.
- #### Right Answer -> String with the correct answer for that question.
So, the new question needs to follow the same format as this example:

{question: "what instrument did <span class='black'>Paul Mccartney</span> play on The Beatles?", type: "music", answers: ["bass", "keyboard", "drums", "banjo"], rightAnswer: "bass" },

- ## Number of questions per Stage
The game logic identifies how many questions the stage has, so if you want the game have six questions per stage for instance, make sure that you have six questions of each type on the getQuestionsByType function.

# 7 Development Overview
- ## The Set Up
When the idea to make the quiz online came to me for the first time, I came up with two personal and yet fundamental rules that I should not break. The first rule would be making a technical decision to avoid using any global variables, the game logic would be entirely structured in functions. The second rule would create a game where someone could easily change the questions: adding more, increasing the number of questions per stage, with minimal or none changes made in regards to the main game logic.
- ## The Problem
Choosing to avoid the global variables, proved to be a challenging task for my existing knowledge of the JavaScript language. My original idea was making one function that asks for such arguments as the players name, lives, score, and the stage. The function would display the questions for the current stage, get the right answer, check the lives, and return the updated information to call the next stage function. However, the event listeners were generating a critical bug. Every time the player would click in a button to answer the question after the first stage, the listener would activate two clicks, which would mess up the game logic, creating a situation where two listener functions were being activated at the same time. I’ve tried to remove the event listeners for the buttons when the stage is over but also the code didn’t act as I expected: only one of the buttons had the listener removed.
- ## The Fix
To address the problem, I needed first to understand why that was happening. After some online search I came across an article that explained how the listeners function work regarding the scope of event listeners and the JavaScript language. Apparently, the listener is an async function that happens in a different scope that the main code. Is only activated when some event happens. If you create one event for different buttons is impossible to remove for all the buttons because they “exist” in this different scope and just when **one** of the buttons is clicked would interact with the script scope.
When I figured this out, I knew that my original idea for the game would not work so I rebuild the entire logic as it is right now. This new version has the main game function (StartGame) that takes as argument the name that the player entered. This function is responsible for the logic of the game and call the other functions to do the different game task. The change of stage now is conducted by auxiliar functions called by the main function.
- ## The Lesson
I guess the big lesson here is how important it is for a developer to troubleshoot problems during the development. It can get really frustrating when your ‘’perfect’’ idea does not work because of an unknown reason, only with debugging and troubleshooting it’s possible to overcome this feeling and make your idea work.

# 8 Future Developments
My main idea for something that can be done in the future is implementing the game as an app for pub quizzes, where it can be used socially - the players could enter the game and play with their phones. The game will make all the players answer, do the calculations, and will send the live result to the host. This way avoids printing papers for the questions and allows a more interactive experience for pub quizzes.

# 9 Credits
All the code in all files HTML, CSS and JavaScript were made by me. However I've used a few external libraries/tools that will be dislcaimed bellow:
- ### [fontawesome.com](https://fontawesome.com/) -> for all the icons.
- ### [Google Fonts](https://fonts.google.com/) -> for the webiste font style.
- ### [Code Institute](https://codeinstitute.net/) -> for the dockerfile, and the student support.
## To address the problems during the development:
- ### [Google Search](https://www.google.com/) -> Good old technik.
- ### [Stack Overflow](https://stackoverflow.com/) -> I've read several post about the listeners and events on JS.
- ### [W3Schools.com](https://www.w3schools.com/) -> Essential for quick consults.

# 10 Acknowledgments
**Special thanks to:**
- My mentor **Brian O'Hare** for the help and guidance.
- My partner for the support and taking some houseduties while I was working on this project
- My mother and stepfather for all the support and believe in me always.
