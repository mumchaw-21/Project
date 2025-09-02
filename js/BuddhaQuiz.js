const questions = [
  { q: "ဗုဒ္ဓ၏ ငယ်နာမည်က ဘာလဲ?",
     options: ["သိဒ္ဓတ္ထ", "စိတ္တဿ", "သုဒ္ဓေါန", "ရာဟုလာ"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ ခမည်းတော်အမည်က ဘာလဲ?",
     options: ["သိဒ္ဓတ္ထမင်း", "မာယာမင်း", "ကောဏ္ဍညား", "သုဒ္ဓေါနမင်း"],
      correct: 3 },
  { q: "ဗုဒ္ဓ၏ မိခင်တော်အမည်က ဘာလဲ?",
     options: ["မယ်တော် မဟာမာယာ", "မယ်တော် ယသောဓရာ", "မယ်တော် မဟာပဇာပတီ", "မယ်တော် ဗဿိဿာ"], correct: 0 },
  { q: "ဗုဒ္ဓသည် မွေးဖွားရာနေရာက ဘာလဲ?",
     options: ["လုမ္ဗနီဝင်း", "ဗာရာဏာစီ", "သာဝတ္တိ", "ကုသိနာရာမ္မ"],
      correct: 0 },
  { q: "ဗုဒ္ဓသည် မွေးဖွားသောနေ့က ဘာလဲ?",
     options: ["ကဆုန်လပြည့်နေ့", "တန်ခူးလပြည့်နေ့", "သီတင်းကျွတ်လပြည့်နေ့", "နတ်တော်လပြည့်နေ့"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ အိမ်ရှင်မတော်အမည်က ဘာလဲ?",
     options: ["ယသောဓရာ", "မဟာပဇာပတီ", "မဟာမာယာ", "ဗဿိဿာ"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ သားတော်အမည်က ဘာလဲ?",
     options: ["ရာဟုလာ", "အနုရုဒ္ဓ", "အာနန္ဒာ", "မောဂ္ဂလာန"],
      correct: 0 },
  { q: "ဗုဒ္ဓသည် အိမ်စွန့်ခါသွားသောအရွယ်က ဘယ်နှနှစ်လဲ?",
     options: ["၂၉ နှစ်", "၂၅ နှစ်", "၃၅ နှစ်", "၃၀ နှစ်"],
      correct: 0 },
  { q: "ဗုဒ္ဓသည် သီးသန့်တရားသမားအဖြစ် လေ့ကျင့်ခဲ့ချိန်က ဘယ်နှနှစ်လဲ?",
     options: ["၆ နှစ်", "၅ နှစ်", "၇ နှစ်", "၃ နှစ်"],
      correct: 0 },
  { q: "ဗုဒ္ဓသည် ဘုရားဖြစ်သောနေ့က ဘာလဲ?",
     options: ["ကဆုန်လပြည့်နေ့", "တန်ခူးလပြည့်နေ့", "နတ်တော်လပြည့်နေ့", "သီတင်းကျွတ်လပြည့်နေ့"],
      correct: 0 },
  { q: "ဗုဒ္ဓသည် ဘုရားဖြစ်ရာနေရာက ဘာလဲ?",
     options: ["ဗောဓိဂယာ", "လုမ္ဗနီ", "သာဝတ္တိ", "ရာဇဂရိ"],
      correct: 0 },
  { q: "ပဉ္စဝက္ခရာသည် ဘာလဲ?",
     options: ["ဗုဒ္ဓ၏ပထမတရားနားထောင်သူ ငါးဦး", "ဗုဒ္ဓ၏သားတော် ငါးဦး", "မင်းသား ငါးဦး", "သံဃာ့ခေါင်းဆောင် ငါးဦး"],
      correct: 0 },
  { q: "ပထမဦးစွာတရားဟောသောနေရာက ဘာလဲ?",
     options: ["ဗာရာဏာစီ မိဂဒါယဝင်း", "လုမ္ဗနီဝင်း", "ရာဇဂရိ", "သာဝတ္တိ"],
      correct: 0 },
  { q: "ပထမဦးစွာဟောသောတရားက ဘာလဲ?",
     options: ["ဓမ္မစကြဝတ်တနသုတ်", "မေတ္တာသုတ်", "မဟာသတိပဋ္ဌာန်သုတ်", "ဗီမာနဝတ္ထု"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ အဓိပ္ပါယ်အမည်တစ်ခုက ဘာလဲ?",
     options: ["သမ္မာသမ္ဗုဒ္ဓ", "အရဟံသာမီ", "ပစ္စေကဗုဒ္ဓ", "သာဝကဗုဒ္ဓ"],
      correct: 0 },
  { q: "ပရိနိဗ္ဗာန်တော်မူသည့်အရွယ်က ဘယ်နှနှစ်လဲ?",
     options: ["၈၀ နှစ်", "၇၅ နှစ်", "၇၉ နှစ်", "၈၂ နှစ်"],
      correct: 0 },
  { q: "ပရိနိဗ္ဗာန်တော်မူရာနေရာက ဘာလဲ?",
     options: ["ကုသိနာရာမ်မ", "ရာဇဂရိ", "ဗောဓိဂယာ", "သာဝတ္တိ"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ ဦးဆောင်တပည့်တော် ၂ ဦးက ဘာလဲ?",
     options: ["သာရိပုတ္တ၊ မဟာမောဂ္ဂလာန", "အနုရုဒ္ဓ၊ အာနန္ဒာ", "ကောဏ္ဍညား၊ ယသောဓရာ", "ဒေဝဒတ်၊ ဗဿိဿာ"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ သာဓကတပည့်တော်မအဓိကက ဘာလဲ?",
     options: ["မဟာပဇာပတီ ဂေါတမီ", "ယသောဓရာ", "ကိစ္စဂေါတာမီ", "ဗဿိဿာ"],
      correct: 0 },
  { q: "မင်းသားအချိန်တွင် စီးသောမြင်းနာမည်က ဘာလဲ?",
     options: ["ကန္တက", "ဗလဟိက", "သုဂဏ္ဏ", "မောဂ္ဂလ္လာ"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ မျက်စိသံဃာ့အဖြစ်ရသူက ဘာလဲ?",
     options: ["အနုရုဒ္ဓ", "အာနန္ဒာ", "သာရိပုတ္တ", "မောဂ္ဂလာန"],
      correct: 0 },
  { q: "ပရိနိဗ္ဗာန်တော်မူသောလက ဘာလဲ?",
     options: ["ကဆုန်လပြည့်နေ့", "တန်ခူးလပြည့်နေ့", "သီတင်းကျွတ်လပြည့်နေ့", "နတ်တော်လပြည့်နေ့"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ နောက်ဆုံးအကြံပေးစကားက ဘာလဲ?",
     options: ["အကျင့်ပညာဖြင့် သတင်းအချက်အလက်ကို လုံလောက်စွာသိမြင်အောင် ကြိုးစားပါ", "သင်တို့သည် ချမ်းသာပါစေ", "သင်တို့သည် မေတ္တာထားပါ", "သင်တို့သည် တရားနားထောင်ပါ"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ အဓိကတရားစာအုပ်က ဘာလဲ?",
     options: ["ဓမ္မပဒ", "မေတ္တာသုတ်", "ဗီမာနဝတ္ထု", "မဟာပရိနိဗ္ဗာန်သုတ်"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ အဓိကတပည့်တော်မက ဘာလဲ?",
     options: ["ကိစ္စဂေါတာမီ", "ယသောဓရာ", "မဟာပဇာပတီ", "ဗဿိဿာ"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ တရားဟောမှုရည်ရွယ်ချက်က ဘာလဲ?",
     options: ["လူများကို သံသရာဝေဒနာမှ လွတ်မြောက်စေရန်", "လူများကို ချမ်းသာစေရန်", "လူများကို ဗိမာန်ရရန်", "လူများကို အစိုးရဖြစ်စေရန်"],
      correct: 0 },
  { q: "ပဉ္စဝက္ခရာထဲမှ ပထမဦးစွာ အရဟတ်ရသူက ဘာလဲ?",
     options: ["ကောဏ္ဍညား", "မဟာမောဂ္ဂလာန", "အာနန္ဒာ", "အနုရုဒ္ဓ"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ သီလ ၅ ပါးထဲတွင် မပါတဲ့အချက်က ဘာလဲ?",
     options: ["အလှူမပေးခြင်း", "သတ်မဲ့အမှုမလုပ်ခြင်း", "ခိုးမဲ့အမှုမလုပ်ခြင်း", "မုသာမပြောခြင်း"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ နိဗ္ဗာန်က ဘာကိုဆိုလိုသလဲ?",
     options: ["သံသရာလွတ်မြောက်ခြင်း", "စီးပွားရေးတိုးတက်ခြင်း", "လူမှုဖွံ့ဖြိုးခြင်း", "အိမ်ကောင်းနေလုံးဝခြင်း"],
      correct: 0 },
  { q: "ဗုဒ္ဓ၏ တရားပွားမှုအဖြစ်အပျက်ကို ဘယ်လိုခေါ်သလဲ?",
     options: ["ဓမ္မစကြဝတ်တန", "သမ္မာသမာဒီ", "မေတ္တာဘာဝနာ", "သမ္မာသမ္ဘူဒ္ဓ"],
      correct: 0 }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let answers = {};
let totalTime = 120; // 10 minutes total
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
