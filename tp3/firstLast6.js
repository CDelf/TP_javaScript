/* Déclarez un tableau d’entiers
• On calcule une valeur booléenne qui contrôle le tableau de la sorte :
o elle vaut true si le tableau a au moins 1 élément et si le premier élément ou le
dernier élément vaut 6.
o elle vaut false dans les autres cas */

let firstLast6; // booléen
let array = [10, 5, 8, 6]; // Entrer ici le tableau à tester

array.length>0 && (array[0] == 6 || array[array.length-1] == 6 ) ? 
    firstLast6 = true : firstLast6 = false;

    console.log(firstLast6);