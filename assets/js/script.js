// 20 Quiz Questions .. 15 Seconds per Question .. 300s to Complete. (5 min).
const quizArray = [
    {
    question: "What is JavaScript primarily used for",
    answer: "Creating interactive web elements",
    option2: "Styling web pages",
    option3: "Managing databases",
    option4: "Sending emails"
},
{
    question: "Which keyword is used to declare a variable in JavaScript?",
    answer: "all of the above",
    option2: "const",
    option3: "let",
    option4: "var"
},
{
    question:`What does the "DOM" stand for in JavaScript?`,
    answer:"Document Object Model",
    option2:"Display Output Module",
    option3:"Direct Object Manipulation",
    option4:"Document Orientation Method",
},
{
    question:"How do you write a single-line comment in JavaScript?",
    answer:"// Comment goes here",
    option2:"<!-- Comment goes here -->",
    option3:"/* Comment goes here */",
    option4:"** Comment goes here **",
},
{
    question:`What is the correct way to access the first element of an array named "myArray"?`,
    answer:"myArray[0]",
    option2:"myArray[1]",
    option3:"myArray.first()",
    option4:"myArray.first",
},
{
    question:"Which method is used to add an element to the end of an array in JavaScript?",
    answer:"push()",
    option2:"append()",
    option3:"add()",
    option4:"insert()",
},
{
    question:"How do you check if two variables are equal value in JavaScript?",
    answer:"a == b",
    option2:"a === b",
    option3:"a = b",
    option4:"a != b",
},
{
    question:"Which function is used to convert a string to a floating-point number in JavaScript?",
    answer:"parseFloat()",
    option2:"parseInt()",
    option3:"toFloat()",
    option4:"toNumber()",
},
{
    question:`What is the result of the expression "5" + 2 in JavaScript?`,
    answer:`"52"`,
    option2:`"7"`,
    option3:`"2"`,
    option4:"Error",
},
{
    question:`What is the correct way to select an HTML element with the ID "myElement" using JavaScript?`,
    answer:`document.getElementById("myElement")`,
    option2:`getElement("myElement")`,
    option3:`getElementByID("myElement")`,
    option4:`getElementByName("myElement")`,
},
{
    question:`What does the "NaN" value represent in JavaScript?`,
    answer:"Not a Number",
    option2:"Not a Name",
    option3:"Null and Negative",
    option4:"Non-alphabetical",
},
{
    question:"How do you write an if statement in JavaScript?",
    answer:"if (condition) { // code here }",
    option2:"if condition { // code here }",
    option3:"if [condition] then { // code here }",
    option4:"if { // code here } condition",
},
{
    question:`What does the "typeof" operator return in JavaScript?`,
    answer:"The type of a variable",
    option2:"The size of a variable",
    option3:"The value of a variable",
    option4:"The name of a variable",
},
{
    question:"Which method is used to remove the last element from an array in JavaScript?",
    answer:"pop()",
    option2:"remove()",
    option3:"delete()",
    option4:"slice()",
},
{
    question:`What does the "this" keyword refer to in JavaScript?`,
    answer:"The current object",
    option2:"The global object",
    option3:"The previous element",
    option4:"The current function",
},
{
    question:"What is the correct syntax to create a function in JavaScript?",
    answer:"function myFunction() { // code here }",
    option2:"function = myFunction() { // code here }",
    option3:"myFunction() = function { // code here }",
    option4:"create function myFunction() { // code here }",
},
{
    question:"How do you round a number to the nearest integer in JavaScript?",
    answer:"Math.round()",
    option2:"Math.floor()",
    option3:" Math.ceil()",
    option4:"Math.random()",
},
{
    question:"What is the correct way to check if a variable is an array in JavaScript?",
    answer:"myVariable instanceof Array",
    option2:` typeof(myVariable) === "array"`,
    option3:`isTypeOf(myVariable, "array")`,
    option4:"isArray(myVariable)",
},
{
    question:"How do you write a for loop in JavaScript?",
    answer:"for (var i = 0; i < n; i++) { // code here }",
    option2:"for (i = 0; i < n; i++) { // code here }",
    option3:"loop (var i = 0; i < n; i++) { // code here }",
    option4:"for (i = 0; i < n; i++) => { // code here }",
},
{
    question:`What is the result of the expression "5" == 5 in JavaScript?`,
    answer:"true",
    option2:"false",
    option3:"NaN",
    option4:"Error",
}
]

//quick console log function.
function o(nion){
    console.log(nion);
}

//*************** */
// GLOBAL VARIABLES
//*****************

var choiceList = document.querySelector("#choice-list");
var htmlCurrentQuestionTitle = document.querySelector("#currentQuestionTitle");
var startButton = document.querySelector("#start-button");
var skipButton = document.querySelector("#next-button");
var quizLanding = document.querySelector("#quiz-landing");

var scoreDisplay = document.querySelector("#score");
var timerDisplay = document.querySelector("#timer");
var quizForm = document.querySelector("#quiz-form");

var usedIndexArray = [];
var nextQuestion = [];
var answerBlock = [];
optionButton = "";

//Start States

function startQuiz(){
    quizForm.hidden = false;
    quizLanding.hidden = true;
    score = 0;
    timeLeft = 20;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    quizTimer();
    renderQuestion();
}

function finishQuiz(){
    quizForm.hidden = true;
    quizLanding.hidden = false;
    timeLeft = 0;
    usedIndexArray = [];
}

function calculatePoints(){
    //Possible Points Check. Get a count of "Incorrect Choices"
    let remainingChoices = document.querySelectorAll(".wrong-option");
    let scoreModifier = remainingChoices.length;

    // No Wrong.. Give a point
    if (scoreModifier == 0) {
        score++;
    }
    // One Wrong.. 
    else if (scoreModifier == 1) {
        score += 0.75;
    }
    //Last Chance
    else {
        score += 0.50;
    }
}

//*************** */
// FUNCTIONS
//*****************

//Function that gets the question from the quizArray once user presses button
function getQuestion() {
    //clear the previous batch of answers
    choiceList.innerHTML = '';
    //Find a random index that hasn't already been used.  
    let ranIndexNumber = Math.floor(Math.random() * quizArray.length);

    //Check to make sure question hasn't already been asked
    if (usedIndexArray.includes(ranIndexNumber)) {   
        getQuestion();
    }
    //if not, add to the "Don't Ask Again" array and Return Question
    else {
        //add random number to used index array so it wont be asked again
        usedIndexArray.push(ranIndexNumber);
        //grab a question object from the Quiz Array
        nextQuestion = quizArray[ranIndexNumber];
        //turn Question Object into Array
        answerBlock = [nextQuestion.answer, nextQuestion.option2, nextQuestion.option3, nextQuestion.option4,];
        //Shuffle the array to avoid patterns
        answerBlock.sort(() => Math.random() - 0.5);
        return nextQuestion;
    }
}

//Function that unpacks nextQuestion and renders to screen

function renderQuestion(){
    //get the question and answers
    getQuestion();

    //add the question to the h2
    htmlCurrentQuestionTitle.textContent = `${nextQuestion.question}`;

    //for every Answer Option, create and append to the Choice List
    answerBlock.forEach((option) => {
    let optionButton = document.createElement("button");
    optionButton.textContent = option;
    choiceList.appendChild(optionButton);
    optionButton.addEventListener("click", checkAnswer);
    
    
    
    //Cheater Code for Testing. Remove before final push.
    if (optionButton.textContent == nextQuestion.answer) {
        optionButton.style.backgroundColor = "red";
    }
    });


    //Function that checks the answer and apply a score 
    function checkAnswer(){
        //If the selected Answer is right. Calculate score
        if (this.textContent == nextQuestion.answer) {
            calculatePoints();
            scoreDisplay.textContent = score;
            if(usedIndexArray.length == quizArray.length){
                finishQuiz();
            }
            else{
                renderQuestion();
            }
        }
        // If user chooses all wrong answers, no points, skip to next question
        else {
            this.setAttribute("class","wrong-option");
            
        }
    }

    //Allow user to skip questions
    if(usedIndexArray.length == quizArray.length) {
        skipButton.textContent = "Finish Quiz";
        skipButton.removeEventListener("click", renderQuestion);
        skipButton.addEventListener("click",finishQuiz);
    }
    skipButton.addEventListener("click", renderQuestion);
    

}

function quizTimer() {
    var timeInterval = setInterval(function() {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft < 1) {
        finishQuiz();
        clearInterval(timeInterval);
    }
    },1000); 
}


//*************** */
// EVENT LISTERNERS
//*****************
quizForm.hidden = true;
startButton.addEventListener("click", startQuiz);

//*************** */
// USER STORIES I NEED TO WRITE 
//*****************


// need to write a script to set "all of the above" at the bottom... 