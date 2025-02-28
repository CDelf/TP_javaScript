function add() {
    // Récupère les valeurs input de a et b 
    let a = Number(document.querySelector('#n1').value);
    let b = Number(document.querySelector('#n2').value);
    let message = '';
    // additionner
    if ((!a || typeof a !== 'number') || (!b || typeof b !== 'number')) {
        message = `<span style="background-color:red;">
                    Vous devez saisir des nombres.</span>`;
    } else {
        let sum = a+b; // l'ajout du + avant convertit en number
        message = `<span style="background-color:green;">
                    Le résultat de l’addition est : ${sum}</span>`;
    }
    // injecter le résultat dans la div prévue
    document.querySelector('#resultat').innerHTML = message;
}