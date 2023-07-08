
//Create the vars
let player = 0
let max = 3
let min = 1

//Sentences
let ch_user = "You chose "
let ch_pc = "Pc chose "

let win_u = "You win"
let lost_u = "You lost"

let win_pc = "PC win"

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)}






    let pc = aleatorio(1, 3)


// ask the values for user
player = prompt("Chose 1 rock, 2 paper, 3 scissor")

// Conditions
if(player == 1){
    alert(ch_user + "rock")
} else if (player == 2){
    alert(ch_user + "paper")
} else if (player == 3){
    alert(ch_user +"scissor")
}
if(pc == 1){
    alert(ch_pc + "rock")
} else if (pc == 2){
    alert(ch_pc + "paper")
} else if (pc == 3){
    alert(ch_pc + "scissor")
}
//battle
if (pc == player){
    alert("Tie")
} else if(player == 1 && pc == 3) {
    alert(win_u)
} else if (player == 2 && pc == 1) {
    alert(lost_u)
} else if (player == 3 && pc == 2) {
    alert(win_u)
} else {
    alert(win_pc)
}