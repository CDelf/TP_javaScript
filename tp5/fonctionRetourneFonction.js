/* Créer une fonction qui prend en paramètre un entier n et retourne une fonction qui
elle-même :
o Prend en paramètre un nombre nb
o Retourne ce nombre multiplié par n
• Invoquez cette fonction avec 2 valeurs de n différentes et stockez le résultat dans 2
variables différentes.
• Les variables ainsi retournées sont également des fonctions
3
• Invoquez ces fonctions avec un nombre nb et affichez le résultat */

function createMultiplier (n) {
    return function(nb) {
        return nb * n;
    }
}

// Création de deux fonctions multiplicatrices avec des valeurs différentes de n
const multiplyBy2 = createMultiplier(2);
const multiplyBy5 = createMultiplier(5);

// Invocation des fonctions avec un nombre nb
console.log(multiplyBy2(10)); // 20
console.log(multiplyBy5(10)); // 50