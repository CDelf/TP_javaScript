// Calcul de la somme de tous les entiers entre 1 et le nombre num
let num = 10;
let sum = 0;

for(let i=1; i<=num ; i++) {
    sum += i;
}

console.log(`Voici le résultat de la somme des entiers de 1 à ${num} : ${sum}`);