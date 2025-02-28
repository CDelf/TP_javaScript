function checkForm(event) {
    // Empêche la page de se rafraîchir à la soumission du formulaire
    event.preventDefault();
    //récuperer les inputs
    let nom = document.querySelector('#nom').value;
    let prenom = document.querySelector('#prenom').value;
    let dateNaiss = document.querySelector('#dateNaiss').value;
    // message à afficher 
    let message = '';

    // vérifier les inputs et conditionner le message à afficher
    if(!nom || nom == null) {
        message = `<span style="background-color:red;">"Le nom n'est pas renseigné."</span>`;
    } else if(!prenom || prenom == null) {
        message = `<span style="background-color:red;">"Le prénom n'est pas renseigné."</span>`;
    } else if(!dateNaiss || dateNaiss == null) {
        message = `<span style="background-color:red;">"La date de naissance n'est pas renseigné."</span>`;
    }else{
        message = `<span style="background-color:green;">"Tout est ok."</span>`;
    }
    // injecter le message dans le div prévu
    document.querySelector('#resultat').innerHTML = message;
}