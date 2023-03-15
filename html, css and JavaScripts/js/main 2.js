const calculateBtn = document.querySelector('.calculate-btn');

calculateBtn.addEventListener('click', calculateInterest);

function calculateInterest() {

  const loanAmountInput = document.querySelector('.loan-amount');
  const downPaymentInput = document.querySelector('.down-payment');
  const loanTermYearsInput = document.querySelector('.loan-term-years');
  const creditScoreInput = document.querySelector('.credit-score');

  // Validate input
  const loanAmount = parseFloat(loanAmountInput.value);
  const downPayment = parseFloat(downPaymentInput.value);
  const loanTermYears = parseFloat(loanTermYearsInput.value);
  const creditScore = parseFloat(creditScoreInput.value);

  if (isNaN(loanAmount) || isNaN(downPayment) || isNaN(loanTermYears) || isNaN(creditScore)) {
    alert('Please enter valid numbers for all fields.');
    return;
  }

  const principal = loanAmount - downPayment;
  const monthlyInterestRate = calculateMonthlyInterestRate(creditScore);
  const numPayments = loanTermYears * 12;
  const monthlyPayment = calculateMonthlyPayment(principal, monthlyInterestRate, numPayments);
  const totalInterest = (monthlyPayment * numPayments) - principal;
  const totalAmount = monthlyPayment * numPayments;

  // Display the calculated values on the page
  document.querySelector('.loan-amount .value').textContent = `$${loanAmount.toFixed(2)}`;
  document.querySelector('.down-payment .value').textContent = `$${downPayment.toFixed(2)}`;
  document.querySelector('.loan-term-years .value').textContent = `${loanTermYears} years`;
  document.querySelector('.credit-score .value').textContent = `${creditScore}`;
  document.querySelector('.monthly-payment .value').textContent = `$${monthlyPayment.toFixed(2)}`;
  document.querySelector('.total-interest .value').textContent = `$${totalInterest.toFixed(2)}`;
  document.querySelector('.total-amount .value').textContent = `$${totalAmount.toFixed(2)}`;

// Use the credit score value to update the gauge chart
var gaugeValue = calculateMonthlyInterestRate(creditScore) * 10;
var gaugeData = [        
  {
    type: "indicator",
    mode: "gauge+number",
    value: gaugeValue,
    title: {
      text: "Mortgage Interest Rate Gauge",
      font: { size: 20 }
    },
    gauge: {
      axis: {
        range: [0, 10],
        tickvals: [0, 2, 4, 6, 8, 10],
        ticktext: ['0', '2', '4', '6', '8', '10'],
        tickwidth: 2,
        tickcolor: "red"
      },
      bar: { color: "darkblue" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0, 2], color: "red" },
        { range: [2, 4], color: "orange" },
        { range: [4, 6], color: "yellow" },
        { range: [6, 8], color: "lightgreen" },
        { range: [8, 10], color: "darkgreen" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: gaugeValue
      }
    }
  }
];

  var gaugeLayout = {
    width: 250,
    height: 250,
    margin: {
      l: 200,
      r: 200,
      t: 50,
      b: 50
    }
  };
  
  Plotly.newPlot('gauge-chart', gaugeData, gaugeLayout);
}