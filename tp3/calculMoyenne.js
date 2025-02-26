// Calcul de la moyenne des nombres dans un tableau

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let sum = 0;

for(let i in array) {
    sum += array[i];
}
let moyenne = (sum / array.length).toFixed(2);

console.log(`La moyenne des valeurs du tableau est égale à : ${moyenne}`);