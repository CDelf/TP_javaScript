// Compter le nombre d'éléments communs entre 2 tableaux

let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4] ;
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8] ;
let count = 0;

for(let i in array1) {
    for(let j in array2) {
        if (array1[i] === array2[j]) {
            count++
        }
    }
}

console.log(`Les tableaux array1 et array2 ont ${count} éléments communs.`);
