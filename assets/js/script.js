var instructionsEl = document.querySelector("#instructions"); 
var startQuizEl = document.querySelector("#start-quiz"); 
var choicesEl = document.querySelector("#choices");


var questions = [

    { id: 0,
    question: "Commonly used data types DO Not include the following: ",
    answer: [{ choice: "1. strings", correctAnswer: false},
             { choice: "2. booleans", correctAnswer: false},
             { choice: "3. alerts", correctAnswer: true},
             { choice: "4. numbers", correctAnswer: false}
            ]
        },

    { id: 1,
    question: "The condition in an if/else statement is enclosed with______________. ",
    answer: [{ choice: "1. quotes", correctAnswer: false},
            { choice: "2. curly braces", correctAnswer: true},
            { choice: "3. parentheses", correctAnswer: false},
            { choice: "4. square brackets", correctAnswer: false}
            ]
    
        },

     { id: 2,
        question: "Arrays in JavaScript can be used to store __________________________.",
        answer: [{ choice: "1. numbers and strings", correctAnswer: false},
                { choice: "2. other arrays", correctAnswer: false},
                { choice: "3. booleans", correctAnswer: false},
                { choice: "4. all of the above", correctAnswer: true}
                ]
        
        },
    
        { id: 3,
                question: "String values must be enclosed within ____________ when being assigned to variables.",
                answer: [{ choice: "1. commas", correctAnswer: false},
                        { choice: "2. curly braces", correctAnswer: false},
                        { choice: "3. quotes", correctAnswer: true},
                        { choice: "4. parentheses", correctAnswer: false}
                        ]
                
                },
            
        { id: 4,
                question: "A very useful tool used during development and debugging for printing content to the debugger is:  ",
                answer: [{ choice: "1. JavaScript", correctAnswer: false},
                         { choice: "2. terminal/bash", correctAnswer: true},
                         { choice: "3. for loops", correctAnswer: false},
                         { choice: "4. console.log", correctAnswer: false}
                        ]                       
        }                 
];
console.log(questions);
        var quiz = function () {

                // //set the page to blank
                instructionsEl.innerHTML = "";
                

                // setting the question element to a variable
                var question = document.querySelector("#question");
                console.log(question);

                
                console.log(question.textContent = questions[0].question);

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



                // setting answer choices to variables
                var choice1 = document.querySelector("#choice1");
                var choice2 = document.querySelector("#choice2");
                var choice3 = document.querySelector("#choice3");
                var choice4 = document.querySelector("#choice4");
                console.log(choice1);
                console.log(choice2);
                console.log(choice3);
                console.log(choice4);

                // setting answer choice text
                console.log(choice1.textContent = questions[0].answer[0].choice);
                console.log(choice2.textContent = questions[0].answer[1].choice);
                console.log(choice3.textContent = questions[0].answer[2].choice);
                console.log(choice4.textContent = questions[0].answer[3].choice);
              
                var userchoice = "";

                //show user choice for choice1
                timer();

        };

        function timer() {
                var timeLeft = 75;
              
                var timerEl = document.querySelector("#timer");
                console.log(timerEl);
              
                var timeInterval = setInterval(function () {
                  //starting at time 75 if the time is > 0 then it will subtract 1 per second
                  if (timeLeft > 1) {
                    timerEl.textContent = "Timer: " + timeLeft;
                    timeLeft--;
                  } //
                  else { //once it hits 0, it clears the timer, and then also calls displayMessage function, and waits 1000 milliseconds before running the next function
                    timerEl.textContent = '';
                    clearInterval(timeInterval);
                    }
                }, 1000);
              }

startQuizEl.addEventListener("click", quiz)              

