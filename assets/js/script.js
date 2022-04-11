// Create main variables to access elements within functions
var mainEl = document.querySelector("#page-content");
var welcomeEl = document.querySelector("#welcome");
var finalScore = document.querySelector("#final-score");
var instructionsEl = document.querySelector("#instructions"); 
var startQuizEl = document.querySelector("#start-quiz"); 
var quizEl = document.querySelector("#quiz")
var choicesEl = document.querySelector("#choices");
var questionEl = document.querySelector("#question");


// create next button and make it accessible outside its function
var nextEl = document.createElement("button");
                nextEl.className = "choice";
                nextEl.setAttribute("id", "next");

var timerEl = document.querySelector("#timer");
var inputEl = document.querySelector("#input-screen");


// Create variable to hold quiz questions
var questions = [

    { id: 0,
        question: "Commonly used data types DO Not include the following: ",
        answer: [{ choice: "1. strings", correctAnswer: false},
             { choice: "2. booleans", correctAnswer: false},
             { choice: "3. alerts", correctAnswer: true},
             { choice: "4. numbers", correctAnswer: false}
            ],
        correct: "3. alerts"
        },

    { id: 1,
        question: "The condition in an if/else statement is enclosed with______________. ",
        answer: [{ choice: "1. quotes", correctAnswer: false},
            { choice: "2. curly braces", correctAnswer: true},
            { choice: "3. parentheses", correctAnswer: false},
            { choice: "4. square brackets", correctAnswer: false}
            ],
        correct: "2. curly braces"
    
        },

     { id: 2,
        question: "Arrays in JavaScript can be used to store __________________________.",
        answer: [{ choice: "1. numbers and strings", correctAnswer: false},
                { choice: "2. other arrays", correctAnswer: false},
                { choice: "3. booleans", correctAnswer: false},
                { choice: "4. all of the above", correctAnswer: true}
                ],
        correct: "4. all of the above"
        
        },
    
        { id: 3,
                question: "String values must be enclosed within ____________ when being assigned to variables.",
                answer: [{ choice: "1. commas", correctAnswer: false},
                        { choice: "2. curly braces", correctAnswer: false},
                        { choice: "3. quotes", correctAnswer: true},
                        { choice: "4. parentheses", correctAnswer: false}
                        ],
                correct: "3. quotes"
                
                },
            
        { id: 4,
                question: "A very useful tool used during development and debugging for printing content to the debugger is:  ",
                answer: [{ choice: "1. JavaScript", correctAnswer: false},
                         { choice: "2. terminal/bash", correctAnswer: false},
                         { choice: "3. for loops", correctAnswer: false},
                         { choice: "4. console.log", correctAnswer: true}
                        ],
                correct: "4. console.log"                        
        }                 
];

        // Create Quiz Function 
        var quiz = function (id) {
                
                // //set the page to blank
                instructionsEl.innerHTML = "";

                //set the questions to blank
                choicesEl.innerHTML ="";
                questionEl.innerHTML ="";

                // create the quiz questions and answer choices               
                questionEl.textContent = questions[id].question;
                
                var choice1El = document.createElement("button");
                choice1El.className = "choice";       
                choice1El.setAttribute("id", "choice1");

                var choice2El = document.createElement("button");
                choice2El.className = "choice";
                choice2El.setAttribute("id", "choice2");

                var choice3El = document.createElement("button");
                choice3El.className = "choice";
                choice3El.setAttribute("id", "choice3");

                var choice4El = document.createElement("button");
                choice4El.className = "choice";
                choice4El.setAttribute("id", "choice4");

                // append buttons to the div
                choicesEl.appendChild(choice1El);
                choicesEl.appendChild(choice2El);
                choicesEl.appendChild(choice3El);
                choicesEl.appendChild(choice4El);
                choicesEl.appendChild(nextEl);
                
                // setting answer choice text
                choice1El.textContent = questions[id].answer[0].choice;
                choice2El.textContent = questions[id].answer[1].choice;
                choice3El.textContent = questions[id].answer[2].choice;
                choice4El.textContent = questions[id].answer[3].choice;
                nextEl.textContent = "Next";            
 
                // deduct points for timer when an answer choice is wrong
                choice1El.addEventListener("click", () => {
                        if (questions[id].correct === choice1El.textContent) {
                             timeLeft = timeLeft;
                             console.log(timeLeft);
                        }  
        
                        else {
                             timeLeft = timeLeft - 15;
                             console.log(timeLeft);
                                
                        }});
                
                choice2El.addEventListener("click", () => {
                        if (questions[id].correct === choice2El.textContent) {
                            timeLeft = timeLeft;
                            console.log(timeLeft);
                                }
                                else {
                                     timeLeft = timeLeft - 15;
                                     console.log(timeLeft);
                                        
                                }});

                choice3El.addEventListener("click", () => {
                        if (questions[id].correct === choice3El.textContent) {
                             timeLeft = timeLeft;
                             console.log(timeLeft);
                        }
                        else {
                             timeLeft = timeLeft - 15;
                             console.log(timeLeft);
                                
                        }});

                choice4El.addEventListener("click", () => {
                        if (questions[id].correct === choice4El.textContent) {
                             timeLeft = timeLeft;
                             console.log(timeLeft);
                        }
        
                        else {
                             timeLeft = timeLeft - 15;
                             console.log(timeLeft);
                                
                        }});   
               
        };
        // End Quiz Function
        
// Set variable for timer to 75
var timeLeft=75;


        // Create the iterate function which will allow the user to interate through quiz questions while also keeping a timer going
        var iterate = function(){

                // set id to 0
                var id = 0;

                // create an interval function which will allow for a timer to run 
                var timeInterval = setInterval(function () {
                        if (timeLeft > 1) {
                          timerEl.textContent = "Timer: " + timeLeft;
                          timeLeft--;
                        } 
                        
                        else { 
                          timerEl.textContent = '';
                          clearInterval(timeInterval);
                          }
                      }, 1000);
                
                // call the quiz function 
                quiz(id);
                
                // create a next button attached to a function that will allow the user to click through questions
                next.addEventListener("click", function () {
                        if (id < questions.length - 1) {
                                id++;
                                quiz(id);
                                console.log(id);
                        }
                        // when quiz is over or time is 0, clear the timer and/or save time left which is the final score to localstorage
                        else if (id >= questions.length - 1 || timeLeft === 0) {
                                timerEl.textContent = "";
                                clearInterval(timeInterval);
                                console.log("Final time =" + timeLeft);
                                localStorage.setItem("Final time", timeLeft);
                                submitInit();                               
                        }
                });               
        };
        // End Iterate function

        // Create Submit Initials function
        var submitInit = function() {

                // clear previous screen with quiz questions and choices
                choicesEl.innerHTML ="";
                questionEl.innerHTML ="";

                // get final score from localStorage 
                localStorage.getItem("Final time", timeLeft);
                timerEl.textContent = "Time: " + timeLeft;

                // create submit initials screen indicating ending of quiz
                var inputText1 = document.createElement("h2");
                inputText1.textContent = "All done!"

                var inputText2 = document.createElement("h3");
                inputText2.textContent = "Your final score is " + timeLeft+".";

                // create an input box to obtain the user's initials
                var inputBox = document.createElement("input");
                inputBox.type = "text";
                inputBox.setAttribute("id", "input");

                var inputLabel = document.createElement("Label");
                inputLabel.setAttribute("for", "input");
                inputLabel.setAttribute("id", "label");
                inputLabel.innerHTML = "Enter initials: ";

                // create a submit button
                var submitButton = document.createElement("button");
                submitButton.className = "btn";
                submitButton.setAttribute("id", "submitBtn");
                submitButton.textContent = "Submit";

                // append all newly created elements to div
                inputEl.appendChild(inputText1);
                inputEl.appendChild(inputText2);
                inputEl.appendChild(inputLabel);
                inputEl.appendChild(inputBox);
                inputEl.appendChild(submitButton);
                
                // add an event listener to submit button to save the initials to local storage and move to final results page
                submitButton.addEventListener("click", function submit () {
                        var value = inputBox.value;
                        console.log(value);
                        localStorage.setItem("initials", value);   
                        finalResults();            
                });

        };
        // End Submit Initials function 

        // Create Final Results function
        var finalResults = function() {
               
                // clear previous submit initials screen 
                inputEl.innerHTML = "" ;
                timerEl.innerHTML ="";
                welcomeEl.innerHTML ="";

                // obtain the high score information from localStorage
                var finalTime = localStorage.getItem("Final time");
                var initials = localStorage.getItem("initials");   

                // create the high scores screen with score display
                var finalText1 = document.createElement("h2");
                finalText1.textContent = "High Scores";

                var finalText2 = document.createElement("p");
                finalText2.textContent = "1. " + initials + " - " + finalTime;

                // append newly create elements to div
                finalScore.appendChild(finalText1);
                finalScore.appendChild(finalText2);             

        };
        // End Final Results function

// Start Quiz by clicking on button on main page
startQuizEl.addEventListener("click", iterate);
