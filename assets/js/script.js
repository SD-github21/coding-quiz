var mainEl = document.querySelector("#page-content");
var instructionsEl = document.querySelector("#instructions"); 
var startQuizEl = document.querySelector("#start-quiz"); 
var quizEl = document.querySelector("#quiz")
var choicesEl = document.querySelector("#choices");
var questionEl = document.querySelector("#question");

var nextEl = document.createElement("button");
                nextEl.className = "choice";
                nextEl.setAttribute("id", "next");

var timerEl = document.querySelector("#timer");



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
console.log(questions);

var quiz = function (id) {
                
                // //set the page to blank
                instructionsEl.innerHTML = "";

                //set the questions to blank
                choicesEl.innerHTML ="";
                questionEl.innerHTML ="";
               
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


                choicesEl.appendChild(choice1El);
                choicesEl.appendChild(choice2El);
                choicesEl.appendChild(choice3El);
                choicesEl.appendChild(choice4El);
                choicesEl.appendChild(nextEl);


                
                // // setting answer choice text
                choice1El.textContent = questions[id].answer[0].choice;
                choice2El.textContent = questions[id].answer[1].choice;
                choice3El.textContent = questions[id].answer[2].choice;
                choice4El.textContent = questions[id].answer[3].choice;
                nextEl.textContent = "Next";
              
 
                // Deduct points for timer when an answer choice is wrong
                choice1El.addEventListener("click", () => {
                        if (questions[id].correct === choice1El.textContent) {
                             timeLeft = timeLeft;
                             timerEl.innerHtML = "Timer: " + timeLeft;;
                             console.log(timeLeft);
                        }
                        else {
                             timeLeft = timeLeft - 15;
                             timerEl.innerHtML = "Timer: " + timeLeft;;
                             console.log(timeLeft);
                                
                        }});
                
                choice2El.addEventListener("click", () => {
                        if (questions[id].correct === choice2El.textContent) {
                            timeLeft = timeLeft;
                            timerEl.innerHtML = "Timer: " + timeLeft;;
                            console.log(timeLeft);
                                }
                                else {
                                     timeLeft = timeLeft - 15;
                                     timerEl.innerHtML = "Timer: " + timeLeft;;
                                     console.log(timeLeft);
                                        
                                }})

                choice3El.addEventListener("click", () => {
                        if (questions[id].correct === choice3El.textContent) {
                             timeLeft = timeLeft;
                             timerEl.innerHtML = "Timer: " + timeLeft;;
                             console.log(timeLeft);
                        }
                        else {
                             timeLeft = timeLeft - 15;
                             timerEl.innerHtML = "Timer: " + timeLeft;;
                             console.log(timeLeft);
                                
                        }})

                choice4El.addEventListener("click", () => {
                        if (questions[id].correct === choice4El.textContent) {
                             timeLeft = timeLeft;
                             timerEl.innerHtML = "Timer: " + timeLeft;;
                             console.log(timeLeft);
                        }
                        else {
                             timeLeft = timeLeft - 15;
                             timerEl.innerHtML = "Timer: " + timeLeft;;
                             console.log(timeLeft);
                                
                        }})             
                                      
                
        };

var timeLeft=100;
        function timer() {
                var timeInterval = setInterval(function () {
                  //starting at time 75 if the time is > 0 then it will subtract 1 per second
                  if (timeLeft > 1) {
                    timerEl.textContent = "Timer: " + timeLeft;
                    timeLeft--;
                  } 

        
                  else { 
                    timerEl.textContent = '';
                    clearInterval(timeInterval);
                    }
                }, 1000);
              };

        var iterate = function(){
                var id = 0;

                timer();
                quiz(id);
                if (id < questions.length) {
                next.addEventListener("click", function() {
                        id++
                        quiz(id);
                        console.log(id);
                })
                      
                } 
                 
             };


startQuizEl.addEventListener("click", iterate);