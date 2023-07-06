// 1 es papel. 2 es piedra. 3 es tijera

//Creamos unas variables
let jugador = 0
let pc = 2

// le pedimos al usuario que eliga una opcion apartir de un numero 
jugador = prompt("Elige 1 tijera, 2 papel, 3 tijera")
//alert("Elige "+jugador)

// Usamos unas condicionales
if(jugador == 1){
    alert("Elegiste piedra")
} else if (jugador == 2){
    alert("Elegistes papel")
} else if (jugador == 3){
    alert("Elegistes tijera")
}
