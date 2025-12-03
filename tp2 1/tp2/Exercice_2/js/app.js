// Variables globales
let CDP = [];   // Liste des CDp provenant du JSON
let K = [];     // Liste des K provenant du JSON
let forces = []; // Définition des forces

document.addEventListener("DOMContentLoaded", () => {

    // Charger CDp et K
    fetch("http://localhost:8080/data_cdp_k.php")
        .then(r => r.json())
        .then(data => {
            CDP = data.data_cdp_k.cdp;  // [0.0206, 0.0465, 0.1386]
            K   = data.data_cdp_k.k;    // [0.0364, 0.0334, 0.0301]
        })

        // Charger les définitions des forces
    fetch("http://localhost:8080/definition_forces.php")
        .then(r => r.json())
        .then(data => {
            forces = data.definition_forces;
            afficherForces();
        })

    document.getElementById("btnCalc").addEventListener("click", calculerCD);
});

//Afficher les définitions des forces
function afficherForces() {
    const zone = document.getElementById("definition");

    let html = "<ul class='list-group'>";
    forces.forEach(f => {
        html += `
            <li class="list-group-item">
                <strong>${f.force}</strong><br>
                ${f.definition}
            </li>
        `;
    });
    html += "</ul>";

    zone.innerHTML = html;
}

//Fonction de calcul du CD
function calculerCD() {

    const flap = document.getElementById("flap").value; // "0" "20" "45"
    const mach = parseFloat(document.getElementById("mach").value);
    const cl = parseFloat(document.getElementById("cl").value);

    //Validation des entrées
    if (flap === "") {
        afficherResultat("Veuillez sélectionner un flap.");
        return;
    }

    if (isNaN(mach) || mach < 0 || mach > 0.85) {
        afficherResultat("Le Mach doit être entre 0 et 0.85.");
        return;
    }

    if (isNaN(cl) || cl < 0.2 || cl > 1.2) {
        afficherResultat("Le Cl doit être entre 0.2 et 1.2.");
        return;
    }
}