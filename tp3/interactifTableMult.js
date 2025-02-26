/* Ecrire un programme qui, pour une variable donnée entre 1 et 10, 
affiche sa table de multiplication. */

function getTableMult(n) {
    if(n>0 && n<=10) {
        for(let i=1; i<=10; i++) {
            console.log(
                `${n} x ${i} = ${n * i}`
            );
        }
    } else {
        console.log("Le nombre doit être compris entre 1 et 10.")
    }
}

