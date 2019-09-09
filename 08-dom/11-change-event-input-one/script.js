/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("pass-one").addEventListener("keyup", (e) => {
        let str = e.target.value;
        if (str.length > 10) {
            e.target.value = str.substr(0, str.length - 1);
        } else
            document.getElementById('counter').innerHTML = `${str.length}/10`;
    })
})();