/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    document.getElementById("next").addEventListener("click", () => {
        let ind = gallery.findIndex((element, index) => document.getElementsByTagName('img')[0].getAttribute('src') === element);

        if (ind + 1 == gallery.length) {
            document.getElementsByTagName('img')[0].setAttribute('src', gallery[0]);
        } else
            document.getElementsByTagName('img')[0].setAttribute('src', gallery[ind + 1]);
    });

})();