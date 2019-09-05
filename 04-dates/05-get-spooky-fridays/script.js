/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let mydate = new Date();
        const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
        ];
        mydate.setFullYear(new Number(document.getElementById("year").value));
        for (let index = 0; index < 12; index++) {
            for (let ind = 1; ind <= 31; ind++) {
                mydate.setMonth(index, ind);
                if (mydate.getDay() == 5 && mydate.getDate() == 13) {
                    let options = {
                        month: 'long'
                    };
                    console.log(monthNames[mydate.getMonth()]);
                }
            }
        }
    });
})();