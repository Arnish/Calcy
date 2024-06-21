const displayBoxd = document.getElementById("displayBox");
var nums = [];
var firstNum = 0;
var nextNum = 0;
var operator = ""
var toReset =[];

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
function whenOpped (aString) { //when enter is pressed itll sort through and separate the two number

    nums =[]; // resets array everytime new numbers get typed

    for (i=0; i<aString.length; i++) {
        if (aString[i] >= 0 && aString[i] <= 9) {
            nums.push(aString[i]);
        } 
        
        if (aString[i] == "+" || aString[i] == "-" || aString[i] == "/" || aString[i] =="*") {
            operator = aString[i]; //store the operator
            firstNum = Number(nums.join(""));
            nums =[]; //resets the array so only second portion gets stored next
            //continue;
        }

        if (i === aString.length-1) { //when it reaches the end of the array, combine the remaining numbers
            nextNum =Number(nums.join("")); //store the numbers after the operator
        }
        
    }
    console.log(firstNum, operator, nextNum);
    //console.log(nums);
    return operate(firstNum ,operator, nextNum); //needed to return here for the operate function to work properly
}

function appendToDisplay (a) {
    if (toReset.length > 0) { //if the reseter has a character in it, reset the display screen
        clearAll();
    }

    return displayBoxd.value += a;
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

    toReset.push(o); //used to reset the display screen
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
}
function negativeNum (a) { //return negative/positive number, fix this later // might need to grab document and return to that
    return displayBoxd.value = (a * -1); //ALL I HAD TO DO WAS ADD RETURN 
    //but now i have to figure out how i can use a variable instead, it works when i use  = (displayBoxd.value * -1) 
}

// function numberPress () {
//     displayBoxd = document.getElementById("displayBox"); //grabs the display input screen area to be referenced later
// }