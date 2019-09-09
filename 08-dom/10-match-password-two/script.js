/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener('click', () => {
        let mdp = document.getElementById("pass-one").value;
        let mdp2 = document.getElementById("pass-two").value;
        if (mdp != mdp2) {
            document.getElementById("pass-one").className = 'error';
            document.getElementById("pass-two").className = 'error';
        } else {
            document.getElementById("pass-one").className = '';
            document.getElementById("pass-two").className = '';
        }
    })
})();