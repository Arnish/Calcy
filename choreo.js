const displayBoxd = document.getElementById("displayBox");
var nums = [];
var firstNum = 0;
var nextNum = 0;

function adder (a,b) {
    console.log(a,b);
    return displayBoxd.value = (a+b);
}

function subtracter (a,b) {
    return displayBoxd.value = a-b;
}

function multiplier (a,b) {
    return displayBoxd.value = a*b;
}

function divider (a,b) {
    return displayBoxd.value = a/b;
}

function whenOpped (aNum) { //when numbers are pressed, store them in this array
    firstNum.push(aNum);
}
function operate (firstNum, operator) {
    
    if (operator == "+"){
        return adder(a,b);
    }

    if (operator == "-") {
        return subtracter(a,b);
    }

    if (operator == "*") {
        return multiplier(a,b);
    }

    if (operator == "/") {
        return divider(a,b);
    }
}

//functions for buttons below:


function negativeNum (a) { //return negative/positive number, fix this later // might need to grab document and return to that
    return displayBoxd.value = (a * -1); //ALL I HAD TO DO WAS ADD RETURN 
    //but now i have to figure out how i can use a variable instead, it works when i use  = (displayBoxd.value * -1) 
}

// function numberPress () {
//     displayBoxd = document.getElementById("displayBox"); //grabs the display input screen area to be referenced later
// }