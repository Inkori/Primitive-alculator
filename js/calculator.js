	var A,B,C;
	var action = "+";
 
	function getValue(id) {
		var res = document.getElementById(id).value - 0;
		if (!isNaN(res)) 
			return res;
		alert("The element " + id + " is not a number value!!!");
	}
 
function PutNum(val) {
    document.getElementById("win").value = (document.getElementById("win").value + val)-0;
 
}
 
 function div() {
    A = getValue("win");
    document.getElementById("win").value = 0;
    action = "/";
}

function mul() {
    A = getValue("win");
    document.getElementById("win").value = 0;
    action = "*";
}

function sub() {
    A = getValue("win");
    document.getElementById("win").value = 0;
    action = "-";
}

function plus () {
    A = getValue("win");
    document.getElementById("win").value = 0;
    action = "+";
}
 
function clr() {
    document.getElementById("win").value = 0;
}
 
 
function calculate() {
    B = getValue("win");
    switch(action) {
		case "/":
            if (B == 0) {
                alert("You can not divide by zero!");
            }
            else {
                C = A / B;
            }
            break;
			
        case "*":
            C = A * B;
            break;
			
        case "-":
            C = A - B;
            break;
        
		case "+":
            C = A + B;
            break;
        
    }
    document.getElementById("win").value = C;
}
 
window.onload = function () {
 
    for (var i = 0; i < 10; i++) {
        (function (val) {
            document.getElementById("but_" + val).onclick = function () {
                PutNum(val);
            }
        })(i);
    }
    document.getElementById("div").addEventListener("click", div);
	document.getElementById("mul").addEventListener("click", mul);
	document.getElementById("sub").addEventListener("click", sub);
	document.getElementById("add").addEventListener("click", plus);
    document.getElementById("calculate").addEventListener("click", calculate);
    document.getElementById("clr").addEventListener("click", clr);
   
}