/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
  let somma = l1 * l2;
  return somma;
}
console.log("L'area del rettangolo associato è:", area(8, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
};
console.log(crazySum(3, 3));
console.log(crazySum(3, 7));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(val) {
  const diffAssoluta = Math.abs(val - 19);
  if (val < 19) {
    return diffAssoluta * 3;
  } else {
    return diffAssoluta;
  }
}
console.log(crazyDiff(30));
console.log(crazyDiff(17));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(66));
console.log(boundary(400));
console.log(boundary(200));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  let stringaDue = "EPICODE" + stringa;
  if (stringa.slice(0, 7) === "EPICODE") {
    return stringa;
  } else {
    return stringaDue;
  }
}

console.log(epify(" Ciao a tutti"));
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return "Il numero inserito è un multiplo di 3 oppure di 7";
  } else {
    return "Il numero inserito  non è un multiplo di 3 oppure di 7";
  }
}
console.log(check3and7(9));
console.log(check3and7(8));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa1) {
  return stringa1.split("");
}
console.log(upperFirst("hello world"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n3) {
  const arrayNumeri = [];
  for (i = 0; i <= n3; i++) {
    arrayNumeri[i] = Math.floor(Math.random() * 11);
  }
  return arrayNumeri;
}
console.log(giveMeRandom(3));
