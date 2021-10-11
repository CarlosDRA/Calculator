"use strict"

let displayValue = "";
let value1 = 0;
let value2 = 0;
let currentOperation = null;
let resetDisplay = false;

const operations = document.querySelectorAll("[data-op]");
const numbers = document.querySelectorAll("[data-num]");
const display = document.querySelector(".display");

//-------------------------------------- Event Listeners --------------------------------------------

const eraseNumber = document.getElementById("delete").addEventListener("click", deleteNumber);
const result = document.querySelector("#equal").addEventListener("click", handleResult);
const clear = document.getElementById("clear").addEventListener("click", clearDisplay);
const point = document.getElementById("point").addEventListener("click", addPoint);

numbers.forEach(num => {
    num.addEventListener("click", changeNumber);
});

operations.forEach(op => {
    op.addEventListener("click", () => handleOperation(op.dataset.op));
})

//-------------------------------------- variable changes ------------------------------------------

function changeNumber(e){
    if(displayValue === null){
        displayValue = "";
    }
    
    if(displayValue.length < 13){
        displayValue += e.target.textContent; //limit to 13 characters in display when entering numbers
    }
    display.textContent = displayValue;
    console.log(displayValue);
}

function addPoint(){
    if(display.textContent == ""){
        displayValue = "0";
        display.textContent = displayValue
    }
    if(display.textContent.includes(".")){
        return;
    } else{
        displayValue += ".";
        display.textContent = displayValue;
    }
}

function handleOperation(op){
    if(currentOperation !== null){
        evaluate();
    }
    
    value1 = Number(displayValue);
    currentOperation = op;
    displayValue = "";
}

function clearDisplay(){
    displayValue = "";
    value1 = "";
    value2 = "";
    display.textContent = "0";
}

function deleteNumber(){
    display.textContent = display.textContent.slice(0, -1);
    displayValue = display.textContent;
}

//------------------------------------------- results ---------------------------------------------

function handleResult(){
    value2 = Number(displayValue);
    let result = round(operate(currentOperation, value1, value2));
    displayValue = result;
    display.textContent = result;
    currentOperation = null;
}

function evaluate(){
    if(currentOperation == null){
        return
    }
    value2 = Number(displayValue);
    let result = round(operate(currentOperation, value1, value2));
    displayValue = result;
    display.textContent = displayValue;
    currentOperation = null;
}


//---------------------------------------- operations --------------------------------------------

function round(num){
    return Math.round(num * 1000) / 1000
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
    let result;
    if(b == 0){
        result = "ERROR";
    } else{
        result = a/b;
    }
    return result;
}

function operate(op, n1, n2){
    switch(op){
        case "addition":
            return add(n1,n2);
        case "subtraction":
            return subtract(n1, n2);
        case "multiply":
            return multiply(n1,n2);
        case "division":
            return divide(n1, n2);
        default:
            return null;
    }
}