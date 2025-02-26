// A partir d'un tableau, faire des affichages respectant des conditions données

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Entiers positifs supérieurs à 3
console.log("Entiers du tableau supérieurs à 3: ");
for(let i=0; i<=array.length; i++) {
    if(array[i] > 3) {
        console.log(`${array[i]}`);
    }
}

// Entiers pairs
console.log("Entiers pairs du tableau: ")
for(let j=0; j<=array.length; j++) {
    if(array[j]%2 === 0) {
        console.log(`${array[j]}`);
    }
}

// Indices pairs
console.log("Eléments dont l'indice est pair:");
for(let k=0; k<=array.length; k++) {
    if(k%2 === 0) {
        console.log(`${array[k]}, dont l'indice est ${k}`)
    }
}

// Entiers impairs
console.log("Entiers impairs du tableau: ")
for(let l=0; l<=array.length; l++) {
    if(array[l]%2 != 0) {
        console.log(`${array[l]}`);
    }
}