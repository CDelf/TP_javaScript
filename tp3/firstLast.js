/* Déclarer un tableau d’entiers
• On calcule une valeur booléenne qui contrôle le tableau de la sorte :
o elle vaut true si le tableau est de longueur supérieure ou égale à 1 et que le
premier et le dernier élément du tableau ont la même valeur
o elle vaut false dans les autres cas */

let firstLast; // booleen
let array = [1, 2, 3, 4, 1]; // tableau à tester

array.length>=1 && (array[0] === array[array.length-1] ) ? 
    firstLast = true : firstLast = false;

    console.log(firstLast);