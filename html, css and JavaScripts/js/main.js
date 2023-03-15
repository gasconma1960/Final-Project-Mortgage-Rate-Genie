const calculateBtn = document.querySelector('.calculate-btn');
calculateBtn.addEventListener('click', calculateInterest);

function calculateInterest() {
    const loanAmount = parseFloat(document.querySelector('.loan-amount').value);
    const downPayment = parseFloat(document.querySelector('.down-payment').value);
    const loanTerm = parseFloat(document.querySelector('.loan-term-years').value);
    const creditScore = parseFloat(document.querySelector('.credit-score').value);
    
    const principal = loanAmount - downPayment;
    const monthlyInterestRate = calculateMonthlyInterestRate(creditScore);
    const numPayments = loanTerm * 12;
    const monthlyPayment = calculateMonthlyPayment(principal, monthlyInterestRate, numPayments);
    const totalInterest = (monthlyPayment * numPayments) - principal;
    const totalAmount = monthlyPayment * numPayments;
    
    // Display the calculated values on the page
    document.querySelector('.loan-amount .value').textContent = `$${loanAmount.toFixed(2)}`;
    document.querySelector('.total-interest .value').textContent = `$${totalInterest.toFixed(2)}`;
    document.querySelector('.total-amount .value').textContent = `$${totalAmount.toFixed(2)}`;
    
    // Update the gauge with the new interest rate
    const gauge = document.querySelector('#gauge');
    const newInterestRate = monthlyInterestRate * 100;
    Plotly.update(gauge, { value: newInterestRate });
}

function calculateMonthlyInterestRate(creditScore) {
    // Add logic to calculate interest rate based on credit score
    return 0.05;
}

function calculateMonthlyPayment(principal, monthlyInterestRate, numPayments) {
    // Add logic to calculate monthly payment
    return 1000;
}

  // Deliverable 3: 4. Create the trace for the gauge chart.
  var gaugeData = [
    { title:{text: 'Mortgage Interest Gauge'},
    type: "indicator",
    value: wFreq,
    gauge: {
      axis: {range: [0,10], dtick:2},
      bar: {color: "black"},
      steps: [
        {range: [0,2], color: "red"},
        {range: [2,4], color: "orange"},
        {range: [4,6], color: "yellow"},
        {range: [6,8], color: "yellowgreen"},
        {range: [8,10], color: "green"}
      ]
    },
    mode: "gauge+number",
  }
]; // Create the layout for the gauge chart
const gaugeLayout = {
    width: 500,
    height: 400,
    margin: { t: 0, b: 0 },
    paper_bgcolor: '#f8f9fa',
    font: { color: '#2a2a2a', family: 'Arial' }
};

// Plot the gauge chart
Plotly.newPlot('gauge', gaugeData, gaugeLayout);
}

// Call the updatePlotly function when a change is detected in the input fields
d3.selectAll('input').on('change', updatePlotly);                
});

