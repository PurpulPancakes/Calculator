//Global Variables

var num1 = ""; //store the first number for maths
var num2 = ""; //store the second number for maths
var operator; //stores the values for the operator
var flag = false; //boolean false if we haven't used the operator yet
var equalTo = false; //boolean false if we haven't pressed the equal sign yet
var display = document.getElementById("display");

//calculator

//function to set the numbers into the num1 and num2 variables

function setValue(number){

    if (equalTo === true){
        clearButton();
    }

    if (flag === false){
        num1 += number;
        display.innerHTML = num1;
    }

    if (flag === true){
        num2 += number;
        display.innerHTML += number;
    }

    if(num1.length > 8|| num2.length > 8){
        display.innerHTML = "STOP NO";
    }

    /*if(num1.length > 8|| num2.length > 8){
        display.innerHTML = ">:C";
    }

    if(num1.length > 8|| num2.length > 8){
        window.location = 'http://www.junkyjanker.com';
    }*/ //HAHAHA
}

//function to clear the calculator

function clearButton(){
    num1 = "";
    num2 = "";
    display.innerHTML = "";
    equalTo = false;
    flag = false;
}

//function for storing and selecting the operator value

function setOperator(number){
    operator = number;
    var opString = "";
    flag = true;
    if(operator === 4){
        display.innerHTML += " / ";
        opString = " / ";
    }else if(operator === 3){
        display.innerHTML += " * ";
        opString = " * ";
    }else if(operator === 2){
        display.innerHTML += " - ";
        opString = " - ";
    }else if(operator === 1){
        display.innerHTML += " + ";
        opString = " + ";
    }

    //for getting rid of multiple operators
    if(flag === true){
        display.innerHTML = num1 + opString + num2;
    }

    //does not let us do an operation before entering a num1
    if(flag === true && num1 === ""){
        clearButton();
    }

    if(equalTo === true){
        clearButton();
    }

    if(operator === 5){
        equalClick();
    }else if(operator === 6){
        equalClick();
    }else if(operator === 7){
        equalClick();
    }
}

/*function separateOperator(){
    if(operator === 5){
        display.innerHTML += "&sup2;";
        opString = "&sup2;";
    }else if(operator === 6){
        display.innerHTML += "&#8730;";
        opString = "&#8730;";
    }else if(operator === 7){
        display.innerHTML += "1 /";
        opString = "1 /";
    }*/

//function to solve the math equation

function equalClick(){
    equalTo = true;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = "";
    var roundedResult = "";

    if(operator === 1){
        result = num1 + num2;
    }else if(operator === 2){
        result = num1 - num2;
    }else if(operator === 3){
        result = num1 * num2;
    }else if(operator === 4){
        result = num1 / num2;
    }else if(operator === 5){
        result = Math.pow(num1, 2);
    }else if(operator === 6){
        result = Math.sqrt(num1);
    }else if(operator === 7){
        result = 1 / num1;
    }

    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;

    /*if(roundedResult === "Infinity"){
        display.innerHTML = "you cannot divide by zero";
    }else if(roundedResult === "NaN"){
        display.innerHTML = "invalid calculation";
    }*/

    if(roundedResult === "Infinity"){
        display.innerHTML = "ERROR";
    }else if(roundedResult === "NaN"){
        display.innerHTML = "ERROR";
    }
}

//function to delete the last digit in the display
function backspace(){
    var temp1 = "";
    var temp2 = "";
    if(equalTo === true){
        clearButton();
    }
    if(flag === false){
        temp1 = num1.substring(0, num1.length-1);
        num1 = temp1;
        display.innerHTML = num1;
    }else if(flag === true){
        display.innerHTML = num1;
        flag = false;
    }

    if(num2 !== ""){
        temp2 = num2.substring(0, num2.length-1);
        num2 = temp2;
        flag = true;

        opSetString(operator);
    }
}

//function for adding decimals
function setDecimal(){
    if(flag === false){
        if(num1 === ""){
            num1 = "0.";
            display.innerHTML = num1;
        }
        if(num1.indexOf(".") === -1){
            num1 += ".";
            display.innerHTML = num1;
        }
    }

    if(flag === true){
        if(num2 === ""){
            num2 = "0.";
            display.innerHTML += num2;
        }
        if(num2.indexOf(".") === -1){
            num2 += ".";

            opSetString(operator);
        }
    }
}

//tell the calculator what operator you need when messing with num2
function opSetString(op){
    if(op === 1){
        display.innerHTML = num1 + " + " + num2;
    }else if(op === 2){
        display.innerHTML = num1 + " - " + num2;
    }else if(op === 3){
        display.innerHTML = num1 + " * " + num2;
    }else if(op === 4){
        display.innerHTML = num1 + " / " + num2;
    }else if(op === 5){
        display.innerHTML = num1 + "&sup2;";
    }else if(op === 6){
        display.innerHTML = "&#8730;" + num1;
    }else if(op === 7){
        display.innerHTML = "1 /" + num1;
    }
}

//clearing the second number
function clearNumberTwo(){
    num2 = "";
    opSetString(operator);
    equalTo = false;
}

function specialButtonDoesNothing(){
    sans = happyDance;
}

// switching it on
// var on = true;
// function switcher(){
//     if (on === true){
//         on = false;
//         document.getElementById("css").setAttribute("href", "calcStyles.css");
//     }
//     if (on === false && document.getElementById("css").setAttribute("href", "calcStyles.css")){
//         display.innerHTML + "WOW";
//     }
// }