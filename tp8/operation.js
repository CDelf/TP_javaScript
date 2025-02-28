
function calculate() {
    // récupérer  les valeurs des entrées
    let op = document.querySelector('#op').value;
    let n1 = Number(document.querySelector('#n1').value);
    let n2 = Number(document.querySelector('#n2').value);

    // variables pour le résultat
    let result = 0;
    let operation = '';
    let message = '';

    // calcul 
    switch(op) {
        case '+':
            result = n1+n2;
            operation = "l'addition";
            break;
        case '-':
            result = n1-n2;
            operation = 'la soustraction';
            break;
        case '*':
            result = n1*n2;
            operation = 'la multiplication';
            break;
        case '/':
            if(n2 == 0) {
                throw 'Impossible de diviser par 0';
            } else {
                result = n1/n2;
                operation = 'la division';
                break;
        }
    }
    // conditionner le message à afficher
    if ((!n1 || typeof n1 !== 'number') || (!n2 || typeof n2 !== 'number')) {
        message = `<span style="background-color:red;">
                    Vous devez saisir des nombres.</span>`;
    } else {
        message = `<span style="background-color:green;">
                    Le résultat de ${operation} est: ${result} </span>`; 
    }
        // Afficher le résultat dans la div prévue
        document.querySelector('#resultat').innerHTML = message;
}
