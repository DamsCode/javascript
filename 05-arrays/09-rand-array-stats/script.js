/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let randArray = [];
        for (let index = 0; index < 10; index++) {
            randArray[index] = getRandomInt(100);

        }
        let somme = 0;
        randArray.forEach((element, index) => {
            let id = index + 1
            let strind = 'n-' + id;
            document.getElementById(strind).innerHTML = element;
            somme = somme + element;
        });
        document.getElementById('sum').innerHTML = somme;
        document.getElementById('average').innerHTML = somme / 10;
        document.getElementById('min').innerHTML = Math.min(...randArray);
        document.getElementById('max').innerHTML = Math.max(...randArray);

    });
})();