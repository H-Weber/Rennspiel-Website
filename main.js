const inputplayer1 = document.getElementById("speed1");
const inputplayer2 = document.getElementById("speed2");

const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
console.log(player1);
console.log(player2);
let speedplayer1 = 0;
let speedplayer2 = 0;

inputplayer2.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        speedplayer2 = Number(inputplayer2.value);
        inputplayer2.value = "";
        console.log(speedplayer2);
    }
});
inputplayer1.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        speedplayer1 = Number(inputplayer1.value);
        inputplayer1.value = "";
        console.log(speedplayer1);
    }
});

let player1X = 1;
let player2X = 1;

setInterval(() => {
    if (speedplayer1 > 0 && speedplayer2 > 0){
        player1X += speedplayer1;
        player2X += speedplayer2;
        console.log(player1X);
        console.log(player2X);
        player1.style.left = player1X + "px";
        player2.style.left = player2X + "px";
    }
},
    1000);
