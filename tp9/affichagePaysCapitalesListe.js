let countriesData = []; 
let sortAscending = true;

function init() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://restcountries.com/v2/all', true);

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            countriesData = JSON.parse(req.responseText);
            displayData(countriesData);
        }
    };
    req.send();
}

function displayData(data) {
    let content = document.querySelector('#corps');
    let display = '';

    data.forEach(d => {
        let nom = d.name || "Nom inconnu";
        let capitale = d.capital || "Pas de capitale";
        let population = d.population ? d.population.toLocaleString() : "Non renseignée";
        let region = d.region || "Région inconnue";

        display += `<tr>
                        <td>${nom}</td>
                        <td>${capitale}</td> 
                        <td>${population}</td>
                        <td>${region}</td>
                    </tr>`;
    });

    content.innerHTML = display;
}

function sortTable() {
    if (countriesData.length === 0) return;

    sortAscending = !sortAscending;

    countriesData.sort((a, b) => sortAscending ? a.population - b.population : b.population - a.population);

    let sortIcon = document.querySelector("#sortIcon");
    sortIcon.src = sortAscending ? "arrow-up.png" : "arrow-down.png"; 

    displayData(countriesData);
}
