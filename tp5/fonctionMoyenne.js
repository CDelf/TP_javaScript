/* Créer une fonction qui calcule et retourne la moyenne d’un tableau passé en
paramètre.
• Cette fonction doit retourner un message d’erreur dans le cas où un élément du
tableau n’est pas un nombre
• Réalisez 3 appels à cette fonction avec :
o Un tableau contenant des éléments
o Un tableau vide. Que se passe-t-il dans ce second cas ? Faites-en sorte que
votre fonction retourne 0 dans le cas où le tableau est vide.
o Une chaine de caractères. Que se passe-t-il dans ce troisième cas ? */

function getAvgFromTable(array) {
    //vérifications de conformité
    if (array.length === 0) {
        return console.log('0');
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            return console.log('Erreur: le tableau ne doit contenir que des nombres.')
        }
    }
    // Calcul
    let sum = 0;
    for(let j=0; j<array.length; j++) {
        sum += array[j];
    }
    return console.log(`${sum/array.length}`);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 'hello', 3, 4];
const arr3 = [];
getAvgFromTable(arr1); // 3
getAvgFromTable(arr2); // message d'erreur
getAvgFromTable(arr3); // 0