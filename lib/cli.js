const inquirer = require('inquirer');
const SVG = require('./svg');
const { Square, Triangle, Circle } = require('./shapes');
const { writeFile } = require('fs/promises');const { error } = require('console');
 ;


class CLI {
    run() {
        const questions = [
            {
                name: "text",
                type: "input",
                message: "Enter logo text (Must not exceed 3 characters)",
                validate: (text) => {
                    return text.length <= 3 || "Message must not exceed 3 characters";
                }
            },
            {
                name: "textColor",
                type: "input",
                message: "Enter Text Color:",
            },
            {
                name: "shapeType",
                type: "list",
                choices: ["Circle", "Triangle", "Square"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter Shape Color:",
            },
        ]
        return inquirer.prompt(questions).then(({text, textColor, shapeType, shapeColor}) => {
            let shape;
            if(shapeType === "Circle") {
                shape = new Circle();
            } else if(shapeType === "Square") {
                shape = new Square();
            } else if(shapeType === "Triangle") {
                shape = new Triangle();
            }


            shape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile(`./examples/${text}.svg`, svg.render())
        }).then(() => {
            console.log("SVG file successfully generated!")
        }).catch((error) => {
            console.error("An error occurred: ", error)
        });
    }
}

module.exports= CLI;