const {
    multiply,
    substract,
    addStringToArray,
    addNumberToObject,
    numberIsEqualOrMoreThanOne,
    getEachEvenItem,
  } = require("./build-dont-touch.js");
  
  
  describe("multiply", () => {
    it("should return the multiplication of two valid numbers", () => {
      expect(multiply("2", 4)).toBe(8);
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-4, 5)).toBe(-20);
      expect(multiply(0, 10)).toBe(0);
      expect(multiply(2.5, 4)).toBe(10);
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
  });
  
  
  describe("addStringToArray", () => {
    it("should add a string to an array when both parameters are valid", () => {
      let arr = ["apple", "banana"];
      const str = "orange";
      arr = addStringToArray(arr, str);
      expect(arr).toEqual(["apple", "banana", "orange"]);
    });
    it("should increase the length of the array", () => {
      let array = ["apple", "banana"];
      const string = "orange";
      arr = addStringToArray(array, string);
      expect(() => array.toHaveLength(array + 1));
    });
    it("should add a string to an empty array", () => {
      let arr = [];
      const str = "apple";
      arr = addStringToArray(arr, str);
      expect(arr).toEqual(["apple"]);
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
  });
  
  
  describe("getEachEvenItem", () => {
    it("should return an array with every first item of the input array", () => {
      const array = [1, 2, 3, 4, 5, 6];
      const result =  getEachEvenItem(array);
      expect(result).toEqual([1, 3, 5]); 
    });
    it("should return an array with every first item of the input array", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const result =  getEachEvenItem(array);
      expect(result).toEqual([1, 3, 5, 7, 9]); 
    });
    it("should return an array with the single element when the input array has only one element", () => {
      const array = [1];
      const result =  getEachEvenItem(array);
      expect(result).toEqual([1]); 
    });
    it("should decrease the length of the array", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const newArrayLength =  getEachEvenItem(array).length;
      expect(() => newArrayLength.toHaveLength(4)); 
    });
    it("should not contain the second item of the origin array", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const newArrayLength =  getEachEvenItem(array).length;
      expect(() => newArrayLength[1].not.toBe(array[1])); 
    });
  });