function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("AddOperator").checked) {
            operator = document.getElementById("AddOperator").value;
        }
        if (document.getElementById("SubOperator").checked) {
            operator = document.getElementById("SubOperator").value;
        }
        if (document.getElementById("MulOperator").checked) {
            operator = document.getElementById("MulOperator").value;
        }
        if (document.getElementById("DivOperator").checked) {
            operator = document.getElementById("DivOperator").value;
        }

        var result;
        
        /* if the operator was "add" then add operand1fp and operand2fp */
        if (operator == "Add") {
            result = (operand1fp + operand2fp)
        }
 
        /* if the operator was "sub" then subtract operand1fp and operand2fp */
        if (operator == "Sub") {
            result = (operand1fp - operand2fp)
        }

        /* if the operator was "mul" then multiply operand1fp and operand2fp */
        if (operator == "Mul") {
            result = (operand1fp * operand2fp)
        }
        
         /* if the operator was "div" then divide operand1fp and operand2fp */
        if (operator == "Div") {
            result = (operand1fp / operand2fp)
        }
        
        if (document.getElementById("MulOperator").checked) {
            operator = document.getElementById("MulOperator").value;
        }
        
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubOperator").checked = false;
    document.getElementById("MulOperator").checked = false;
    document.getElementById("DivOperator").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});