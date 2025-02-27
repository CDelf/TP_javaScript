/* Ecrivez une fonction qui prend 2 nombres a et b en paramètres 
et retourne le résultat suivant : a * b + a + b
• Appelez cette méthode avec 2 nombres quelconques et affichez le résultat d’appel
• Que se passe t’il si vous appelez cette fonction non pas avec des nombres mais avec
des chaines de caractères ? Faites le test. */

function calculate(a,b) {
    return a * b + a + b;
}

console.log(calculate(1,2));    // 5
console.log(calculate(5,1));  // 11
console.log(calculate('a','b'));    //NaNab, concaténation de a*n= NaN puis de a+b