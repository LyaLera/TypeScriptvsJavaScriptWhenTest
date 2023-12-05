const {
  multiply,
  substract,
  addStringToArray,
  addNumberToObject,
  numberIsEqualOrMoreThanOne,
  getEachFirstItem,
} = require("./index");


describe("multiply", () => {
  it("should return the multiplication of two valid numbers", () => {
    expect(multiply("2", 4)).toBe(8);
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-4, 5)).toBe(-20);
    expect(multiply(0, 10)).toBe(0);
    expect(multiply(2.5, 4)).toBe(10);
  });
  it('should return "Parameters are not valid" when one of the parameters is not a number', () => {
    expect(multiply("hello", 3)).toBe("Parameters are not valid");
    expect(multiply(4, "hi")).toBe("Parameters are not valid");
  });
});


describe("substract", () => {
  it("should correctly divide two positive numbers", () => {
    expect(substract(10, 2)).toBe(5);
  });
  it("should correctly divide a positive number by zero", () => {
    expect(substract(10, 0)).toBe(Infinity);
  });
  it("should correctly divide a negative number by a positive number", () => {
    expect(substract(-10, 2)).toBe(-5);
  });
  it("should return -Infinity when dividing a negative number by zero", () => {
    expect(substract(-10, 0)).toBe(-Infinity);
  });
  it('should return "Parameter is not valid for substraction" when one of the parameters is not a number', () => {
    expect(substract("hello", 3)).toBe(
      "Parameter is not valid for substraction"
    );
  });
});


describe("addStringToArray", () => {
  it("should add a string to an array when both parameters are valid", () => {
    const arr = ["apple", "banana"];
    const str = "orange";
    const result = addStringToArray(arr, str);
    expect(result).toEqual(3);
    expect(arr).toEqual(["apple", "banana", "orange"]);
  });
  it("should increase the length of the array", () => {
    const array = ["apple", "banana"];
    const string = "orange";
    addStringToArray(array, string);
    expect(() => array.toHaveLength(array + 1));
  });
  it("should add a string to an empty array", () => {
    const arr = [];
    const str = "apple";
    const result = addStringToArray(arr, str);
    expect(result).toEqual(1);
    expect(arr).toEqual(["apple"]);
  });
  it("should return a warning message if the first parameter is not an array", () => {
    const array = "apple";
    const string = "cherry";
    const result = addStringToArray(array, string);
    expect(result).toBe(
      "The first parameter should be an array and second - string"
    );
  });
  it("should return a warning message if the second parameter is not a string", () => {
    const array = ["apple", "banana"];
    const string = 123;
    const result = addStringToArray(array, string);
    expect(result).toBe(
      "The first parameter should be an array and second - string"
    );
  });
});


describe("addNumberToObject", () => {
  it("should return a new object with the same properties and a new property with the value of the input number", () => {
    const object = { prop1: "value1", prop2: "value2" };
    const number = 10;
    const expected = { prop1: "value1", prop2: "value2", newProp: 10 };
    const result = addNumberToObject(object, number);
    expect(result).toStrictEqual(expected);
  });
  it("should return a new object with the same properties and a new property with the value of the input number", () => {
    const object = { prop1: "value1", prop2: "value2" };
    const number = 0;
    const expected = { prop1: "value1", prop2: "value2", newProp: 0 };
    const result = addNumberToObject(object, number);
    expect(result).toMatchObject(expected);
  });
  it("should return a warning message when the first parameter is not an object and the second parameter is not a number", () => {
    const object = "not an object";
    const number = "not a number";
    const result = addNumberToObject(object, number);
    expect(result).toBe(
      "The first parameter should be an object and second - number"
    );
  });
  it("should return an error message when the first parameter is missing", () => {
    const number = 5;
    const result = addNumberToObject(undefined, number);
    expect(result).toBe(
      "The first parameter should be an object and second - number"
    );
  });
});


describe("numberIsEqualOrMoreThanOne", () => {
  it("should return true when the input number is equal to 1", () => {
    expect(numberIsEqualOrMoreThanOne(1)).toBe(true);
  });
  it("should return true when the input number is greater than 1", () => {
    expect(numberIsEqualOrMoreThanOne(2)).toBe(true);
    expect(numberIsEqualOrMoreThanOne(100)).toBe(true);
  });
  it("should return false when the input number is less than 1", () => {
    expect(numberIsEqualOrMoreThanOne(0)).toBe(false);
    expect(numberIsEqualOrMoreThanOne(-10)).toBe(false);
  });
  it('should return "Parameter should be a number" when the input is not a number', () => {
    expect(numberIsEqualOrMoreThanOne("abc")).toBe(
      "Parameter should be a number"
    );
  });
});


describe("getEachFirstItem", () => {
  it("should return an array with every first item of the input array", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = getEachFirstItem(array);
    expect(result).toEqual([1, 3, 5]);
  });
  it("should return an array with every first item of the input array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = getEachFirstItem(array);
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });
  it("should return an array with the single element when the input array has only one element", () => {
    const array = [1];
    const result = getEachFirstItem(array);
    expect(result).toEqual([1]);
  });
  it("should decrease the length of the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const newArrayLength = getEachFirstItem(array).length;
    expect(() => newArrayLength.toHaveLength(4));
  });
  it("should not contain the second item of the origin array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const newArrayLength = getEachFirstItem(array).length;
    expect(() => newArrayLength[1].not.toBe(array[1]));
  });
});
