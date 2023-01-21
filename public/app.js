var questions = [
    {
      numb: 1,
      question: "What is my favourite Movie?",
      answer: "Money heist",
      options: [
        "Money heist",
        "Pirates of the Caribbean",
        "Minamata",
        "The lost of City",
      ],
    },
    {
      numb: 2,
      question: "What your Favourite city",
      answer: "lahore ",
      options: [
        "Karachi",
        "Islamabad",
        "Lahore",
        "Peshawar",
      ],
    },
    {
      numb: 3,
      question: "What your Favourite Animals?",
      answer: "Dog",
      options: [
        "Cat",
        "Rabite",
        "Dog",
        "Monkey",
      ],
    },
    {
      numb: 4,
      question: "What your jacket?",
      answer: "Leather",
      options: [
        "Hoddie",
        "Bomber",
        "Leather",
        "Brnd",
      ],
    },
    {
      numb: 5,
      question: "What Your Language?",
      answer: "English",
      options: [
        "English",
        "Urdu",
        "Jamness",
        "Arabic",
      ],
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
  ];
  
  var question = document.getElementById("question");
  var questionNum = document.getElementById("questionNum");
  var ansParent = document.getElementById("ansParent");
  var main = document.getElementById("main");
  var indexNum = 0;
  var marks = 0;
  
  function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML =
      "Question # " + (indexNum + 1) + "/" + questions.length;
      ansParent.innerHTML=''
    for (var i = 0; i < questions[indexNum].options.length; i++) {
        ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-secondary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`
    }
  }
  showQuestion();
  
  function nextQuestion() {
    indexNum++;
    showQuestion();
  }
  
  function checkAns(a, b) {
    if (a == b) {
      marks++;
    }
    if(indexNum + 1 == questions.length) {
        main.innerHTML=` <h1 class="text-white bg-danger border border-secondary text-center">
        YOur Marks is ${marks}
        </h1>`
    }else{
    nextQuestion();

    }
  }