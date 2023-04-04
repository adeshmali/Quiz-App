const quizData = [

    {
        question: "which ipl team won most tropy?",
        choices: ["Mumbai Indian", "CSK", "RCB"],
        answer: "Mumbai Indian"
    },
    {
        question: "who is best captain in ipl?",
        choices: ["Rohit Sharma", "M.S.Dhoni", "Virat kohli"],
        answer: "Rohit Sharma"
    },
    
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Venus", "Jupiter", "Mars"],
      answer: "Jupiter"
    },
    {
      question: "What is the tallest mountain in the world?",
      choices: ["K2", "Mount Everest", "Mount Kilimanjaro"],
      answer: "Mount Everest"
    }
  ];
  
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const submitBtn = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
  
    questionEl.innerText = currentQuizData.question;
    choicesEl.innerHTML = "";
  
    currentQuizData.choices.forEach(choice => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="answer" value="${choice}"> ${choice}`;
      choicesEl.appendChild(label);
    });
  }
  
  loadQuiz();
  
  submitBtn.addEventListener("click", () => {
    const selected = document.querySelector("input[name=answer]:checked");
  
    if (selected) {
      if (selected.value === quizData[currentQuestion].answer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < quizData.length) {
        loadQuiz();
      } else {
        alert(`Quiz completed! You scored ${score} out of ${quizData.length}`);
        location.reload();
      }
    }
  });
