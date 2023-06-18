const { Triangle, Circle, Square } = require("../lib/shapes");

// Green Triangle class shape test
describe("Triangle", () => {
  test("renders a triangle", () => {
    const shape = new Triangle(0, 0, 100, "green");
    expect(shape.render()).toEqual(
      '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240"><polygon points="100,50 200,150 0,150" fill="green" /><text x="50%" y="50%" text-anchor="middle" fill="white" font-size="55" dy="1em"></text></svg>'
    );
  });
});

// Red Circle class shape test
describe("Circle", () => {
  test("renders a circle", () => {
    const shape = new Circle(0, 0, 100, "red");
    expect(shape.render()).toEqual(
      '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><circle cx="120" cy="120" r="100" fill="red" /><text x="50%" y="50%" text-anchor="middle" fill="white" font-size="55" dy=".3em"></text></svg>'
    );
  });
});

// Blue Square class shape test
describe("Square", () => {
  test("renders a square", () => {
    const shape = new Square(0, 0, 100, "blue");
    expect(shape.render()).toEqual(
      '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><rect x="50" y="50" width="100" height="100" fill="blue" /><text x="50%" y="50%" text-anchor="middle" fill="white" font-size="55" dy=".3em"></text></svg>'
    );
  });
});
