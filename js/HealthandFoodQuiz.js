const reviewBtn =document.getElementById('review-btn');
 reviewBtn.style.fontsize="3em";
    reviewBtn.style.fontweight="600";
     reviewBtn.style.marginbottom="10px";
     reviewBtn.style.background="(90deg, #ff3388, #8a2be2)";
     reviewBtn.style.webkitbackgroundclip="text";
     reviewBtn.style.webkittextfillcolor="transparent";
     reviewBtn.style.textshadow= "0 0 10px rgba(184, 51, 255, 0.5)";
const questions = [
  {
    q: "လူတစ်ယောက်ရဲ့ပုံမှန်ကိုယ်တွင်းအပူချိန်ကဘယ်လောက်လဲ(ဒီဂရီဖာရင်ဟိုက်)",
    options: ["၇၅", "၉၈.၆", "၁၀၀"],
    correct: 1
  },
  {
    q: "မြေမှုန့်ဖုန်မှုန့်တွေရှူမိရင် ဘာရောဂါဖြစ်တတ်လဲ။",
    options: [
      "အကြောရောဂါ",
      "နှလုံးရောဂါ",
      "အဆုတ်ရောဂါ"
    ],
    correct: 2
  },
  {
    q: "လူတွင်သွေးအုပ်စုဘယ်နှစ်မျိုးရှိတာလဲ။",
    options: ["၄", "၅", "၆","၈",],
    correct: 0
  },
  {
    q: "ပုံမှန်လူတစ်ယောက်မှာသွေး ဘယ်နှစ်(လီတာ)ရှိတာလဲ။",
    options: [
      "၅",
      "၆",
      "၇",
      "၈",
    ],
    correct: 1
  },
  {
    q: "သွေးအုပ်စု(၄)မျိုးတွင်မပါသောသွေးမှာ.....",
    options: ["အေသွေး", "ဘီသွေး", "စီသွေး"],
    correct: 2
  },
  {
    q: "မနက်စာနဲ့နေ့လယ်စာကို.......ခန့်ခွာပြီးစားသင့်ပါတယ်",
    options: ["၆နာရီ", "၄နာရီ", "၅နာရီ", "၁နာရီ"],
    correct: 1
  },
  {
    q: "မနက်စာကိုအိပ်ရာကနိုးပြီး........အတွင်းစားသင့်ပါတယ်။",
    options: ["၁နာရီ", "၃၀မိနစ်", "၁၅မိနစ်", "၄နာရီ"],
    correct: 1
  },
  {
    q: "ညစာကို အိပ်ရာဝင်ချိန်နှင့်.......အနည်းဆုံးခြားရပါမယ်။",
    options: ["၄နာရီ", "၃နာရီ", "၁နာရီ", "၆နာရီ"],
    correct: 1
  },
  {
    q: "မနက်စာမစားတဲ့အခါ",
    options: ["အားအင်ကုန်ခမ်းပြီးမှတ်နိုင်စွမ်းအားကိုလျော့နည်းစေပါတယ်။", "ကိုယ်အလေးချိန်တက်စေနိုင်ပါတယ်", "ခေါင်းတစ်ခြမ်းကိုက်ခြင်း၊ဆံပင်ကျွတ်ခြင်း၊နှလုံးနှင့်ဆီးချိုရောဂါ ဖြစ်နိုင်‌‌ေခြများပါတယ်။", "အားလုံးရွေးပါ။"],
    correct: 3
  },
  {
    q: "ရေသောက်သင့်တဲ့အချိန်------",
    options: [
      "အိပ်ယာထချိန်နှင့်အိပ်ရာမဝင်မှီ",
      "အစာမစားမှီနှင့်ရေမချိုးမှီ",
      "အစာစားပြီးချိန်",
      "aနှင့်bကိုရွေးပါ။"
    ],
    correct: 3
  },
  {
    q: "အရိုးများသန်မာစေရန်........စားသင့်တယ်",
    options: ["လိ‌မ္မော်သီး", "ဖရဲသီး", "ပန်းသီး", "အုန်းသီး"],
    correct: 1
  },
  {
    q: "အသားအရေလှစေပြီးစိတ်ဓာတ်ကျတာကိုကာကွယ်ပေးသောအသီး.......ဖြစ်သည်",
    options: ["ပန်းသီး", "မင်းကွတ်သီး", "ဒူးရင်းသီး", "တည်သီး"],
    correct: 2
  },
  {
    q: "ခုခံအားနှင့်သွေးလည်ပတ်မှုကိုအားကောင်းစေသောအသီးမှာ",
    options: ["တည်သီး", "မုန်လာဥနီ", "ပန်းသီး", "လိမ္မော်သီး"],
    correct: 1
  },
  {
    q: "ကိုယ်ခံအားမြင့်တက်စေပြီးကိုယ်အလေးချိန်ကျစေသောဖျော်ရည်မှာ",
    options: ["ပန်းသီးဖျော်ရည်", "ထောပတ်သီးဖျော်ရည်", "Bubble tea", "မုန်လာဥနီဖျော်ရည်"],
    correct: 0
  },
  {
    q: "မျက်လုံးကိုအား‌ေကာင်းစေသောအသီးမှာ",
    options: ["မင်းကွတ်သီး", "တည်သီး", "ဩဇာသီး", "အားလုံးရွေးပါ။"],
    correct: 1
  },
  {
    q: "အစာအိမ်ရောဂါ၊နှလုံးသွေးကြောကျဉ်းခြင်းနှင့်လေဖြတ်ခြင်းကိုသက်သာစေသောအသီးမှာ",
    options: ["သလဲသီး", "ပန်းသီး", "လိမ္မော်သီး", "အားလုံးကိုရွေးပါ"],
    correct: 0
  },
  {
    q: "ဆီးချိုနှင့်သွေးတိုးရောဂါကိုသက်သာစေသောအသီးမှာ......",
    options: ["ပန်းသီး", "မင်းကွတ်သီး", "အုန်းသီး", "စပျစ်သီး"],
    correct: 1
  },
  {
    q: "ကိုက်လန်တွင်သံဓာတ်၊ကယ်လ်စီယမ်နှင့်ဗီတာမင်အေနှင့်ကေတိုပြည့်ဝစွာပါရှိပြီး.......ကိုကာကွယ်ပေးသည်။",
    options: ["ရောင်ရမ်းမှုကိုသက်သာစေပြီးကင်ဆာကိုကာကွယ်ပေးနိုင်သည်။", "နှလုံးနှင့်သွေးကြောရောဂါကာကွယ်ပေးသည်။", "၁နှင့်၂နှစ်ခုစလုံးကာကွယ်သည်။", "ပန်းနာရင်ကျပ်ကိုကာကွယ်ပေးသည်။"],
    correct: 2
  },
  {
    q: "ပိုလျှံနေတဲ့Uric Acid ကိုလျော့နည်းစေတဲ့အတွက်အဆစ်အမြစ်ရောင်ခြင်း၊ပန်းနာရင်ကျပ်နဲ့ဂေါက်ရောဂါကိုကာကွယ်ပေးသောအသီးကဘာအသီးလဲ။",
    options: ["ခရမ်းချဉ်သီး", "သခွားသီး", "ခရမ်းသီး", "ဂေါရခါးသီး"],
    correct: 1
  },
  {
    q: "ခရမ်းသီးရဲ့အကျိုးကျေးဇူးများမှာ",
    options: ["အားလုံးကိုရွေးပါ။", "သိမှတ်နိုင်စွမ်းနှင့်ဦးနှောက်ကျန်းမာရေးကိုကောင်းမွန်စေသည်။", "ကင်ဆာနှင့်နှလုံးရောဂါကိုကာကွယ်ပေးခြင်း", "အရိုးသန်မာစေပြီးအရိုးပွခြင်းကိုကာကွယ်ပေးသည်။"],
    correct: 0
  },
  {
    q: "ဂေါရခါးသီးရဲ့ကောင်းကျိုးမှာ",
    options: [
      "ဆီးကျောက်နှင့်ဝမ်းချုပ်ခြင်းကိုပျောက်ကင်းစေခြင်း",
      "အရွယ်မတိုင်မီအိုမင်းရင့်ရော်ခြင်းကိုကာကွယ်ပေးခြင်း",
      "ကလေး‌ေတွမှာမွေးရာပါချိုယွင်းချက်တွေကိုကာကွယ်ပေးခြင်း",
      "အားလုံးဖြစ်နိုင်သည်။"
    ],
    correct: 3
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
      showQuestion(i+1);
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
