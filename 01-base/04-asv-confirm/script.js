/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let conf = false;
    while (conf == false) {
        let age = prompt("Quel age avez vous?");
        let genre = prompt("Male ou Femelle ?");
        let ville = prompt("De quel ville venez vous ?");

        conf = confirm("ville :" + ville + "age :" + age + "genre :" + genre);
    }

})();