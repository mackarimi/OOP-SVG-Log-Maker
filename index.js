const inquirer = require("inquirer");
const fs = require("fs");

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

    fs.writeFile("logo.svg", svg, (err) => {
      if (err) throw err;

      console.log("Bravo! Your logo has been saved");

      fs.readFile("logo.svg", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    });
  });
