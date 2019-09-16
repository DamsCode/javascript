/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function getRandomArbitraryInt(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

(() => {
    let randnum = getRandomArbitraryInt(1, 101);
    let compteur = 0;
    let essai = 0;;
    essai = parseInt(prompt("Devine le au quel je pense (nombre entier entre 1 et 100)"));
    while (essai != randnum) {
        if (isNaN(essai)) {
            alert("veillez entrez un numéro.");
        } else if (essai < randnum) {
            alert("Plus grand");
            compteur++;
        } else if (essai > randnum) {
            alert("Plus petit");
            compteur++;
        }
        essai = parseInt(prompt("Devine le au quel je pense (nombre entier entre 1 et 100)"));
    }
    alert(`Félicitation tu as trouvé le bon numéro en ${compteur} essais`);
})();