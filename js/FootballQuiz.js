const reviewBtn =document.getElementById('review-btn');
 reviewBtn.style.fontsize="3em";
    reviewBtn.style.fontweight="600";
     reviewBtn.style.marginbottom="10px";
     reviewBtn.style.background="(90deg, #ff3388, #8a2be2)";
     reviewBtn.style.webkitbackgroundclip="text";
     reviewBtn.style.webkittextfillcolor="transparent";
     reviewBtn.style.textshadow= "0 0 10px rgba(184, 51, 255, 0.5)";
const questions = [
  { q: "How many players are there in a football team on the field?", 
    options: ["11 players", "9 players", "7 players", "12 players"],
     correct: 0 
    },
  { q: "When is a goal scored in football?", 
    options: ["When the ball crosses the goal line", "When the ball hits the crossbar", "When the goalkeeper touches it", "When the ball is outside the goal"],
    correct: 0 
  },
  { q: "What is the direct kick at goal called?",
    options: ["Pass", "Shoot", "Dribble", "Cross"],
    correct: 1 
  },
  { q: "What is the name of the goal-scoring area?",
    options: ["Midfield", "Penalty Area", "Corner", "Center Circle"], 
    correct: 1 
  },
  { q: "How long is a standard football match?", 
    options: ["60 minutes", "90 minutes", "80 minutes", "100 minutes"], 
    correct: 1 
  },
  { q: "Which player usually scores goals?", 
    options: ["Defender", "Forward", "Goalkeeper", "Midfielder"], 
    correct: 1 
  },
  { q: "What is deliberate hand contact called?", 
    options: ["Offside", "Handball", "Tackle", "Dribble"], 
    correct: 1 
  },
  { q: "Offside rule means?", 
    options: ["Ball out of play", "Closer to goal than ball & last 2 defenders", "Goalkeeper holding ball", "Throw-in taken"], 
    correct: 1 
  },
  { q: "Where can the goalkeeper use hands?", 
    options: ["Anywhere", "Penalty Area", "Halfway Line", "Opponent's Goal"], 
    correct: 1 },
  { q: "Who is the last line of defense?", 
    options: ["Midfielder", "Forward", "Goalkeeper", "Referee"], 
    correct: 2 
  },
  { q: "What card sends a player off?", 
    options: ["Yellow Card", "Red Card", "Green Card", "Blue Card"], 
    correct: 1 
  },
  { q: "Breaking the rules is called?", 
    options: ["Foul", "Pass", "Offside", "Goal"], 
    correct: 0 
  },
  { q: "Middle field area is called?", 
    options: ["Goal Area", "Midfield", "Corner", "Penalty Spot"], 
    correct: 1 
  },
  { q: "A football group is called?", 
    options: ["Team", "Club", "Squad", "Crew"], 
    correct: 0 
  },
  { q: "Taking the ball from opponent is?", 
    options: ["Kick", "Tackle", "Pass", "Shoot"], 
    correct: 1 
  },
  { q: "Who enforces the rules?", 
    options: ["Coach", "Referee", "Captain", "Fans"], 
    correct: 1 
  },
  { q: "Official ball size?", 
    options: ["Size 3", "Size 4", "Size 5", "Size 6"], 
    correct: 2 
  },
  { q: "Who protects the goal?", 
    options: ["Goalkeeper", "Defender", "Forward", "Midfielder"], 
    correct: 0 
  },
  { q: "FIFA stands for?", 
    options: ["Football International Fair Association", "Fédération Internationale de Football Association", "Football Information Federation Agency", "Federation of International Football Authorities"], 
    correct: 1 
  },
  { q: "What is added time called?", 
    options: ["Extra Time", "Injury Time", "Half Time", "Break Time"], 
    correct: 1 
  },
  { q: "What is the line in the middle called?", 
    options: ["Halfway Line", "Midfield Line", "Center Line", "Kickoff Line"], 
    correct: 0 
  },
  { q: "What is the illegal position called?", 
    options: ["Handball", "Foul", "Offside", "Dribble"], 
    correct: 2 
  },
  { q: "How many players on pitch per team?", 
    options: ["9", "10", "11", "12"], 
    correct: 2 
  },
  { q: "What is a football usually made of?", 
    options: ["Leather / Synthetic Leather", "Plastic", "Rubber", "Wood"], 
    correct: 0 
  },
  { q: "What is a direct goal chance from a foul?", 
    options: ["Free Kick", "Penalty", "Throw-in", "Corner Kick"], 
    correct: 1 
  },
  { q: "Who controls the midfield?", 
    options: ["Forward", "Midfielder", "Goalkeeper", "Defender"], 
    correct: 1 
  },
  { q: "Throw from the sideline is called?", 
    options: ["Kick-off", "Throw-in", "Free Kick", "Pass"], 
    correct: 1 
  },
  { q: "Caution card color?", 
    options: ["Red", "Yellow", "Green", "Blue"], 
    correct: 1 
  },
  { q: "How long is extra time?", 
    options: ["90 minutes", "100 minutes", "120 minutes", "110 minutes"], 
    correct: 2 
  },
  { q: "Passing to goalkeeper by foot?", 
    options: ["Back Pass", "Goal Pass", "Safe Pass", "Kick Back"], 
    correct: 0 
  },
  { q: "Who enforces rules on field?", 
    options: ["Referee", "Coach", "Captain", "Linesman"], 
    correct: 0 
  },
  { q: "What is striking the ball called?", 
    options: ["Kick", "Pass", "Shoot", "Header"], 
    correct: 0 
  },
  { q: "Ways to score goals?", 
    options: ["Goal & Penalty", "Goal & Offside", "Goal & Foul", "Goal & Corner"], 
    correct: 0 
  },
  { q: "Why regulate football boots?", 
    options: ["Safety", "Fashion", "Speed", "Color"], 
    correct: 0 
  },
  { q: "What is touching the ball called?", 
    options: ["Touch", "Hit", "Kick", "Pass"], 
    correct: 0 
  },
  { q: "Can non-goalkeeper use hands?", 
    options: ["Yes", "No", "Only in penalty", "Sometimes"], 
    correct: 1 
  },
  { q: "Football weight?", 
    options: ["410–450g", "300–350g", "500–550g", "600g"], 
    correct: 0 
  },
  { q: "What are extra players called?", 
    options: ["Reserves", "Substitutes", "Extras", "Benchers"], 
    correct: 1 
  },
  { q: "Foul in penalty area leads to?", 
    options: ["Corner", "Penalty", "Free Kick", "Goal Kick"], 
    correct: 1 
  },
  { q: "Deliberate handball leads to?", 
    options: ["Free Kick", "Penalty", "Corner", "Throw-in"], 
    correct: 0 
  }
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
  document.getElementById("question").innerHTML = ("<div class=question>Q"+(index+1)+"." +q.q+"</div>");
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("option-row");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = i;

    const label = document.createElement("label");
    label.textContent = (""+String.fromCharCode(97 + i)+"." +opt);

    wrapper.appendChild(radio);
    wrapper.appendChild(label);

    radio.addEventListener("change", () => {
      answers[currentQuestionIndex] = i;
      updateTracker();
    });

    answersDiv.appendChild(wrapper);
  });

  if (answers[index] !== undefined) {
    document.querySelector('input [name="answer"]'+["value="+(answers[index])]).checked = true;
  }
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

// ✅ Review Page
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
        optDiv.style.border = "2px solid green"; // ✅ correct answer
      }
      if (userAns === idx && userAns !== correctAns) {
        optDiv.style.border = "2px solid red"; // ❌ wrong selected
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
