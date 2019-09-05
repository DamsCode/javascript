/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let n1 = new Number(document.getElementById("op-one").value);
        let n2 = new Number(document.getElementById("op-two").value);
        let res = null;
        switch (operation) {
            case 'addition':
                res = n1 + n2;
                alert(res);
                break;
            case 'substraction':
                res = n1 - n2;
                alert(res);
                break;
            case 'multiplication':
                res = n1 * n2;
                alert(res);
                break;
            case 'division':
                res = n1 / n2;
                alert(res);
                break;
            default:
                alert('error');
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();