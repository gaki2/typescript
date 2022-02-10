"use strict";
function map(array, f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}
let arr = [1, 2, 3, 4, 5];
let ret = map(arr, (elem) => elem * 2);
console.log(ret);
//# sourceMappingURL=index.js.map