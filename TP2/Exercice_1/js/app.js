document.addEventListener("DOMContentLoaded", () => {

    fetch("http://localhost:8080/params_grille_nombres.php")
        .then(response => response.json())
        .then(data => {

            //Récupération des paramètres du JSON
            const params = data.parametres_tableau;

            const nbColonnes = params.nombre_colonnes;
            const nbLignes = params.nombre_lignes;

            const min = params.plage_nombres_aleatoires.nombre_minimum;
            const max = params.plage_nombres_aleatoires.nombre_maximum;

            const seuil = params.nombre_base;

            const couleurFond = params.couleur_fond_cellule;
            const couleurTexte = params.couleur_texte_cellule;

            //Création du tableau
            const table = document.createElement("table");
            table.style.borderCollapse = "collapse";
            table.style.margin = "auto";

            //Génération des lignes/colonnes
            for (let l = 0; l < nbLignes; l++) {
                const ligne = document.createElement("tr");

                for (let c = 0; c < nbColonnes; c++) {

                    const cell = document.createElement("td");

                    //utiliser _.random(min, max)
                    const value = _.random(min, max);
                    cell.textContent = value;

                    // Style des cellules
                    cell.style.border = "1px solid #ccc";
                    cell.style.padding = "6px";
                    cell.style.width = "40px";
                    cell.style.textAlign = "center";

                    // Coloration si > seuil
                    if (value > seuil) {
                        cell.style.backgroundColor = couleurFond;
                        cell.style.color = couleurTexte;
                        nbPlusSeuil++;
                    }

                    ligne.appendChild(cell);
                }

                table.appendChild(ligne);
            }

            // Ajouter un titre centré
            const titre = document.createElement("h1");
            titre.textContent = "Tableau de nombres";
            titre.style.textAlign = "center";
            titre.style.margin = "30px 0";
            document.body.appendChild(titre);
        })
});