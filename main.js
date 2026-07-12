// speed angaben
const inputplayer1 = document.getElementById("speed1");
const inputplayer2 = document.getElementById("speed2");
// gewinner id
const winner = document.getElementById("winner");
// die zwei schwarzen boxen
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
// geschwindigkeit in px per second
let speedplayer1 = 0;
let speedplayer2 = 0;
// function um input fuer speed zu safen und inputbox wieder zurueck setzen
function safeinput(input, callback) {
    input.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            callback(Number(input.value));
            input.value = "";
        }
    });
}
safeinput(inputplayer1, (value) => {
    speedplayer1 = value;
});
safeinput(inputplayer2, (value) => {
  speedplayer2 = value;
});
// x-achse positionen der spieler
let player1X = 0;
let player2X = 0;
// rennen in browser anzeigen 
setInterval(() => {
    if (speedplayer1 > 0 && speedplayer2 > 0) {
        player1X += speedplayer1;
        player2X += speedplayer2;
        player1.style.left = player1X + "px";
        player2.style.left = player2X + "px";
        if (player1X >= 2000 || player2X >= 2000) {
            winner.style.display = "block";
            winner.textContent = player1X >= 2000 && player2X >= 2000 ? "Both Players Won" :
                player1X >= 2000 ? "Player 1 Won" :
                    player2X >= 2000 ? "Player 2 Won" :
                        "none";
            player1X = 0;
            player2X = 0;
            speedplayer1 = 0;
            speedplayer2 = 0;
            player1.style.left = player1X + "px";
            player2.style.left = player2X + "px";
        }
    }
},
    1000);
