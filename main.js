"use strict"

const number0 = document.querySelector("#number0")
    .addEventListener("click", changeNumber);
const number1 = document.querySelector("#number1")
    .addEventListener("click", changeNumber);
const number2 = document.querySelector("#number2")
    .addEventListener("click", changeNumber);
const number3 = document.querySelector("#number3")
    .addEventListener("click", changeNumber);
const number4 = document.querySelector("#number4")
    .addEventListener("click", changeNumber);
const number5 = document.querySelector("#number5")
    .addEventListener("click", changeNumber);
const number6 = document.querySelector("#number6")
    .addEventListener("click", changeNumber);
const number7 = document.querySelector("#number7")
    .addEventListener("click", changeNumber);
const number8 = document.querySelector("#number8")
    .addEventListener("click", changeNumber);
const number9 = document.querySelector("#number9")
    .addEventListener("click", changeNumber);
const point = document.querySelector("#point")
    .addEventListener("click", changeNumber);

// get all non number buttons
const result = document.querySelector("#equal")
    .addEventListener("click", handleResult);
const sum = document.querySelector("#sum")
    .addEventListener("click", () => handleOperation("sum"));
const div = document.querySelector("#divide")
    .addEventListener("click", () => handleOperation("div"));
const multi = document.querySelector("#multiply")
    .addEventListener("click", ()=> handleOperation("multi"));
const subt = document.querySelector("#subtract")
    .addEventListener("click", ()=> handleOperation("subt"));
const display = document.querySelector(".display");

let operation;


let value1 = 0;
let value2 = 0;
let displayValue = "";


function changeNumber(e){
    displayValue += e.target.textContent;
    display.textContent = displayValue;
    console.log(displayValue)
}

const add = (a, b) =>{
    return a + b;
};

const subtract = (a,b) =>{
    return a-b;
}

const multiply = (a, b) =>{
    return a*b;
}

const divide = (a, b) =>{
    return a/b;
}

function handleOperation(op){
    value1 = parseInt(displayValue);
    console.log(typeof(value1), value1);
    console.log(displayValue);
    displayValue = "";
    operation = op;
    console.log(operation);
}

function handleResult(){
    value2 = parseInt(displayValue);
    console.log(typeof(value2), value2);
    console.log(displayValue);

    console.log(`operate ${operation}, ${value1}, ${value2}`);
    let result = operate(operation, value1, value2).toString();
    console.log(result);
    displayValue = result;
    display.textContent = result;
}

function operate(op, n1, n2){
    switch(op){
        case "sum":
            return add(n1,n2);
        case "subt":
            return subtract(n1, n2);
        case "multi":
            return multiply(n1,n2);
        case "div":
            return divide(n1, n2);
    }
}