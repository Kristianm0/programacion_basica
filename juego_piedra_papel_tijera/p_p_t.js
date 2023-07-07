
//Create the vars
let player = 0
let max = 3
let min = 1

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let pc = aleatorio(1, 3)

// ask the values for user
player = prompt("Chose 1 rock, 2 paper, 3 scissor")

// Conditions
if(player == 1){
    alert("You chose rock")
} else if (player == 2){
    alert("You chose paper")
} else if (player == 3){
    alert("You chose scissor")
}
if(pc == 1){
    alert("Pc chose rock")
} else if (pc == 2){
    alert("Pc chose paper")
} else if (pc == 3){
    alert("Pc chose scissor")
}
//battle
if (pc == player){
    alert("Tie")
} else if(player == 1 && pc == 3) {
    alert("You win")
} else if (player == 2 && pc == 1) {
    alert("You win")
} else if (player == 3 && pc == 2) {
    alert("You win")
} else {
    alert("You Lost")
}