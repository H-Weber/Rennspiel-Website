// inputs für Mathe Frage
const inputplayer1 = document.getElementById("MathQuestionplayer1");
const inputplayer2 = document.getElementById("MathQuestionplayer2");
// gewinner id
const winner = document.getElementById("winner");
// Alert fuer Neue Fragen
const alert = document.querySelector(".Alert")
// die zwei schwarzen boxen
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
// Math Fragen
const mathQuestions = {
  "1+1": 2,
  "3*3": 9,
  "5*5": 25,
  "2-1": 1,
  "2/2": 1,
};
// geschwindigkeit in px per second
let speedplayer1 = 10;
let speedplayer2 = 10;

let answerplayer1 = null;
let answerplayer2 = null;
let randomValue = 0;

function newQuestion() {
    const questions = Object.keys(mathQuestions);
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    randomValue = mathQuestions[randomQuestion];
  
    alert.style.display = "block";
    inputplayer1.style.display = "block";
    inputplayer2.style.display = "block";

    inputplayer1.placeholder = randomQuestion;
    inputplayer2.placeholder = randomQuestion;

    answerplayer1 = null;
    answerplayer2 = null;
}
function correctAnswer() {
  if (answerplayer1 === null && answerplayer2 === null) {
    return;
  }
  else {
    speedplayer1 *= answerplayer1 == randomValue ? 2 : 1;
    speedplayer2 *= answerplayer2 == randomValue ? 2 : 1;
  }
  newQuestion();
}
function safeinput(input, callback) {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      callback(Number(input.value));
      input.value = "";
      correctAnswer();
    }
  });
}
safeinput(inputplayer1, (value) => {
  answerplayer1 = value;
});
safeinput(inputplayer2, (value) => {
  answerplayer2 = value;
});
newQuestion();
// x-achse positionen der spieler
let player1X = 0;
let player2X = 0;
// rennen in browser anzeigen
setInterval(() => {
    player1X += speedplayer1;
    player2X += speedplayer2;
    player1.style.left = player1X + "px";
    player2.style.left = player2X + "px";
    if (player1X >= 2000 || player2X >= 2000) {
      winner.style.display = "block";
      winner.textContent =
        player1X >= 2000 && player2X >= 2000
          ? "Both Players Won"
          : player1X >= 2000
            ? "Player 1 Won"
            : player2X >= 2000
              ? "Player 2 Won"
              : "none";
      player1X = 0;
      player2X = 0;
      speedplayer1 = 10;
      speedplayer2 = 10;
      player1.style.left = player1X + "px";
      player2.style.left = player2X + "px";
      newQuestion();
    }
}, 1000)
