// try to get into practice of not using global variables often, at the end od this proj try and figure out how to 
// make each a local variable

const displayBoxd = document.getElementById("displayBox");
var nums = [];
var firstNum = 0;
var nextNum = 0;
var operator = ""
var toReset =[];
var saveOper = "";
var replaceOper =[];
var negNum=[];
var idxOper = "";
/*
// function adder (a,b) { //not needed cause you can do all this in the last function
//     console.log(a,b);
//     return displayBoxd.value = a+b; //doesnt work for some reason
// }

// function subtracter (a,b) {
//     return displayBoxd.value = a-b;
// }

// function multiplier (a,b) {
//     return displayBoxd.value = a*b;
// }

// function divider (a,b) {
//     return displayBoxd.value = a/b;
// }
*/


//when numbers are pressed, store them in this array //figure out how to push numbers AFTER the operator
//nvm that was a dumb idea, just take the whole string and then break it down, ignoring the operator
//*ok now I need to figure out how to separate multiple digited numbers... esp after the operator is clicked. EX: 894/33
//could do store the digits before operator as one and the ones after it as another, pretty simple actually
//detect when the operator appears in the string and split it accordingly // might need to use index here instead
//detect whether or not number is negative****
function whenOpped (aString) { //when enter is pressed itll sort through and separate the two number
    idxOper = ""; //find operators index for 2nd negative numb
    nums =[]; // resets array everytime new numbers get typed
    operator = ""; //for some reason didnt reset with everything in clearall...
    for (i=0; i<aString.length; i++) {
        //console.log(aString[i]);
        if (aString[i] >= 0 && aString[i] <= 9) {
            nums.push(aString[i]);
        }
        
        if (operator == "") { //so it doesnt repeat the negative symbol for negative numbers
            if (aString[i] == "+" || aString[i] == "-" || aString[i] == "/" || aString[i] =="*") { //THIS IS WHERE THE BUG IS FROM ****, this also stores the - as the new operator...
                operator = aString[i]; //store the operator
                idxOper = (aString.indexOf(operator)); //index so we can get the negative sign (after the operator)
                //console.log("idx is: ", idxOper);
                firstNum = Number(nums.join(""));

                if (aString[0] === "-") { //if the number was a negative, detected by a negative sign before the number
                    firstNum = firstNum * -1; //return the number as a negative number
                }
                nums =[]; //resets the array so only second portion gets stored next
                //continue;
            }
    }

        //console.log(idxOper);

        //for second portion
        //if a the character after the operator is a negative, then return a negative number
        //find index of operator first
        if (i === aString.length-1) { //when it reaches the end of the array, combine the remaining numbers
            nextNum =Number(nums.join("")); //store the numbers after the operator
            //console.log(nextNum);
            console.log("idx is: ", idxOper);
            console.log("the string is: ", aString);
            console.log(aString[idxOper]);
            if (aString[idxOper+1] === "-") { //if the number was a negative, detected by a negative sign before the number
                //console.log(idxOper);
                nextNum = nextNum * -1; //return the number as a negative number
                console.log(firstNum); //for some reason this resets the firstnum to 0?
            }
        }
    }
    console.log(firstNum, operator, nextNum);
    //console.log(nums);
    return operate(firstNum ,operator, nextNum); //needed to return here for the operate function to work properly
}

//need to make sure it doesn't clear the display when an operator is pressed
function appendToDisplay (a) {
    //if an operator is pressed, skip resetting | this means we have to store operators in its own variable

    if (toReset.length > 0 && saveOper == "") { //if the reseter was initalized via = button function, reset the display screen
        clearAll();
    }

    return displayBoxd.value += a;
}


//replacing the operator here is a little tricky
// I might need to convert the display screen to an array and replace the operator using its index that way
function appendOper (a) { //operators , need to make it so only one operator can be pressed at a time

    if (saveOper === "+" || saveOper === "-" || saveOper === "/" || saveOper === "*") { //if saveOper alr exists
        replaceOper = [];
        //****NEED TO FIX THIS FIGURE IT OUT, IT KEEPS RESETTING SO CHECK THE RESET AREA FOR HINTS
        for (i=0; i< displayBoxd.value.length; i++) {
            replaceOper.push(displayBoxd.value[i]);
            if (displayBoxd.value[i] === "+" || displayBoxd.value[i] === "-" || displayBoxd.value[i] === "/" || displayBoxd.value[i] === "*") {
                replaceOper[i] = a;
            }
        }
        //console.log(replaceOper);
        saveOper = a; // replace the old saveOper with the new one
        displayBoxd.value = replaceOper.join("");
        //displayBoxd.value = saveOper;
    } else if (a === "+" || a === "-" || a === "/" || a === "*") { //if a is an operator
        
        saveOper = a; // keeps display screen from resetting even after an equation executes
        displayBoxd.value += a; //appends
    }
}

/* dont need this since i put it in appendToDisplay
function resetter () { //if the reset variable isnt empty it will reset the display screen!
    if (toReset.length > 0) {
        clearAll();
    }

}
*/

// function storeNum (aNum) { //when numbers are pressed it will store it in an array
//     if (aNum >=0 && aNum <= 9) {
//         nums.push(aNum);
//     }
// }

//SOLVE THIS BY ADDING A SECOND DISPLAY SCREEN LIKE THE COMPUTER CALC!!!
function operate (a, o, b) { //need to find a way to clear the display after this... how to call clearAll() after this executes
    
    saveOper = ""; //used to reset the display screen
    toReset.push(o); //used to reset the display screen, if it has a value in it it means the equal button was pressed and the next number pressed will reset display screen
    if (o == "+"){
        return displayBoxd.value = (a+b);
    }

    if (o == "-") {
        return displayBoxd.value = (a-b);
    }

    if (o == "*") {
        return displayBoxd.value = (a*b);
    }

    if (o == "/") {
        return displayBoxd.vlaue = (a/b);
    }
}

//functions for buttons below:

function clearAll () {
    nums =[];
    firstNum = 0;
    nextNum =0;
    operator = "";
    displayBoxd.value = "";
    toReset =[];
    saveOper = "";
    replaceOper=[];
    negNum =[];
    idxOper ="";
    //negnumJoined ="";
}

//negatives dont really work,  its just visual for some reason
function negativeNum (a) { //return negative/positive number, fix this later // might need to grab document and return to that

    if (saveOper != "") { //if an operator is clicked before negating //this whole thins below is for the 2nd half the equation
        let negnumJoined = "";
        let nextNeg = "";
        negNum =[];
        for (i=0; i<a.length; i++){
            negNum.push(a[i]);
            if (a[i] === saveOper) { //when it reaches the operator in the array
                negnumJoined = negNum.join("");
                negNum=[];
                //console.log(negnumJoined);
                //return displayBoxd.value = negnumJoined;
            }
            nextNeg = negNum.join("");
            //console.log("this is negas: ", nextNeg); //this works, no need tokeep testing it
        }
        return displayBoxd.value = negnumJoined + (nextNeg * -1);
    }
    return displayBoxd.value = (a * -1); //ALL I HAD TO DO WAS ADD RETURN //this returns the first portion of the equation
    //but now i have to figure out how i can use a variable instead, it works when i use  = (displayBoxd.value * -1) 
}

// function numberPress () {
//     displayBoxd = document.getElementById("displayBox"); //grabs the display input screen area to be referenced later
// }