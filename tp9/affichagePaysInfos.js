function init() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://restcountries.com/v2/all');

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status === 200) {
            let data = JSON.parse(req.responseText);
            let content = document.querySelector('#content');
            let display = '<ul>';

            // Boucle pour récupérer et afficher directement les infos
            data.forEach(d => {
                let nom = d.name || "Nom inconnu";
                let capitale = d.capital || "Pas de capitale";
                let population = d.population ? d.population.toLocaleString() : "Non renseignée";
                let region = d.region || "Région inconnue";

                display += `<li><strong>${nom}</strong> : ${capitale}, ${population} habitants, ${region}.</li>`;
            });
            display += '</ul>';
            content.innerHTML = display;
        } else {
            console.error("Erreur HTTP: " + req.status);
        }
    };
    req.send();
    }
