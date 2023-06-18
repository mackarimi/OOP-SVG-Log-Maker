const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// save the logo.svg file inside example folder
const { Triangle, Circle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message:
        "Please enter up to 3 letters or numbers for your logo text (e.g. ABC, 123, or mixed):",
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Please enter a color for your logo text (e.g. red, #ff0000, rgb(255,0,0), rgba(255,0,0,1)):",
    },
    {
      type: "list",
      name: "shape",
      message: "Please choose a shape for your logo: ",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Please enter a color for your logo shape (e.g. red, #ff0000, rgb(255,0,0), rgba(255,0,0,1)):",
    },
  ])
  .then((answers) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
        ${
          answers.shape === "Triangle"
            ? `<polygon points="120 10, 230 230, 10 230" fill="${answers.shapeColor}" />`
            : answers.shape === "Circle"
            ? `<circle cx="120" cy="120" r="100" fill="${answers.shapeColor}" />`
            : answers.shape === "Square"
            ? `<rect width="240" height="240" fill="${answers.shapeColor}" />`
            : ""
        }
        <text x="50%" y="50%" text-anchor="middle" fill="${
          answers.textColor
        }" font-size="55" dy=".3em">${answers.text}</text>
      </svg>
    `;
    // error handling for invalid input

    // Create the "Example" folder if it doesn't exist
    const exampleFolderPath = path.join(__dirname, "Example");
    fs.mkdirSync(exampleFolderPath, { recursive: true });

    // Save the logo.svg file with individual shape names
    if (answers.shape === "Triangle") {
      const triangleFilePath = path.join(
        exampleFolderPath,
        "logo_triangle.svg"
      );
      fs.writeFileSync(triangleFilePath, svg);
      console.log(
        "Bravo! Your logo has been inside Example folder under logo_triangle.svg"
      );
    } else if (answers.shape === "Circle") {
      const circleFilePath = path.join(exampleFolderPath, "logo_circle.svg");
      fs.writeFileSync(circleFilePath, svg);
      console.log(
        "Bravo! Your logo has been inside Example folder under logo_circle.svg"
      );
    } else if (answers.shape === "Square") {
      const squareFilePath = path.join(exampleFolderPath, "logo_square.svg");
      fs.writeFileSync(squareFilePath, svg);
      console.log(
        "Bravo! Your logo has been inside Example folder under logo_square.svg"
      );
    }
  });
