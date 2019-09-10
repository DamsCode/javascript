/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let theText = "Bon je suis oklm devant mon pc";

    function nextSize(i, incMethod, textLength) {
        if (incMethod == 1) return 35 * Math.abs(Math.sin(i / (textLength / 3.14)));
        if (incMethod == 2)
            return 255 * Math.abs(Math.cos(i / (textLength / 3.14)));
    }

    function sizeCycle(text, method, dis) {
        output = "";
        for (i = 0; i < text.length; i++) {
            size = parseInt(nextSize(i + dis, method, text.length));
            output +=
                "<font style='font-size: " +
                size +
                "pt'>" +
                text.substring(i, i + 1) +
                "</font>";
        }
        document.getElementById("target").innerHTML = output;
    }

    function do_vague(n) {
        sizeCycle(theText, 1, n);
        if (n > theText.length) {
            n = 0;
        }
        setTimeout(() => {
            do_vague(n + 1);
        }, 50);
    }
    document.getElementById("target").addEventListener("load", do_vague(2));
})();