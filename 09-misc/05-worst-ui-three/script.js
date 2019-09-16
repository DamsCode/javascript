/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function cicle(mybtn) {
    let myelem = mybtn.parentNode.firstChild.nextSibling;
    let minval = parseInt(myelem.getAttribute("data-min"));
    let maxval = parseInt(myelem.getAttribute("data-max"));
    let currval = parseInt(myelem.value);
    let targ = document.getElementById("target");
    let numero = targ.innerText;

    if (mybtn.id == "fix-part-one") {
        if (currval == maxval) {
            let str = `+${minval}`;
            targ.innerText = str + numero.substr(4, numero.length);
            myelem.value = new String(`${minval}`);
        } else {
            let str = `+${currval + 1}`;
            targ.innerText = str + numero.substr(4, numero.length);
            myelem.value = new String(currval + 1);
        }
    } else if (mybtn.id == "fix-part-two") {
        if (currval == maxval) {
            let str = `0${minval}`;
            targ.innerText = numero.substr(0, 4) + str + numero.substr(6, numero.length);
            myelem.value = new String(`0${minval}`);
        } else if (currval < 9) {
            let str = `0${currval +1}`;
            targ.innerText = numero.substr(0, 4) + str + numero.substr(6, numero.length);
            myelem.value = new String(`0${currval + 1}`);
        } else {
            let str = `${currval +1}`;
            targ.innerText = numero.substr(0, 4) + str + numero.substr(6, numero.length);
            myelem.value = new String(`${currval + 1}`);
        }
    } else if (mybtn.id == "fix-part-three") {
        if (currval == maxval) {
            let str = `0${minval}`;
            targ.innerText = numero.substr(0, 6) + str + numero.substr(8, numero.length);
            myelem.value = new String(`0${minval}`);
        } else if (currval < 9) {
            let str = `0${currval +1}`;
            targ.innerText = numero.substr(0, 6) + str + numero.substr(8, numero.length);
            myelem.value = new String(`0${currval + 1}`);
        } else {
            let str = `${currval +1}`;
            targ.innerText = numero.substr(0, 6) + str + numero.substr(8, numero.length);
            myelem.value = new String(`${currval + 1}`);
        }
    } else if (mybtn.id == "fix-part-four") {
        if (currval == maxval) {
            let str = `0${minval}`;
            targ.innerText = numero.substr(0, 8) + str;
            myelem.value = new String(`0${minval}`);
        } else if (currval < 9) {
            let str = `0${currval +1}`;
            targ.innerText = numero.substr(0, 8) + str;
            myelem.value = new String(`0${currval + 1}`);
        } else {
            let str = `${currval +1}`;
            targ.innerText = numero.substr(0, 8) + str;
            myelem.value = new String(`${currval + 1}`);
        }
    }
}

function cluster(e) {
    let idtime = e.getAttribute("data-timeout");

    if (idtime != null) {
        clearInterval(idtime);
        e.removeAttribute("data-timeout");
    } else {
        idtime = setInterval(() => {
            cicle(e);
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