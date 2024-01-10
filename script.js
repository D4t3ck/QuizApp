let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Jason Segal",
    answer_3: "Tim Berners-Lee",
    answer_4: "Paul McCartney",
    right_answer: 3,
  },
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    answer_1: "Berlin",
    answer_2: "Madrid",
    answer_3: "Paris",
    answer_4: "Rom",
    right_answer: 3,
  },
  {
    question: "In welchem Jahr landete der Mensch erstmals auf dem Mond?",
    answer_1: "1965",
    answer_2: "1969",
    answer_3: "1975",
    answer_4: "1982",
    right_answer: 2,
  },
  {
    question: "Wer schrieb 'Die Odyssee'?",
    answer_1: "Homer",
    answer_2: "Platon",
    answer_3: "Aristoteles",
    answer_4: "Sokrates",
    right_answer: 1,
  },
  {
    question: "Wie viele Planeten hat unser Sonnensystem?",
    answer_1: "7",
    answer_2: "8",
    answer_3: "9",
    answer_4: "10",
    right_answer: 2,
  },
  {
    question: "Welches Element hat das chemische Symbol 'O'?",
    answer_1: "Sauerstoff",
    answer_2: "Kohlenstoff",
    answer_3: "Wasserstoff",
    answer_4: "Stickstoff",
    right_answer: 1,
  },
  {
    question: "Wer malte die Mona Lisa?",
    answer_1: "Vincent van Gogh",
    answer_2: "Pablo Picasso",
    answer_3: "Leonardo da Vinci",
    answer_4: "Michelangelo",
    right_answer: 3,
  },
];

let currentQuestion = 0;
let currentAnswer = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    console.log("Richtige Antwort!!");
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
  }
  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
  currentQuestion++; // z.B. von 0 auf 1
  document.getElementById('next-button').disabled = true;
  resetAnswerButtons()
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

