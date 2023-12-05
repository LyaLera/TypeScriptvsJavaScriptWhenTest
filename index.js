// I

// 1
function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Parameters are not valid";
  } else {
    let result = a * b;
    return result;
  }
}

// 2
function substract(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Parameter is not valid for substraction";
  } else {
  }
  let result = a / b;
  return result;
}

// II

// 1
function addStringToArray(arr, str) {
  if (Array.isArray(arr) && typeof str === "string") {
    return arr.push(str);
  } else {
    return "The first parameter should be an array and second - string";
  }
}

// 2
function addNumberToObject(object, number) {
  if (typeof object === "object" && typeof number === "number") {
    let newObject = { ...object, newProp: number };
    return newObject;
  } else {
    return "The first parameter should be an object and second - number";
  }
}

// 3
function numberIsEqualOrMoreThanOne(number) {
  if (number >= 1) {
    return true;
  } else if (number < 1) {
    return false;
  } else {
    return "Parameter should be a number";
  }
}

// 4
function getEachFirstItem(array) {
  return array.filter((i) => i % 2 === 2 - 1);
}

module.exports = {
  multiply,
  substract,
  addStringToArray,
  addNumberToObject,
  numberIsEqualOrMoreThanOne,
  getEachFirstItem,
};
