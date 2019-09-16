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
    let numero = targ.innerText;


    if (mybtn.id == "part-one") {
        if (currval == maxval) {
            let str = `+${minval}`;
            targ.innerText = str + numero.substr(4, numero.length);
            mybtn.innerText = new String(`${minval}`);
        } else {
            let str = `+${currval + 1}`;
            targ.innerText = str + numero.substr(4, numero.length);
            mybtn.innerText = new String(currval + 1);
        }
    } else if (mybtn.id == "part-two") {
        if (currval == maxval) {
            let str = `0${minval}`;
            targ.innerText = numero.substr(0, 4) + str + numero.substr(6, numero.length);
            mybtn.innerText = new String(`0${minval}`);
        } else if (currval < 9) {
            let str = `0${currval +1}`;
            targ.innerText = numero.substr(0, 4) + str + numero.substr(6, numero.length);
            mybtn.innerText = new String(`0${currval + 1}`);
        } else {
            let str = `${currval +1}`;
            targ.innerText = numero.substr(0, 4) + str + numero.substr(6, numero.length);
            mybtn.innerText = new String(`${currval + 1}`);
        }
    } else if (mybtn.id == "part-three") {
        if (currval == maxval) {
            let str = `0${minval}`;
            targ.innerText = numero.substr(0, 6) + str + numero.substr(8, numero.length);
            mybtn.innerText = new String(`0${minval}`);
        } else if (currval < 9) {
            let str = `0${currval +1}`;
            targ.innerText = numero.substr(0, 6) + str + numero.substr(8, numero.length);
            mybtn.innerText = new String(`0${currval + 1}`);
        } else {
            let str = `${currval +1}`;
            targ.innerText = numero.substr(0, 6) + str + numero.substr(8, numero.length);
            mybtn.innerText = new String(`${currval + 1}`);
        }
    } else if (mybtn.id == "part-four") {
        if (currval == maxval) {
            let str = `0${minval}`;
            targ.innerText = numero.substr(0, 8) + str;
            mybtn.innerText = new String(`0${minval}`);
        } else if (currval < 9) {
            let str = `0${currval +1}`;
            targ.innerText = numero.substr(0, 8) + str;
            mybtn.innerText = new String(`0${currval + 1}`);
        } else {
            let str = `${currval +1}`;
            targ.innerText = numero.substr(0, 8) + str;
            mybtn.innerText = new String(`${currval + 1}`);
        }
    }



}