const questions = [
  { q: "What is JavaScript mainly used for?",
     options: ["Database management", "Client-side scripting", "Operating system development", "Word document creation"],
      correct: 1 },
  { q: "What is the correct file extension for JavaScript files?",
     options: [".java", ".js", ".javascript", ".jvs"],
      correct: 1 },
  { q: 'What does console.log("Hello") do?',
     options: ["Draws a picture", "Displays output in the console", "Clears the browser", "Inserts data into a database"],
      correct: 1 },
  { q: "Which is the correct way to declare a variable in JavaScript?",
     options: ["var name;", "int name;", "let name;", "variable name;"],
      correct: 0 },
  { q: "What does the === operator check?",
     options: ["Only value", "Both value and type", "Assignment", "Greater than"],
      correct: 1 },
  { q: "Which is a valid string in JavaScript?",
    options:['"Hello"',"Hello","'Hello'","(Hello)"],
    correct: 0 },
    { q: "Which is the correct way to create an array?",
    options:['var arr="1,2,3";',"var arr=[1,2,3];","var arr={1,2,3};","var arr=(1,2,3);"],
    correct: 1 },
    { q: "Which is the correct syntax to define a function?",
    options:["function myFunc() { }","def myFunc() { }"," func myFunc()"," create function myFunc()"],
    correct: 0 },
    { q: "What does typeof 42 return?",
    options:['"string"','','',''],
    options:['"string"',' "boolean"',' "object"',' "number" '],
    correct: 3 },
    { q: "How many values does a Boolean type have?",
    options:["None","0","1","2"],
    correct: 3 },
    { q: 'What does document.getElementById("id") do?',
    options:["Selects an element by class","Changes CSS style","Selects an element by id","Creates a variable"],
    correct: 2 },
    { q: "What does Math.random() return?",
    options:["A random number between 0 and 1"," At least 1","A negative number","An integer only"],
    correct: 0 },
    { q: "What does NaN mean?",
    options:["Negative and Null","Null and Nothing","Not a Null"," Not a Number"],
    correct: 3 },
    { q: "Which of the following is NOT a JavaScript loop?",
    options:["for","while","repeat","do...while"],
    correct: 2 },
    { q: "Difference between == and ===?",
    options:["== checks value only, === checks value and type","== is strict, === is loose","=== is assignment","Same"],
    correct: 0 },
    { q: "How do you get the length of an array?",
    options:["arr.count","arr.length","arr.len","arr.size()"],
    correct: 1 },
    { q: "How do you write a single-line comment in JavaScript?",
    options:["/ comment","# comment"," ** comment","// comment"],
    correct: 3 },
    { q: 'What does isNaN("123") return?',
    options:["false","true","123","undefined"],
    correct: 0 },
    { q: "What does null represent in JavaScript?",
    options:["undefined","an empty object","a string","a number"],
    correct: 1 },
    { q: "Which is the correct way to create an object?",
    options:[' var obj = (name:"John", age:30);','var obj = [name:"John", age:30];','var obj = {name:"John", age:30};','var obj = name:"John", age:30;'],
    correct: 2 },
    { q: "What does array.push() do?",
    options:["Clears the array","Removes an element","Adds an element to the end","Adds an element to the beginning"],
    correct: 2 },
    { q: 'What does alert("Hi") do?',
    options:["Reloads the page","Logs to the console","Shows an error message","Displays a popup box"],
    correct: 3 },
    { q: "How do you convert a string to uppercase?",
    options:["str.toUpperCase()","str.convertUpper()"," str.makeUpper()","str.upper()"],
    correct: 0 },
    { q: "Which symbol is used for single-line comments in JavaScript?",
    options:["--","#","/**/","//"],
    correct: 3 },
    { q: "Which built-in method joins all elements of an array into a string?",
    options:["push()","join()","merge()","concat()"],
    correct: 1 },
    { q: "Which keyword is used to declare a constant?",
    options:["let","var","constant","const"],
    correct: 3 },
    { q: "What will Boolean(0) return?",
    options:["0","null","false","true"],
    correct: 2 },
    { q: "Which operator assigns a value to a variable?",
    options:["=","==","===",":="],
    correct: 0 },
    { q: "Which company developed JavaScript?",
    options:["Microsoft","Netscape","Sun Microsystems","Oracle"],
    correct: 1 },
    { q: "What is the default value of an uninitialized variable?",
    options:["0","null","underfined","-"],
    correct: 0 },

 ];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let answers = {};
let totalTime = 60; // 10 minutes total
let timer;

function getRandomQuestions() {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
}

function startQuiz() {
  selectedQuestions = getRandomQuestions();
  createTracker();
  showQuestion(currentQuestionIndex);
  startTimer();
}

function createTracker() {
  const tracker = document.getElementById("tracker");
  tracker.innerHTML = "";
  selectedQuestions.forEach((_, i) => {
    const span = document.createElement("span");
    span.textContent = i + 1;
    span.addEventListener("click", () => {
      currentQuestionIndex = i;
      showQuestion(i);
    });
    tracker.appendChild(span);
  });
}

function updateTracker() {
  const tracker = document.getElementById("tracker").children;
  for (let i = 0; i < tracker.length; i++) {
    tracker[i].classList.toggle("answered", answers[i] !== undefined);
  }
}

function showQuestion(index) {
  const q = selectedQuestions[index];
  document.getElementById("question").innerHTML =
    "<div class=question>Q" + (index+1) + ". " + q.q + "</div>";

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  
  const shuffledOptions = q.options
    .map((opt, i) => ({ opt, index: i }))
    .sort(() => Math.random() - 0.5);

  shuffledOptions.forEach((obj, i) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("option-row");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = obj.index; 

    
    const label = document.createElement("label");
    label.textContent = String.fromCharCode(97 + i) + ". " + obj.opt;

    wrapper.appendChild(radio);
    wrapper.appendChild(label);

    
    radio.addEventListener("change", () => {
      answers[currentQuestionIndex] = obj.index;
      updateTracker();
    });

    answersDiv.appendChild(wrapper);

    
    if (answers[currentQuestionIndex] === obj.index) {
      radio.checked = true;
    }
  });

  updateTracker();
}



function saveAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) {
    answers[currentQuestionIndex] = parseInt(selected.value);
  }
}

function startTimer() {
  document.getElementById("timer").textContent = ("Time left: "+formatTime(totalTime));
  timer = setInterval(() => {
    totalTime--;
    document.getElementById("timer").textContent = ("Time left: "+formatTime(totalTime));
    if (totalTime <= 0) {
      clearInterval(timer);
      submitQuiz();
    }
  }, 1000);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return (m+":"+(s < 10 ? "0" : "")+s);
}

function submitQuiz() {
  saveAnswer();
  clearInterval(timer);
  let score = 0;
  selectedQuestions.forEach((q, i) => {
    if (answers[i] === q.correct) score++;
  });

  document.getElementById("quiz-container").classList.add("hidden");
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");

  let grade = "";
let percentage = (score / selectedQuestions.length) * 100;

if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 40) {
    grade = "C";
} else {
    grade = "D";
}

resultDiv.innerHTML = ("<h3>Quiz Finished!</h3><p>Your Score:" +score+ "/ "+selectedQuestions.length+"</p><p>you percent :" +score*10+
    "</p><p>you grade :"+grade+"</p><button id=go-home-btn>Go to Home</button>    <button id=review-btn>Review Answers</button>");

  document.getElementById("review-btn").addEventListener("click", reviewAnswers);


document.getElementById("go-home-btn").addEventListener("click", function() {
  window.location.href = "home.html";
});

document.getElementById("review-btn").addEventListener("click", reviewAnswers);
}


function reviewAnswers() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h3>Review Your Answers</h3>";

  selectedQuestions.forEach((q, i) => {
    const userAns = answers[i];
    const correctAns = q.correct;

    const qDiv = document.createElement("div");
    qDiv.classList.add("review-question");

    qDiv.innerHTML = ("<p><b>Q"+(i + 1)+":</b>" +q.q+"</p>");

    q.options.forEach((opt, idx) => {
      const optDiv = document.createElement("div");
      optDiv.textContent = (String.fromCharCode(97 + idx)+"." +opt);

      if (idx === correctAns) {
        optDiv.style.border = "2px solid green"; 
      }
      if (userAns === idx && userAns !== correctAns) {
        optDiv.style.border = "2px solid red"; 
      }
      qDiv.appendChild(optDiv);
    });

    resultDiv.appendChild(qDiv);
    
  });
   
const homeBtn = document.createElement("button");
homeBtn.textContent = "Go To Home";
homeBtn.style.marginTop = "20px";
homeBtn.addEventListener("click", () => {
  window.location.href = "home.html";  
});
resultDiv.appendChild(homeBtn);

}

document.getElementById("next-btn").addEventListener("click", () => {
  saveAnswer();
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
});

document.getElementById("submit-btn").addEventListener("click", (e) => {
  e.preventDefault();
  submitQuiz();
});

startQuiz();
