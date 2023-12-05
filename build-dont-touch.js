var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// I
// 1
function multiply(a, b) {
    var result = a * b;
    return result;
}
// 2
function substract(a, b) {
    var result = a / b;
    return result;
}
// II
// 1
function addStringToArray(arr, str) {
    // arr.push(str);
    // return  arr
    return __spreadArray(__spreadArray([], arr, true), [str], false);
}
// 2
function addNumberToObject(object, number) {
    var newObject = __assign(__assign({}, object), { newProp: number });
    return newObject;
}
// 3
// const numberIsEqualOrMoreThanOne = (number: number) : boolean => number >= 1
function numberIsEqualOrMoreThanOne(number) {
    return number >= 1;
}
// 1 3 5 7
// 2 4 6 8
// ["a", "b", "c", "d", "e"]
// odd a c e
// 4
function getEachEvenItem(array) {
    return array.filter(function (item, i) { return i % 2 === 0; });
}
function getEachOddItem(array) {
    return array.filter(function (item, i) { return i % 2 === 1; });
}
function getEachNthItem(array, nth) {
    return array.filter(function (item, i) { return i % nth === 0; });
}
module.exports = {
    multiply: multiply,
    substract: substract,
    addStringToArray: addStringToArray,
    addNumberToObject: addNumberToObject,
    numberIsEqualOrMoreThanOne: numberIsEqualOrMoreThanOne,
    getEachEvenItem: getEachEvenItem,
};
