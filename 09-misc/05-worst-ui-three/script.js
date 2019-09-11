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
    let myelem = elem;
    let minval = parseInt(myelem.getAttribute("data-min"));
    let maxval = parseInt(myelem.getAttribute("data-max"));
    let currval = parseInt(myelem.value);
    let valtarget = new Number(document.getElementById('target').innerHTML);


    if (currval == maxval && minval > 10) {
        myelem.value = new String(`${minval}`);
    } else if (currval == maxval) {
        myelem.value = new String(`0${minval}`);
    } else if (currval < 9) {
        myelem.value = new String(`0${currval + 1}`);
    } else {
        myelem.value = new String(currval + 1);
    }
}

function cluster(e) {
    let idtime = e.getAttribute("data-timeout");

    if (idtime != null) {
        clearInterval(idtime);
        e.removeAttribute("data-timeout");
    } else {
        idtime = setInterval(() => {
            cicle(e.parentNode.firstChild.nextSibling);
        }, 500);
        e.setAttribute("data-timeout", idtime);
    }
}

(() => {
    document.getElementById("fix-part-one").addEventListener("click", e => {
        cluster(e.target);
    });
    document.getElementById("fix-part-two").addEventListener("click", e => {
        cluster(e.target);
    });
    document.getElementById("fix-part-three").addEventListener("click", e => {
        cluster(e.target);
    });
    document.getElementById("fix-part-four").addEventListener("click", e => {
        cluster(e.target);
    });
})();