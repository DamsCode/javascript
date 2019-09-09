/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let tab = document.createElement("table");
    for (let index = 0; index < 10; index++) {
        let tr = document.createElement("tr");
        tr.appendChild(document.createElement('td'));
        tab.appendChild(tr);
    }
    document.getElementById("target").appendChild(tab);
})();