// Recherche le minimum dans un tableau

let array =  [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let min = 0;

for (let i in array) {
    if(array[i]<min) {
        min=array[i];
    }
} 
console.log(`La valeur maximale du tableau est : ${min}`);