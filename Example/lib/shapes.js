// This file contains the classes for the shapes that we will be rendering
// in our logo. Each shape class should have a render() method that returns
// the SVG string for that shape.

class Shape {
  constructor(color) {
    this.color = color || ""; // Assign a default value if no color is provided
  }
}

class Triangle extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
    <polygon points="100,50 200,150 0,150" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="55" dy="1em"></text>
    </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">
    <circle cx="120" cy="120" r="100" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="55" dy=".3em"></text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">
    <rect width="240" height="240" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="55" dy=".3em"></text>
    </svg>`;
  }
}

module.exports = { Triangle, Circle, Square };
