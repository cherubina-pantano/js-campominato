/*
Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/



// BONUS - SCELTA LIVELLI DIFFICOLTA
var level = parseInt( prompt('Scegli il livello di difficoltà:\n0 \n1 \n2').trim() ) ;

while (isNaN(level) || !(level >= 0 && level <= 2) ) {
  level = parseInt( prompt('Livello errato! \nScegli il livello di difficoltà:\n0 \n1 \n2').trim() );
}

var maxRange;

switch (level) {
  case 0:
   maxRange = 20;
    break;
  case 1:
   maxRange = 80;
    break;
  case 2:
   maxRange = 50;
    break;
  default:
   maxRange = 100;
}


// Genera  16 num casuali (bombe) tra 1 e 100  
var listNumBomb = [];
var sizeListNumBomb = 16;

var tryUser = maxRange - sizeListNumBomb;


while (listNumBomb.length < sizeListNumBomb) {
  var number = computerRandNumber(1, maxRange);

  if (! listNumBomb.includes(number)) {
    listNumBomb.push(number);
  }

}
console.log(listNumBomb);



// Numeri utente
var listUserNum = [];
console.log(listUserNum);

//  Per tenere traccia del punteggio (score = tentativi del giocatore) e se il giocatore vince o perde (loose)
var loose = false;
var score = 0;

// Loop finchè il giocatore non ha raggiunto il num max tentativi o perde (bomba, num vietato, se non inserisce num)
while (listUserNum.length < tryUser && !loose) {

  var userNum = parseInt( prompt('Inserisci un numero').trim() );
  console.log(userNum);


  if (!listUserNum.includes(userNum) && !isNaN(userNum) && (userNum >= 1 && userNum <= maxRange) ) {
    listUserNum.push(userNum);
    score++;

    if (listNumBomb.includes(userNum)) {
      alert('Hai trovato una bomba! Hai perso! Il tuo punteggio è: ' + score);
      loose = true;
    }

  }
  else if (listUserNum.includes(userNum)){
     alert('Attenzione: il numero inserito non è valido!\nHai perso! Il tuo punteggio è: ' + score);
     loose = true;
  }
  else if (isNaN(userNum)){
    alert('Attenzione: il valore inserito non è un numero!\nHai perso! Il tuo punteggio è: ' + score);
    loose = true;
  }
  else {
    alert('Attenzione: il numero inserito non è valido!\nHai perso! Il tuo punteggio è: ' + score);
    loose = true;
  }

}

if (!loose) {
  alert('Hai vinto con punteggio '+ score + '!');
}



// Generazione numero random per computer
function computerRandNumber(min, max) {
  var random = Math.floor( Math.random() * max - min + 1) + min;

  return random;
}



// *************************************************************************************************************************
// Funzione per verificare presenza di un numero all'interno di un array
// function checkNum(numb, listNumb) {
//
//   for (var i = 0; i < listNumb.length; i++) {
//     var number = listNumb[i];
//
//     if (numb == listNumb[i]) {
//      return true;
//     }
//   }
//   return false;
//
// }
