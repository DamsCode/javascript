/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let tab = document.createElement("table");
    for (let index = 1; index < 11; index++) {
        let tr = document.createElement("tr");
        let td = document.createElement('td');
        td.innerHTML = `${index} * 1 = ${index * 1}`;
        tr.appendChild(td);
        tab.appendChild(tr);
    }
    document.getElementById("target").appendChild(tab);
})();