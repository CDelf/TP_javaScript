// Créer un tableau qui contient la somme de 2 autres tableaux

let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

let array = [];
let maxLength = Math.max(array1.length, array2.length);

for(let i=0; i<=maxLength; i++) {
    array.push(array1[i]+array2[i]);
}

console.log(`Résultat de la somme des 2 tableaux: ${array}`);