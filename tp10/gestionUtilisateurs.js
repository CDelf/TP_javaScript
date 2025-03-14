let utilisateurs = [];
let idCreateur = 'EssaiCD';

fetchUtilisateurs();

// Afficher les utilisateurs dans le tableau
function fetchUtilisateurs() {
    fetch("https://digicode.cleverapps.io/utilisateurs/")
    .then(function(res) {
        if (res.status !== 200) {
            throw new Error("HTTP error! Status: " + res.status);
        }
        return res.json();
    })
    .then(function(json) {
        utilisateurs = json;
        displayData(utilisateurs);
    });
}

    function displayData(data) {
        let tbody = document.querySelector('#corps');
        //Remplir tableau ligne par ligne
        let htmlTableau = '';
        data.forEach(d => {
                htmlTableau += `<tr><td><strong>${d.nom}</strong></td>
                <td>${d.prenom}</td> <td>${d.dateNaissance}</td> <td>${d.lieuNaissance}</td>
                <td>${d.numeroRue} ${d.libelleRue} ${d.codePostal} ${d.ville}</td>
                <td><img onclick="deleteHandler(id)" id=${d.id} class="img" src="delete.png" height="20" alt="suppression utilisateur"></td></tr>`;
        });
        tbody.innerHTML = htmlTableau;
    }

// Créer un utilisateur
function creerUtilisateur() {
    // Récupération des valeurs des champs du formulaire
    let utilisateur = {
        identiteCreateur : idCreateur, 
        nom : document.querySelector('#nom').value,
        prenom : document.querySelector('#prenom').value,
        genre : document.querySelector('#genre').value,
        dateNaissance : document.querySelector('#dateNaiss').value,
        lieuNaissance : document.querySelector('#lieuNaiss').value,
        departementNaissance : document.querySelector('#depNaiss').value,
        numeroRue : document.querySelector('#numRue').value,
        libelleRue : document.querySelector('#libRue').value,
        codePostal : document.querySelector('#cp').value,
        ville : document.querySelector('#ville').value
    };
    console.log(JSON.stringify(utilisateur));
    // Configuration de la requête
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(utilisateur)
    };

    // Envoi de la requête à l'API
    fetch("https://digicode.cleverapps.io/utilisateurs/", requestOptions)
        .then(res => {
            if (res.status !== 200) {
                console.log(res);
                throw new Error(`Erreur HTTP : ${res.status}, ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            console.log("Utilisateur créé avec succès :", data);
            alert("Utilisateur créé avec succès !");
            closeModale('modale1'); 
        })
        .catch(error => console.error("Erreur:", error));
}
// delete : communique le id à supprimer dans le module
function deleteHandler(id) {
    openModale('modale3')
}


// Supprimer l'utilisateur
function supprimerUtilisateur() {
    // Récupérer l'utilisateur avec son id
    let utilisateur = utilisateurs.find(u => u.id == id);
    if(!utilisateur) {
        throw new Erreur('Utilisateur introuvable.');
    }
    // requête
    let requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch(`https://digicode.cleverapps.io/utilisateurs/${idCreateur}/${id}`, requestOptions)
        .then(res => {
            if (res.status !== 200) {
                throw new Error(`Erreur HTTP : ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log("Utilisateur supprimé :", data);
            alert("Utilisateur supprimé !");
            closeModale('modale3'); 
        })
        .catch(error => console.error("Erreur:", error));
}