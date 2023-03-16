const calculateBtn = document.querySelector('.calculate-btn');

calculateBtn.addEventListener('click', calculateInterest);

function calculatebtn) {

  // get values from input boxes
  var a = Number(document.getElementById("loanAmount").value);
  var b = Number(document.getElementById("downPayment").value);
  var c = Number(document.getElementById("loanTerm").value);
  var d = Number(document.getElementById("creditScore").value);
  // calculate result
  var result = 14.0 +(c*-0.0058) + (c*0.016) + (b*0.-000005) + (d*0.0000005);
  // display result
  document.getElementById("result").innerHTML = result.toFixed(2);
}
function reset() {
  document.getElementById("loanAmount").value = "";
  document.getElementById("downPayment").value = "";
  document.getElementById("loanTerm").value = "";
  document.getElementById("creditScore").value = "";
  document.getElementById("result").value = "";
}

if (isNaN(loanAmount) || isNaN(downPayment) || isNaN(loanTermYears) || isNaN(creditScore)) {
  alert('Please enter valid numbers for all fields.');
  return;
}

// Display the calculated values on the page
document.querySelector('.loanAmount .value').textContent = `$${loanAmount.toFixed(2)}`;
document.querySelector('.downPayment .value').textContent = `$${downPayment.toFixed(2)}`;
document.querySelector('.loanTerm .value').textContent = `${loanTermYears} years`;
document.querySelector('.creditScore .value').textContent = `${creditScore}`;

