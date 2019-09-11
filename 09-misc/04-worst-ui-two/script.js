/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('part-one').addEventListener("click", (e) => {
        cicle(e);
    });
    document.getElementById('part-two').addEventListener("click", (e) => {
        cicle(e);
    });
    document.getElementById('part-three').addEventListener("click", (e) => {
        cicle(e);
    });
    document.getElementById('part-four').addEventListener("click", (e) => {
        cicle(e);
    });
})();

function cicle(e) {
    let mybtn = e.target;
    let minval = parseInt(mybtn.getAttribute('data-min'));
    let maxval = parseInt(mybtn.getAttribute('data-max'));
    let currval = parseInt(mybtn.innerText);
    let targ = document.getElementById("target");
    let numero = parseInt(targ.innerText.substr(1, targ.length));

    if (currval == maxval && minval > 10) {
        targ.innerText = `+${numero +minval}`;
        mybtn.innerText = new String(`${minval}`);
    } else if (currval == maxval) {
        targ.innerText = `+${numero +minval}`;
        mybtn.innerText = new String(`0${minval}`);
    } else if (currval < 9) {
        targ.innerText = `+${numero + currval + 1}`;
        mybtn.innerText = new String(`0${currval + 1}`);
    } else {
        targ.innerText = `+${numero + currval + 1}`;
        mybtn.innerText = new String(currval + 1);
    }
}