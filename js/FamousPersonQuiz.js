const questions = [
        {
    q: "ဘယ်သူက 'The Theory of Relativity' ကို တီထွင်ခဲ့တာလဲ။",
    options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Stephen Hawking"],
    correct: 0
},
{
    q: "မိုနာလီဆာ ပန်းချီကားကို ဘယ်သူ ရေးဆွဲခဲ့တာလဲ။",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correct: 2
},
{
    q: "အမေရိကန်ပြည်ထောင်စုရဲ့ ပထမဆုံး သမ္မတက ဘယ်သူလဲ။",
    options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
    correct: 0
    },
{
    q: "ဘယ်သူက 'I Have a Dream' ဆိုတဲ့ မိန့်ခွန်းကို ပြောခဲ့တာလဲ။",
    options: ["Martin Luther King Jr.", "Nelson Mandela", "Mahatma Gandhi", "Malcolm X"],
    correct: 0
},
{
    q: "ကွန်ပျူတာ ပရိုဂရမ်းမင်းကို စတင်တီထွင်ခဲ့သူလို သတ်မှတ်ခံရတဲ့ အမျိုးသမီးက ဘယ်သူလဲ။",
    options: ["Ada Lovelace", "Marie Curie", "Rosalind Franklin", "Hedy Lamarr"],
    correct: 0
},
{
    q: "ပန်းသီးတစ်လုံးပြုတ်ကျတာကို မြင်ပြီး ဆွဲငင်အား (Gravity) သီအိုရီကို ရှာဖွေတွေ့ရှိခဲ့သူက ဘယ်သူလဲ။",
    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
    correct: 0
},
{
    q: "ကမ္ဘာ့တောင်ဘက်စွန်း (South Pole) ကို ပထမဆုံး ရောက်ရှိခဲ့သူက ဘယ်သူလဲ။",
    options: ["Roald Amundsen", "Richard Byrd", "Robert Falcon Scott", "James Cook"],
    correct: 0
},
{
    q: "ရှေးခေတ် အီဂျစ်ဘုရင်မ ကလီယိုပတ်ထရာကို အုပ်ချုပ်မှုနဲ့ပတ်သက်ပြီး နာမည်အကြီးဆုံးဖြစ်စေခဲ့တဲ့ အကြောင်းရင်းက ဘာလဲ။",
    options: ["Her intelligence and political acumen", "Her beauty", "Her military victories", "Her religious leadership"],
    correct: 0
},
{
    q: "ကမ္ဘာပေါ်မှာ အကြီးဆုံး ကုမ္ပဏီတစ်ခုဖြစ်တဲ့ Microsoft ကို တည်ထောင်ခဲ့သူက ဘယ်သူလဲ။",
    options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
    correct: 0
},
{
    q: "ဘယ်သူက ကွန်မြူနစ်ဝါဒရဲ့ ခေါင်းဆောင်တစ်ယောက်ဖြစ်ပြီး 'Das Kapital' စာအုပ်ကို ရေးသားခဲ့တာလဲ။",
    options: ["Karl Marx", "Vladimir Lenin", "Stalin", "Mao Zedong"],
    correct: 0
},
{
    q: "အမျိုးသမီးတွေရဲ့ မဲပေးခွင့်ရရှိရေးအတွက် ကြိုးပမ်းခဲ့တဲ့ အရေးပါတဲ့ အမျိုးသမီးအခွင့်အရေးလှုပ်ရှားသူက ဘယ်သူလဲ။",
    options: ["Susan B Anthony", "Rosa Parks", "Emmeline Pankhurst", "Eleanor Roosevelt"],
    correct: 0
},
{
    q: "ဘယ်သူက 'Hamlet' နဲ့ 'Romeo and Juliet' ကဲ့သိုသော နာမည်ကျော် ပြဇာတ်တွေကို ရေးခဲ့တာလဲ။",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    correct: 0
},
{
    q: "အက်ဒေါလ်ဖ် ဟစ်တလာဟာ ဘယ်နိုင်ငံရဲ့ ခေါင်းဆောင်လဲ။",
    options: ["Italy", "Germany", "Russia", "Japan"],
    correct: 1
},
{
    q: "တီထွင်သူအဖြစ် နာမည်ကျော်ကြားပြီး ဖုန်းကို တီထွင်ခဲ့သူက ဘယ်သူလဲ။",
    options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Marconi"],
    correct: 2
},
{
    q: "အိန္ဒိယနိုင်ငံ လွတ်လပ်ရေးအတွက် ငြိမ်းချမ်းစွာ ဆန္ဒပြခဲ့တဲ့ ခေါင်းဆောင်က ဘယ်သူလဲ။",
    options: ["B. R. Ambedkar", "Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi"],
    correct: 3
},
{
    q: "ဘယ်သူက စန္ဒယားကို တီထွင်ခဲ့တာလဲ။",
    options: ["Benjamin Franklin", "George Stephenson", "Charles Babbage", "Bartolomeo Cristofori"],
    correct: 3
},
{
    q: "ရုရှားတော်လှန်ရေးကို ဦးဆောင်ပြီး ဆိုဗီယက်ယူနီယံရဲ့ ပထမဆုံး ခေါင်းဆောင်ဖြစ်လာသူက ဘယ်သူလဲ။",
    options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Mikhail Gorbachev"],
    correct: 0
},
{
    q: "ဘယ်သူက 'Anne Frank: The Diary of a Young Girl' ကို ရေးသားခဲ့တာလဲ။",
    options: ["Anne Frank", "Helen Keller", "Elie Wiesel", "Maya Angelou"],
    correct: 0
},
{
    q: "ငြိမ်းချမ်းရေး နိုဘယ်ဆုကို ရရှိခဲ့ပြီး တောင်အာဖရိကမှာ လူမျိုးရေးခွဲခြားမှုကို ဆန့်ကျင်ခဲ့တဲ့ ပုဂ္ဂိုလ်က ဘယ်သူလဲ။",
    options: ["Nelson Mandela", "Desmond Tutu", "Steve Biko", "Walter Sisulu"],
    correct: 0
},
{
    q: "ဘယ်သူက အနုပညာလှုပ်ရှားမှုမှာ အရေးပါပြီး ပုံမှန်မဟုတ်တဲ့ ပန်းချီကားတွေကို ရေးဆွဲခဲ့တဲ့ ပန်းချီဆရာလဲ။",
    options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
    correct: 0
},
{
    q: "ပြင်သစ်စစ်ခေါင်းဆောင်နဲ့ ဧကရာဇ်အဖြစ် နာမည်ကျော်ကြားခဲ့သူက ဘယ်သူလဲ။","options": ["Napoleon Bonaparte", "Louis XIV", "Charles de Gaulle", "Marie Antoinette"],
    correct: 0
},
{
    q: "ဘယ်သူက 'The Wizard of Oz' စာအုပ်ကို ရေးခဲ့တာလဲ။",
    options: ["L. Frank Baum", "Lewis Carroll", "Dr. Seuss", "J. K. Rowling"],
    correct: 0
},
{
    q: "ဘယ်သူက 'I Feel Good' ဆိုတဲ့ သီချင်းနဲ့ နာမည်ကြီးခဲ့တာလဲ။",
    options: ["James Brown", "Elvis Presley", "Michael Jackson", "Aretha Franklin"],
    correct: 0
},
{
    q: "ဘယ်သူက လေယာဉ်ပျံကို တီထွင်ခဲ့တာလဲ။",
    options: ["The Wright brothers", "Thomas Edison", "Benjamin Franklin", "Leonardo da Vinci"],
    correct: 0
},
{
    q: "ဘယ်သူက အမေရိကန်ပြည်ထောင်စုရဲ့ ၁၆ ဦးမြောက် သမ္မတ ဖြစ်ပြီး ကျွန်စနစ်ကို အဆုံးသတ်ခဲ့တာလဲ။",
    options: ["Abraham Lincoln", "George Washington", "Theodore Roosevelt", "Franklin D. Roosevelt"],
    correct: 0
},
{
    q: "ဘယ်သူက ပထမဆုံး လကမ္ဘာပေါ်သို ခြေချခဲ့တဲ့ လူသားလဲ။",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
    correct: 0
},
{
    q: "ဘယ်သူက ဉာဏ်ရည်ထက်မြက်တဲ့ ရူပဗေဒပညာရှင်ဖြစ်ပြီး 'A Brief History of Time' စာအုပ်ကို ရေးခဲ့တာလဲ။",
    options: ["Stephen Hawking", "Albert Einstein", "Isaac Newton", "Galileo Galilei"],
    correct: 0
},
{
    q: "ဘယ်သူက လူ့အခွင့်အရေးနဲ့ ငြိမ်းချမ်းရေးအတွက် လှုပ်ရှားခဲ့ပြီး ၁၉၈၉ ခုနှစ်မှာ ငြိမ်းချမ်းရေးနိုဘယ်ဆု ရခဲ့တာလဲ။",
    options: ["Dalai Lama", "Desmond Tutu", "Mother Teresa", "Nelson Mandela"],
    correct: 0
},
{
    q: "ဘယ်သူက မက္ကဆီကို လွတ်လပ်ရေးစစ်ပွဲကို စတင်ခဲ့တဲ့ ဘုန်းတော်ကြီးလဲ။",
    options: ["Miguel Hidalgo y Costilla", "Benito Juárez", "Emiliano Zapata", "Pancho Villa"],
    correct: 0
},
{
    q: "ဘယ်သူက ကွန်ပျူတာ ပရိုဂရမ်မင်းမှာ အရေးပါပြီး ပရိုဂရမ်မင်း ဘာသာစကား 'C++' ကို တီထွင်ခဲ့တာလဲ။",
    options: ["Bjarne Stroustrup", "James Gosling", "Guido van Rossum", "Dennis Ritchie"],
    correct: 0
}

   
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
