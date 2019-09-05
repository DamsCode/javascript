/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let d = document.getElementById("dob-day").value;
        let m = document.getElementById("dob-month").value;
        let y = document.getElementById("dob-year").value;
        mydate = new Date(y, m, d);
        // console.log(mydate);
        nowdate = new Date();
        let age = nowdate.getFullYear() - mydate.getFullYear()
        if ((nowdate.getMonth() - mydate.getMonth()) < -1 || (nowdate.getDate() - mydate.getDate()) < 0) {
            age--;
        }

        console.log(age);
    });
})();