
const {addCalculator, subtraction, multiplication, divided, addMore} = require("./calculator");

test("addition of 2 and 3 to equal 5", () => {
  expect(addCalculator(2, 3)).toBe(5);
});

test("subtraction of 5 and 2 to be 3", () => {
    expect(subtraction(5, 2)).toBe(3);
});

test("multiplication of 5 and 2 to be 10", () => {
    expect(multiplication(5, 2)).toBe(10);
});

test("divided of 10 and 2 to be 5", () => {
    expect(divided(10, 2)).toBe(5);
});

test("addingMore numbers", () => {
    expect(addMore(10, 5, 5)).toBe(20);
});


test("Error when one of function parameters are 0", () => {

    expect(() => { divided(1, 0);}).toThrow("ErrorByDividingWithZero");
  
  });


test("Error when one of function parameters are string", () => {

    expect(() => { multiplication(1, "Pera");}).toThrow("ErrorMultiplicationWithString");
  
  });


  test("Error when there are no arguments", () => {

    expect(() =>  {addCalculator(2);}).toThrow("ErrorNoArguments");
  
  }); 