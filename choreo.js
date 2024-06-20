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

//when numbers are pressed, store them in this array //figure out how to push numbers AFTER the operator
//nvm that was a dumb idea, just take the whole string and then break it down, ignoring the operator
//*ok now I need to figure out how to separate multiple digited numbers... esp after the operator is clicked. EX: 894/33
//could do store the digits before operator as one and the ones after it as another, pretty simple actually
//detect when the operator appears in the string and split it accordingly
function whenOpped (aString) { 
    for (i=0; i<aString.length; i++) {
        if (aString[i] >= 0 && aString[i] <= 9) {
            nums.push(aString[i]);
        } else {
            continue;
        }
    }
    console.log(nums);
}
function operate (firstNum, operator, nextNum) {
    
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