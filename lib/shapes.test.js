const { Square, Triangle, Circle } = require("../lib/shapes");

describe("Circle", () => {
  test("should render SVG for a blue circle element", () => {});
    const expectedSVG = `<circle cx="150" cy="100" r="80" fill="blue" />`;
    const circle = new Circle();
    // setter method for blue
    circle.setColor("blue");
    const actualSVG = circle.render();
    expect(actualSVG).toEqual(expectedSVG);

  test("should accept a fillColor input", () => {
    const expectedSVG = `<circle cx="150" cy="100" r="80" fill="purple" />`;
    const circle = new Circle();
    // setter method for purple
    circle.setColor("purple");
    const actualSVG = circle.render();
    expect(actualSVG).toEqual(expectedSVG);
  });
});


describe("Triangle", () => {
    test("should render SVG for a green polygon element", () => {});
      const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="green" />`
      const triangle = new Triangle();
      // setter method for green
      triangle.setColor("green");
      const actualSVG = triangle.render();
    expect(actualSVG).toEqual(expectedSVG);

  
    test("should accept a fillColor input", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="green" />`
        const triangle = new Triangle();
        // setter method for green
        triangle.setColor("green");
        const actualSVG = triangle.render();
      expect(actualSVG).toEqual(expectedSVG);
    });
  });


  describe("Square", () => {
    test("should render SVG for an orange polygon element", () => {});
      const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="orange" />`;
      const square = new Square();
      // setter method for orange
      square.setColor("orange");
      const actualSVG = square.render();
      expect(actualSVG).toEqual(expectedSVG);
  
    test("should accept a fillColor input", () => {
      const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="black" />`;
      const square = new Square();
      // setter method for black
      square.setColor("black");
      const actualSVG = square.render();
      expect(actualSVG).toEqual(expectedSVG);
    });
  });
