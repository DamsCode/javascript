/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let tabcolor = ['blue', 'red', 'black', 'yellow', 'cyan'];
        let min = 0;
        let max = 4;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
        document.body.style.backgroundColor = tabcolor[random];
    });
})();