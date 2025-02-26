/* Création d'un tableau résultant de la somme 
de 2 autres tableaux de tailles différentes. 
 */

let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];

let array = [];

let maxLength = Math.max(array1.length, array2.length);

for (let i = 0; i < maxLength; i++) {
    let val1 = array1[i] !== undefined ? array1[i] : 0;
    let val2 = array2[i] !== undefined ? array2[i] : 0;
    array.push(val1 + val2);
}

console.log(`Résultat de la somme des 2 tableaux: ${array}`);