// Affichage d'un tableau puis dans le sens inverse. Copier le tableau.
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4]; 

// dans le sens original avec une boucle in
for (let num in array)  {
    console.log(array[num]);
}

// dans le sens inverse avec une boucle for
for(let i=array.length-1; i>=0; i--) {
    console.log(array[i]);
}

// créer une copie du tableau
let arrayCopy = array.slice();

console.log(`${arrayCopy}`);