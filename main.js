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

// get all non number buttons
const result = document.querySelector("#equal");
const sum = document.querySelector("#sum")
    .addEventListener("click", () => operation = "sum");
const div = document.querySelector("#divide")
    .addEventListener("click", () => operation = "div");
const multi = document.querySelector("#multiply")
    .addEventListener("click", ()=> operation = "multi");
const subt = document.querySelector("#subtract")
    .addEventListener("click", ()=> operation = "subtraction");
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

function operate(op, n1, n2){
    switch(op){
        case sum:
            add(n1,n2);
            break;
        case sub:
            subtract(n1, n2);
            break;
        case multi:
            multiply(n1,n2);
            break;
        case div:
            divide(n1, n2);
            break;
    }
}