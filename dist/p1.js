"use strict";
let a = "aa" + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b,
};
let d = c.apple + 4;
console.log(c, d);
console.log("타입 별칭");
///////////////////////////
let b3 = undefined;
let a1 = null;
let b2 = "apple";
const c1 = "pinapple";
let d1 = [true, false, false];
let e1 = { type: "ficus" };
let f1 = [1, false];
const g = [3];
let h = null;
function voidFunction() {
    console.log("dd");
}
voidFunction();
let my = { name: "gak", age: 23 };
function changeAge(person, num) {
    person.age += num;
    return person;
}
let ret = changeAge(my, 3);
console.log(ret);
//////////////////////////
function* createFiboGenerater() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let generator = createFiboGenerater();
console.log(generator.next()); // {value: 0, done: false};
console.log(generator.next()); // {value: 1, done: false};
console.log(generator.next()); // {value: 1, done: false};
console.log(generator.next()); // {value: 2, done: false};
let signiture = (firstString, secondString) => {
    firstString += "a";
    secondString += "c";
    return firstString + secondString;
};
let rett = signiture("aa", "cc");
console.log(rett); // aaaccc
//# sourceMappingURL=p1.js.map