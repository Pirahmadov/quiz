const main = document.querySelector(".main");
const next = document.querySelector(".next");
let idNumber = 1;
let blocked = false;
let trueAnswers = 0;
let falseAnswers = 0;
const res = document.querySelector(".result");

const questions = [
  {
    question: "iki vur iki",
    id: 1,
    answers: [
      { variant: "A", answer: "4", rightAnswer: true },
      { variant: "B", answer: "2", rightAnswer: false },
      { variant: "C", answer: "3", rightAnswer: false },
      { variant: "D", answer: "5", rightAnswer: false },
    ],
  },
  {
    question: "iki plus iki",
    id: 2,
    answers: [
      { variant: "A", answer: "4", rightAnswer: true },
      { variant: "B", answer: "2", rightAnswer: false },
      { variant: "C", answer: "3", rightAnswer: false },
      { variant: "D", answer: "5", rightAnswer: false },
    ],
  },
  {
    question: "uch plus iki",
    id: 3,
    answers: [
      { variant: "A", answer: "4", rightAnswer: true },
      { variant: "B", answer: "2", rightAnswer: false },
      { variant: "C", answer: "3", rightAnswer: false },
      { variant: "D", answer: "5", rightAnswer: false },
    ],
  },
  {
    question: "dord plus iki",
    id: 4,
    answers: [
      { variant: "A", answer: "4", rightAnswer: true },
      { variant: "B", answer: "2", rightAnswer: false },
      { variant: "C", answer: "3", rightAnswer: false },
      { variant: "D", answer: "5", rightAnswer: false },
    ],
  },
];
const questionsAmmount = questions.length;
const nextQuestion = () => {
  if (idNumber !== questionsAmmount && blocked) {
    idNumber++;
    getQuestions();
    blocked = false;
  } else if (blocked) {
    next.innerHTML = "finish";
    blocked = false;
  } else if (idNumber === questionsAmmount && !blocked) {
    res.innerHTML = `Duz: ${trueAnswers} Sehv: ${falseAnswers}`;
  }
};

const getQuestions = () => {
  let availableQuestion = questions.filter((element) => {
    return element.id === idNumber;
  });
  main.innerHTML = "";
  availableQuestion.map((e) => {
    const questionBox = document.createElement("div");

    questionBox.innerHTML = e.question;
    main.appendChild(questionBox);
    const answerBox = document.createElement("ul");
    e.answers.map((ans) => {
      const li = document.createElement("li");
      const variant = document.createElement("span");
      variant.classList.add("variant");
      variant.addEventListener("click", () => {
        if (blocked) return;
        if (ans.rightAnswer) {
          answer.classList.add("active");
          trueAnswers++;
          blocked = true;
        } else {
          answer.classList.add("error");
          falseAnswers++;
          blocked = true;
        }
      });
      variant.innerHTML = ans.variant;

      const answer = document.createElement("span");
      answer.innerHTML = ans.answer;

      li.appendChild(variant);
      li.appendChild(answer);
      answerBox.appendChild(li);
      main.appendChild(answerBox);
    });
  });
};
getQuestions();

next.addEventListener("click", nextQuestion);
