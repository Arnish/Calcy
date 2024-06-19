
function adder (a,b) {
    return a+b;
}

function subtracter (a,b) {
    return a-b;
}

function multiplier (a,b) {
    return a*b;
}

function divider (a,b) {
    return a/b;
}

function operate (a, operator, b) {
    
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

function numberPress () {
    var e_DisplayBox = document.getElementById("displayBox"); //grabs the display input screen area to be referenced later
}