function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function choice(move) {
    let result = "";
    if (move == 1) {
        result = "Rock 🪨";
    } else if (move == 2) {
        result = "Paper 📃";
    } else if (move == 3) {
        result = "Scissors ✂️";
    } else {
        result = "WRONG CHOICE";
    }
    return result;
}

// 1 is rock, 2 is paper, 3 is scissors
let player = 0;
let computer = 0;
let wins = 0;
let losses = 0;

while (wins < 3 && losses < 3) {
    computer = random(1, 3);
    player = prompt("Choose: 1 for rock, 2 for paper, 3 for scissors");

    alert("Computer chooses " + choice(computer));
    alert("You choose " + choice(player));

    // COMBAT
    if (computer == player) {
        alert("DRAW");
    } else if (player == 1 && computer == 3) {
        alert("YOU WIN");
        wins = wins + 1;
    } else if (player == 2 && computer == 1) {
        alert("YOU WIN");
        wins = wins + 1;
    } else if (player == 3 && computer == 2) {
        alert("YOU WIN");
        wins = wins + 1;
    } else {
        alert("YOU LOSE");
        losses = losses + 1;
    }
}
alert("You won " + wins + " times. You lost " + losses + " times.");