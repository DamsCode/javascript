/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static get greeting() {
            return this.greeting;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static get greeting() {
            return this.greeting;
        }
    }
    document.getElementById("run").addEventListener('click', () => {
        let dog = new Dog('Charle');
        let cat = new Cat('kittie');
        console.log(cat.greeting);

        console.log(dog);
        console.log(cat);

    })
})();