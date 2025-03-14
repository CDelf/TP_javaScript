// Récupérer les données format JSON
fetch('https://digicode.cleverapps.io/json/pays/pollution')
    .then(function(res) {
        if (res.status != 200) {
            throw new Error("HTTP error! Status: " + res.status);
        }
        return res.json();
    })
    .then(function(data) {
        console.log(JSON.stringify(data));
    
        // récupérer drapeaux
    drapeaux = [];
    data.pays.forEach(p => {
        drapeaux.push(`<img src="https://flagcdn.com/24x18/${p.code}.png"></img>`);
    });

    // cibler les éléments html
    let h1 = document.querySelector('#titre');
    let h2 = document.querySelector('#annee');
    let tbody = document.querySelector('#corps');

    // Titres
    h1.innerHTML = `Pays les plus polluants pour le ${data.polluant} (en ${data.unite})`;
    h2.innerHTML = `en ${data.annee}`;

    //Remplir tableau ligne par ligne
    let htmlTableau = '<tr>';
    for(let i=0; i<data.pays.length; i++) {
        htmlTableau += `<tr><td>${drapeaux[i]} ${data.pays[i].nom}</td>
        <td>${data.pays[i].valeur}</td> <td>${data.pays[i].pourcentage}</td></tr>`;
    }
    htmlTableau += '</tr>';
    tbody.innerHTML = htmlTableau;
});
