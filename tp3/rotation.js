/* • Déclarer un tableau d’entiers
• Effectuez une rotation à droite des éléments.
• Exemple : si vous avez [0,1,2,3] dans le tableau, le tableau contiendra [3,0,1,2] après
rotation */
let array= [0, 1, 2, 3];

if (array.length > 1) {
    array.unshift(array.pop()); // Retire le dernier élément et le place en premier
}

console.log(array);