/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [{
            name: "mouette",
            fem: true
        },
        {
            name: "corbeau"
        },
        {
            name: "mésange",
            fem: true
        },
        {
            name: "hibou"
        },
        {
            name: "buse",
            fem: true
        },
        {
            name: "pigeon"
        },
        {
            name: "pie",
            fem: true
        },
        {
            name: "vautour"
        },
        {
            name: "faucon"
        },
        {
            name: "rouge-gorge"
        },
        {
            name: "tourterelle",
            fem: true
        },
        {
            name: "corneille",
            fem: true
        },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", () => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let tabdeterm = ['Le', 'La'];
        let randnum = getRandomInt(birds.length - 1);
        const interator = adjectives.entries();
        let randbirds = birds[getRandomInt(randnum)];

        for (let index = 0; index < randnum; index++) {
            interator.next();
        }
        let randadj = interator.next().value[0];
        console.log(randbirds);
        console.log(randadj);

    });
})();