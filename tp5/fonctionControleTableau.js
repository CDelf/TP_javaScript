/* Créer une fonction qui vérifie le contenu d’un tableau
o Si le tableau ne contient que des nombres alors la fonction retourne true
o Sinon la fonction retourne false
• Réalisez 3 appels à cette fonction avec :
o Un tableau contenant des nombres
o Un tableau contenant des nombres et une chaine de caractères
o Un tableau vide. */

function checkTable(array) {
    if (array.length === 0) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            return false;
        }
    }
    return true;
}

// Tests
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 'hello', 3, 4];
const arr3 = [];

console.log(checkTable(arr1)); // true
console.log(checkTable(arr2));  // false
console.log(checkTable(arr3));  // false
