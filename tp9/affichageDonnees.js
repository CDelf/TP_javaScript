function init() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://restcountries.com/v2/all');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = JSON.parse(req.responseText);
            // Cibler la div html et y afficher les données récupérées
            let content = document.querySelector('#content');
            content.innerHTML=`${JSON.stringify(data)}`
        }
    }
    req.send();
}

