/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let increm = localStorage.getItem("incre");
    if (increm != null) {
        document.getElementById("target").innerText = increm;
    }

    document.getElementById("increment").addEventListener('click', () => {
        if (increm == null) {
            increm = 1;
        } else {
            increm++;
        }
        document.getElementById("target").innerText = increm;
        localStorage.setItem("incre", increm);
    })
})();