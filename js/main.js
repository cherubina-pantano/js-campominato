/*
Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
*/


// Genera --3 num (debug)-- 16 num casuali (bombe) tra 1 e 100   --tra 1 e 10 (debug)---
var listNumBomb = [];
var sizeListNumBomb = 3;

while (listNumBomb.length < sizeListNumBomb) {
  var number = computerRandNumber(1, 10);

  if (! listNumBomb.includes(number)) {
    listNumBomb.push(number);
  }

}
console.log(listNumBomb);

// Numeri utente
var userNum = parseInt( prompt('Inserisci un nunero').trim() );
console.log(userNum);
var listUserNum = [];
console.log(listUserNum);

while (listUserNum.length < 10) {
  var checkUserNum = checkNum(userNum, listNumBomb);

  if (! listUserNum.includes(userNum)) {
    listNumBomb.push(userNum);
  }
  else if (userNum == checkUserNum) {
     console.log('Hai colpito una bomba! Hai perso!');
  }
  else {
    userNum = parseInt( prompt('Inserisci un nunero').trim() );
  }



  // if (userNum == checkUserNum) {
  //   console.log('Hai colpito una bomba! Hai perso!');
  // }
  // else {
  //   userNum = parseInt( prompt('Inserisci un nunero').trim() );
  // }

}


// Funzione per verificare presenza di un numero all'interno di un array
function checkNum(numb, listNumb) {

  if (numb == listNumb) {
   return true;
  }
  return false;
}

// Generazione numero random per computer
function computerRandNumber(min, max) {
  var random = Math.floor( Math.random() * max - min + 1) + min;

  return random;
}
