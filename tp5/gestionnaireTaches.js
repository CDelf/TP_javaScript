/* Dans cet exercice nous allons créer un objet littéral 
permettant de gérer des tâches et qui doit permettre :
1. D'ajouter des tâches avec une description.
2. De marquer une tâche comme terminée.
3. D'afficher toutes les tâches, en précisant lesquelles sont terminées ou non.
Instructions :
• Créez une fonction creerGestionnaire() qui retourne un objet littéral contenant :
• Une propriété tableau de taches
• les méthodes suivantes :
o ajouterTache(description) : ajoute une nouvelle tâche.
o terminerTache(index) : marque une tâche comme terminée, en fonction de
son index.
o afficherTaches() : affiche toutes les tâches avec leur état (terminée ou non).
• Une tâche est représentée par un objet avec deux propriétés :
o description : la description de la tâche.
o terminee : un booléen indiquant si elle est terminée.
• Testez le gestionnaire en ajoutant, terminant et affichant des tâches. */

function creerGestionnaire() {
    return {
        taches: [],

        ajouterTache(description) {
            this.taches.push({ description, terminee: false });
        },

        terminerTache(i) {
            if (i >= 0 && i < this.taches.length) {
                this.taches[i].terminee = true;
            } else {
                console.log("Index invalide");
            }
        },

        afficherTaches() {
            this.taches.forEach((tache, index) => {
                console.log(`${index + 1}. ${tache.description} - ${tache.terminee ? "Terminée" : "En cours"}`);
            });
        }
    };
}

// Test du gestionnaire
const gestionnaire = creerGestionnaire();
gestionnaire.ajouterTache("Faire des courses");
gestionnaire.ajouterTache("Aller à la piscine");
gestionnaire.afficherTaches(); // Affichage des tâches avant màj

gestionnaire.terminerTache(0);
gestionnaire.afficherTaches(); // Affichage après màj