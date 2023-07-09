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
var nextButton = document.querySelector("#nextButton");
var usedIndexArray = [];
var nextQuestion = [];
var answerBlock = [];

//*************** */
// FUNCTIONS
//*****************

//Function that gets the question from the quizArray once user presses button
function getQuestion() {

    //Find a random index that hasn't already been used.  
    var ranIndexNumber = Math.floor(Math.random() * quizArray.length);

    //check to see if the number is in the array already 
    if (usedIndexArray.includes(ranIndexNumber)) {
        getQuestion();
        return;
    }
    //if not, add to the array
    else {
        usedIndexArray.push(ranIndexNumber);
        nextQuestion = quizArray[ranIndexNumber];
        answerBlock = [nextQuestion.answer, nextQuestion.option2, nextQuestion.option3, nextQuestion.option4,]
        return nextQuestion;
    }
}


//Function that unpacks nextQuestion and renders to screen
function displayQuestion(){
    //clear the previous batch of answers
    choiceList.innerHTML = '';

    //get the question and answers
    getQuestion();

    //add the question to the h2
    htmlCurrentQuestionTitle.textContent = `${nextQuestion.question}`;

    //for every Answer Option, create and append to the Choice List
    answerBlock.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    choiceList.appendChild(optionButton);
    });

}


//HTML Injection
nextButton.addEventListener("click", displayQuestion);

//*************** */
// USER STORIES I NEED TO WRITE 
//*****************


// need to write a script to set "all of the above" at the bottom... 