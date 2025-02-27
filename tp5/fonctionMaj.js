/* Créer une fonction qui prend en paramètre une chaine de caractères.
• Cette fonction retourne la chaine de caractères passée en paramètre avec la première
lettre en majuscule. */

function getPhrCapitalized(text) {
    if (typeof text !== 'string') {
        return console.log("Erreur: L'entrée n'est pas un texte.");
    }
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// test
console.log(getPhrCapitalized("bonjour tout le monde"));
console.log(getPhrCapitalized(3));
console.log(getPhrCapitalized("MOTS EN MAJUSCULES"));

