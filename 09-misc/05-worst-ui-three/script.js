/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function cicle(elem) {

    let mybtn = elem;
    let minval = parseInt(mybtn.getAttribute('data-min'));
    let maxval = parseInt(mybtn.getAttribute('data-max'));
    let currval = parseInt(mybtn.value);
    if (currval == maxval) {
        mybtn.value = new String(`0${minval}`);
    } else if (currval < 9) {
        mybtn.value = new String(`0${currval + 1}`);
    } else
        mybtn.value = new String(currval + 1);
}

function cluster(e) {
    let idtime = e.target.getAttribute("data-timeout");
    if (idtime != null) {
        clearInterval(idtime);
        e.target.removeAttribute("data-timeout");
    } else {
        idtime = setInterval(() => {
            cicle(document.getElementById("part-one"));
        }, 500);
        e.target.setAttribute("data-timeout", idtime);
    }
}

(() => {
    document.getElementById('fix-part-one').addEventListener("click", (e) => {
        cluster(e);
    });
    document.getElementById('fix-part-two').addEventListener("click", (e) => {
        cluster(e);
    });
    document.getElementById('fix-part-three').addEventListener("click", (e) => {
        cluster(e);
    });
    document.getElementById('fix-part-four').addEventListener("click", (e) => {
        cluster(e);
    });
})();