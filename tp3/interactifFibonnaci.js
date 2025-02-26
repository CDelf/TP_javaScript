/* La suite de Fibonacci est une suite qui commence par 0 et 1 et 
dans laquelle le nombre de rang N est égal à la somme des nombres 
de rangs N-1 et N-2
• Déclarer une variable n qui contient le rang de la suite : let n = 10 ;
• Calculer et afficher la valeur de Fibonacci de rang n */

let n = 10;
let a = 0, b=1;
let suite;

for(i=2; i<=n; i++) { // l'itération commence à 2 pour "sauter" le 0 et le 1
    suite = a + b; // somme du dernier nombre avec 1 ou résultat de la somme précédente
    a = b; // décale le calcul vers la droite pour la prochaine itération
    b = suite; // assigne le résultat de la somme à b 
}
console.log(`La valeur de Fibonnaci de rang ${n} est ${suite}`);