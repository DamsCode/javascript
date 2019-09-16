/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("pass-one").addEventListener("change", e => {
        let str = e.target.value;
        let nbdigit = 0;
        for (let index = 0; index < str.length; index++) {
            let element = str.charAt(index);
            if (!Number.isNaN(Number(element))) {
                nbdigit++;
            }
        }

        if (str.length >= 8 && nbdigit >= 2) {
            document.getElementById("validity").innerHTML = `ok`;
        } else {
            document.getElementById("validity").innerHTML = `Pas ok`;
        }
    });
})();