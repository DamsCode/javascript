/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let linkatt = document.getElementById("source").getAttribute("data-image");
    let imgelem = document.createElement("img");
    imgelem.setAttribute('src', linkatt);
    document.getElementById("target").append(imgelem);
    document.getElementsByClassName('material').item(0).removeChild(document.getElementById("source"));

    // your code here
})();