function calculate() {
    // get values from input boxes
    var a = Number(document.getElementById("creditScore").value);
    var b = Number(document.getElementById("loanTerm").value);
    var c = Number(document.getElementById("downPayment").value);
    var d = Number(document.getElementById("loanAmount").value);
    

    // calculate result
    var result = 14.0 +(a*-0.0058) + (b*0.016) + (c*0.-000005) + (d*0.0000005);
    
    // display result
    document.getElementById("result").innerHTML = result.toFixed(2);
}

function reset() {
    document.getElementById("creditScore").value = "";
    document.getElementById("loanTerm").value = "";
    document.getElementById("downPayment").value = "";
    document.getElementById("loanAmount").value = "";
    document.getElementById("result").value = "";
}


 


  





