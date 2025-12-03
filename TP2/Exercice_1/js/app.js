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
            
        })
});