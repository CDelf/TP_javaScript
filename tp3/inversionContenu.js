// Copier le tableau mais dans le sens inverse. Afficher les 2 tableaux

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4]; 

// Copie du tableau dans le sens inverse
let arrayCopy = [];

for(let i=0; i<=array.length; i++) {
    arrayCopy[array.length-i] =array[i];
}

// Afficher les 2 tableaux
console.log(`Tableau original : ${array},
        tableau copié dans l'ordre inverse: ${arrayCopy}`);