/* Créer une fonction qui prend en paramètre une chaine de caractères.
• Cette fonction retourne cette chaine de caractères dans laquelle chaque mot a sa
première lettre mis en majuscule
• Exemple :
o Si je passe à cette fonction la chaine de caractères "Bonjour tout le monde"
o La fonction retourne alors "Bonjour Tout Le Monde"
• Astuce : Cette fonction utilisera la fonction précédente pour la mise en majuscule de la
première lettre de chaque mot. */

function getPhrCapitalized(text) {
    if (typeof text !== 'string') {
        return console.log("Erreur: L'entrée n'est pas un texte.");
    }
    let words = text.toLowerCase().split(' ');
    for(let i=0; i< words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return text = words.join(' ');
}

// test
console.log(getPhrCapitalized("bonjour tout le monde"));
console.log(getPhrCapitalized(3));
console.log(getPhrCapitalized("MOTS EN MAJUSCULES"));