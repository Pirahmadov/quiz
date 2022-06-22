const main = document.querySelector(".main");

const questions = [
  {
    question: "iki vur iki",
    answers: [
      { variant: "A", answer: "4", rightAnswer: true },
      { variant: "B", answer: "2", rightAnswer: false },
      { variant: "C", answer: "3", rightAnswer: false },
      { variant: "D", answer: "5", rightAnswer: false },
    ],
  },
  {
    question: "iki plus iki",
    answers: [
      { variant: "A", answer: "4", rightAnswer: true },
      { variant: "B", answer: "2", rightAnswer: false },
      { variant: "C", answer: "3", rightAnswer: false },
      { variant: "D", answer: "5", rightAnswer: false },
    ],
  },
];

const getQuestions = () => {
  questions.map((e) => {
    const questionBox = document.createElement("div");

    questionBox.innerHTML = e.question;
    main.appendChild(questionBox);
    const answerBox = document.createElement("ul");
    e.answers.map((ans) => {
      const li = document.createElement("li");
      const variant = document.createElement("span");
      variant.addEventListener("click", () => {
        if (ans.rightAnswer) {
          console.log("duz");
        } else {
          console.log("sehv");
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
