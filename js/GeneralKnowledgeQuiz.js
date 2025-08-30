const questions = [
{
  q: "ကမ္ဘာပေါ်မှာ အကြီးဆုံး သမုဒ္ဒရာက ဘယ်သမုဒ္ဒရလဲ?",
  options: [
    "အတ္လန်တိက်သမုဒ္ဒရာ",
    "ပစိဖိက်သမုဒ္ဒရာ",
    "အိန္ဒိယသမုဒ္ဒရာ"
  ],
  correct: 1
},
{
  q: "လေယာဉ်ကို ဖန်တီးခဲ့တဲ့သူက ဘယ်သူလဲ?",
  options: [
    "ရိုက်ဗ် ဘရဒာ",
    "အယ်လ်ဗတ် အိုင်န်စတိုင်",
    "နီလ် အာမ်စတရွန်"
  ],
  correct: 0
},
{
  q: "Microsoft ကို တည်ထောင်ခဲ့တဲ့သူက ဘယ်သူလဲ?",
  options: [
    "စတီး Jobs",
    "Elon Musk",
    "Mark Zuckerberg"
  ],
  correct: 1
},
{
  q: "လေထုထဲမှာ အများဆုံးပါဝင်တဲ့ ဓာတ်ငွေ့က ဘယ်ဓာတ်ငွေ့လဲ?",
  options: [
    "အောက်ဆီဂျင်",
    "နိုက်ထရဂျင်",
    "ကာဗွန်ဒိုင်အောက်ဆိုဒ်"
  ],
  correct: 1
},
{
  q: "လူ့ခန္ဓာကိုယ်မှာ နှလုံးက ဘယ်အရာကိုဆောင်ရွက်တာလဲ?",
  options: [
    "အစာချေစေခြင်း",
    "သွေးကို ပိုဆောင်ပေးခြင်း",
    "အသက်ရူပေးခြင်း"
  ],
  correct: 1
},
{
  q: "ကမ္ဘာပေါ်မှာ လူသတ်မှုနှုန်း အနည်းဆုံးနိုင်ငံတစ်ခုက ဘယ်နိုင်ငံလဲ?",
  options: [
    "Singapore",
    "Brazil",
    "USA"
  ],
  correct: 0
},
{
  q: "မျက်လုံးမပိတ်နိုင်တာ ဘယ်တိရိစ္ဆာန်လဲ",
  options: [
    "မြွေ",
    "ဇီးကွက်",
    "ငါး"
  ],
  correct: 2
},
{
  q: "ရေဘဝဲ တစ်ကောင်တွင်ဦးနှောက် ဘယ်နှစ်ခုရှိသလဲ",
  options: [
    "၉ခု",
    "၅ခု",
    "၇ခု"
  ],
  correct: 0
},
{
  q: "လူ့ ခန္ဓာကိုယ်မှာ အသန့် ရှင်းဆုံးက ဘယ်အစိတ်အပိုင်းလဲ?",
  options: [
    "လျှာ",
    "မျက်လုံး",
    "လက်"
  ],
  correct: 1
},
{
  q: "ဂျပန်မှာ နာမည်အကြီးဆုံးသော အစားအစာက ဘာလဲ",
  options: [
    "စူရှီ",
    "ဘာကာရာ",
    "ဖန်ခါးသီး"
  ],
  correct: 0
},
{
  q: "မြန်မာ့ယဉ်ကျေးမှုမှာ အရေးကြီးတဲ့ လက်မှုပညာက ဘာလဲ။",
  options: [
    "စက္ကူလုပ်ငန်း",
    "ပန်းပုလုပ်ငန်း",
    "ပိုးထိုးလုပ်ငန်း"
  ],
  correct: 1
},
{
  q: "မြန်မာနိုင်ငံရဲ့ပထမဆုံးသော သမ္မတက ဘယ်သူလဲ။",
  options: [
    "ဦးအောင်ဆန်း",
    "စဝ်ရွှေသိုက်",
    "ဦးသိန်းစိန်"
  ],
  correct: 1
},
{
  q: "မြန်မာနိုင်ငံရဲ့ ရာသီဥတုက ဘယ်လိုရာသီဥတုမျိူးလဲ။",
  options: [
    "အေးမြခြောက်သွေ့တဲ့ ရာသီဥတု",
    "အပူပိုင်းမုတ်သုံရာသီဥတု",
    "သဲကန္တာရရာသီဥတု"
  ],
  correct: 1
},
{
  q: "မြန်မာ့ရိုးရာအစားအစာဖြစ်တဲ့ မုန့်ဟင်းခါးကို ဘယ်ဒေသက စတင်ခဲ့တာလဲ။",
  options: [
    "ရန်ကုန်",
    "မော်လမြိုင်",
    "အင်းလေး"
  ],
  correct: 0
},
{
  q: "ကမ္ဘာပေါ်မှာ အကြီးဆုံးသော တိရစ္ဆာန်က ဘယ်တိရစ္ဆာန်လဲ။",
  options: [
    "ဆင်",
    "ဝေလငါး",
    "ကြံ့"
  ],
  correct: 1
},
{
  q: "ကမ္ဘာ့အကျယ်ဆုံး မြစ်က ဘယ်မြစ်လဲ။",
  options: [
    "အမေဇုန်မြစ်",
    "နိုင်းမြစ်",
    "ယန်ဇီမြစ်"
  ],
  correct: 0
},
{
  q: "လိမ္မော်သီးမှာ ဘယ် ဗီတာမင် အများဆုံးပါ၀င်လဲ။",
  options: [
    "ဗီတာမင် B",
    "ဗီတာမင် C",
    "ဗီတာမင် D"
  ],
  correct: 1
},
{
  q: "ကမ္ဘာပေါ်မှာ လူဦးရေ အများဆုံးရှိတဲ့ နိုင်ငံက ဘယ်နိုင်ငံလဲ။",
  options: [
    "အိန္ဒိယ",
    "အမေရိကန်",
    "ရုရှား"
  ],
  correct: 0
},
{
  q: "သံဓာတ် ပေါများတဲ့ ဟင်းသီးဟင်းရွက်က ဘယ်ဟင်းသီးဟင်းရွက်လဲ။",
  options: [
    "သခွားသီး",
    "ဟင်းနုနွယ်",
    "ဂေါ်ဖီထုပ်"
  ],
  correct: 1
},
{
  q: "လူ့ခန္ဓာကိုယ်ထဲမှာ ရှိတဲ့ ရေပမာဏက ဘယ်လောက်ရာခိုင်နှုန်းရှိလဲ။",
  options: [
    "၅၀%",
    "၆၀%",
    "၈၀%"
  ],
  correct: 1
},
{
  q: "ရေဘဝဲ မြစ်တစ်ဖက်ကမ်းကနေ တစ်ဖက်ကမ်းကို ရေလွှာပေါ်မှာ လျှောက်လှမ်းနိုင်တဲ့ သတ္တဝါက ဘယ်သတ္တဝါလဲ။",
  options: [
    "ကြွက်",
    "ဖား",
    "ယက်ကန်းပင့်ကူ"
  ],
  correct: 2
},
{
  q: "ကမ္ဘာ့အရှည်ဆုံး ကျွန်းက ဘယ်ကျွန်းလဲ။",
  options: [
    "ဂရင်းလန်",
    "ကနေဒါ",
    "နယူးဂီနီ"
  ],
  correct: 2
},
{
  q: "လူသားတွေရဲ့ ခန္ဓာကိုယ်ထဲမှာ သွေးဘယ်လောက်ရှိသလဲ။",
  options: [
    "ပျမ်းမျှ ၅ လီတာခန့်",
    "ပျမ်းမျှ ၁၀ လီတာခန့်",
    "ပျမ်းမျှ ၁၅ လီတာခန့်"
  ],
  correct: 0
},
{
  q: "လိမ္မော်ရောင်ဆိုတာ ဘယ်နှစ်ရောင်ရောစပ်ထားတာလဲ။",
  options: [
    "အပြာနဲ့ အဝါ",
    "အနီနဲ့ အဝါ",
    "အစိမ်းနဲ့ အနီ"
  ],
  correct: 1},
  {q: "ဖရဲသီးမှာ ရေပမာဏ ဘယ်လောက်ပါသလဲ။",
  options: [
    "၈၀ ရာခိုင်နှုန်း",
    "၉၂ ရာခိုင်နှုန်း",
    "၇၅ ရာခိုင်နှုန်း"
  ],
  correct: 1
},
{
  q: "ကမ္ဘာ့အမြင့်ဆုံးတောင်ဖြစ်တဲ့ ဧဝရက်တောင် ဟာ ဘယ်နိုင်ငံနှစ်နိုင်ငံကြားမှာ တည်ရှိသလဲ။",
  options: [
    "တရုတ်နဲ့ ရုရှား",
    "အိန္ဒိယနဲ့ ပါကစ္စတန်",
    "နီပေါနဲ့ တရုတ်"
    
  ],
  correct: 1
},
{
  q: "ကမ္ဘာမှာ စစ်တပ်မရှိတဲ့ နိုင်ငံက။",
  options: [
    "ကိုစတာ ရီကာ",
    "နီပေါ",
    "အိုင်ယာလန်"
  ],
  correct: 1
},
{
  q: "ဘယ်ခန္ဓာကိုယ် အစိတ်အပိုင်းက ခွဲစိတ်အစားထိုးလို မရနိုင်ဘူးလဲ?",
  options: [
    "ကျောက်ကပ်",
    "နှလုံး",
    "ဦးနှောက်"
  ],
  correct: 2
},
{
  q: "ကမ္ဘာပေါ်မှာ IQ အမြင့်ဆုံး နိုင်ငံကဘယ်နိုင်ငံလဲ?",
  options: [
    "ဂျပန်နိုင်ငံ",
    "ထိုင်ဝမ်နိုင်ငံ",
    "စင်ကာပူနိုင်ငံ"
  ],
  correct: 0
}];
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
    "<div class=question>Q" + (index + 1) + ". " + q.q + "</div>";

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
