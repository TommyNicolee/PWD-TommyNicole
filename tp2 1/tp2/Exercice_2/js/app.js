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