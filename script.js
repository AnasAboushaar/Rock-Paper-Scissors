const possibility = ["rock", "paper", "scissors"];

/**
 * Math.random() genere un nombre entre 0.000 ..... et 0.9999
 */


const indexRandom = Math.floor(Math.random() * possibility.length);
console.log(indexRandom);
 
 // Recupere une valeur du tableau aleatoirement

const randomElement = possibility[indexRandom];

console.log(randomElement);

//Demande a l'utilisateur de choisir
// join() permet de reunir dans une chaine de caractere
// les valeurs issues d'un tableau


//Declare la constant a l'exterieur de la boucle pour 
// Eviter que celle-ci soit bloquee dans le bloc 
let response;

do{
    //toLowerCase() met une chaine de caractere en minuscule
     response = prompt(`${possibility.join(", ")}?`).toLowerCase();

} while(possibility.includes(response) === false);

// Includes() permet de verfier si la valeur passer en son 
//Parametre existe dans un tableau
let Winner;


if ( response === "rock" && randomElement === "scissors" || response === "scissors" && randomElement === "paper"|| response === "paper" && randomElement === "rock" ){
Winner = "Win"

}

else if ( response === randomElement) {
    Winner = "Draw"
}
else {
    Winner = "Lose"
}

let restart = confirm(`${Winner} Your choice : ${response}, IA : ${randomElement} . Play again ?`);
if(restart){
location.reload();
}
