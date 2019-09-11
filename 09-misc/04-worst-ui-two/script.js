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
    if (currval == maxval && minval > 10) {
        mybtn.value = new String(`${minval}`);
    } else if (currval == maxval) {
        mybtn.innerText = new String(`0${minval}`);
    } else if (currval < 9) {
        mybtn.innerText = new String(`0${currval + 1}`);
    } else {
        mybtn.innerText = new String(currval + 1);
    }
}