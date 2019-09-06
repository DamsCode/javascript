/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const obj = {
        lastname: "macors",
        firstname: "damien",
        country: "belgium"
    };

    document.getElementById("run").addEventListener("click", () => {
        console.log(obj.lastname + obj.firstname + obj.country);
    });
})();