const { Triangle, Circle, Square } = require("../lib/shapes.js");

// Green Triangle class shape test
describe("Triangle", () => {
  test("renders a triangle", () => {
    const shape = new Triangle(0, 0, 100, "green");
    expect(shape.render()).toEqual(
      ' <polygon points="100,50 200,150 0,150" fill="green"/>'
    );
  });
});

// Red Circle class shape test
describe("Circle", () => {
  test("renders a circle", () => {
    const shape = new Circle(0, 0, 100, "red");
    expect(shape.render()).toEqual(
      '  <circle cx="150" cy="100" r="50" fill="red" />'
    );
  });
});

// Blue Square class shape test
describe("Square", () => {
  test("renders a square", () => {
    const shape = new Square(0, 0, 100, "blue");
    expect(shape.render()).toEqual(
      '<rect x="50" y="50" width="100" height="100" fill="blue" />'
    );
  });
});

// White Text class shape test

// module.exports = { Triangle, Circle, Square};
