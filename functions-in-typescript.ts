// I

// 1
function multiply(a: number, b: number): number {
    let result = a * b;
    return result;
}

// 2
function substract(a: number, b: number) : number {
  let result = a / b;
  return result;
}

// II

// 1
function addStringToArray(arr: Array<string>, str: string) : Array<string> {
    // arr.push(str);
    // return  arr
    return [...arr, str]
}



// 2
function addNumberToObject(object: Object, number: number) : Object {
    let newObject = { ...object, newProp: number };
    return newObject;
}

// 3
// const numberIsEqualOrMoreThanOne = (number: number) : boolean => number >= 1
function numberIsEqualOrMoreThanOne(number: number) : boolean {
  return number >= 1
}

// 1 3 5 7
// 2 4 6 8
// ["a", "b", "c", "d", "e"]
// odd a c e
// 4
function getEachEvenItem(array: Array<any>) : Array<any> {
  return array.filter((item, i: any) => i % 2 === 0);
}

function getEachOddItem(array: Array<any>) : Array<any> {
    return array.filter((item, i: any) => i % 2 === 1);
}

function getEachNthItem(array: Array<any>, nth: number) : Array<any> {
    return array.filter((item, i: any) => i % nth === 0);
}

module.exports = {
  multiply,
  substract,
  addStringToArray,
  addNumberToObject,
  numberIsEqualOrMoreThanOne,
  getEachEvenItem,
};
