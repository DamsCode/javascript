/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




(() => {
    let index = 0;
    let str = document.getElementById("target").innerHTML;
    document.getElementById("target").innerHTML = "";
    let speed = 50;

    function typeWriter() {
        if (index < str.length) {
            document.getElementById("target").innerHTML += str.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
})();