function calculateMortgagePayment(principal, down-payment, interestRate, loan_term) {
    const monthlyInterestRate = interestRate / 12;
    const loan_amount = principal - down-payment;
    const totalPayments = loan_term * 12;
    const compoundedInterestRate = Math.pow(1 + monthlyInterestRate, totalPayments);
    const monthlyPayment = (loan_amount * (monthlyInterestRate * compoundedInterestRate)) / (compoundedInterestRate - 1);
    return monthlyPayment;
  }
  const loan_amount = prompt(“Enter the loan amount:“);
  const down-payment = prompt(“Enter the down payment amount (if any):“) || 0;
  const interestRate = prompt(“Enter the annual interest rate (%):“) / 100;
  const loan_term = prompt(“Enter the loan term (in years):“);
  const monthlyPayment = calculateMortgagePayment(loanAmount, downPayment, interestRate, loanTerm);
  alert(`Monthly Payment: $${monthlyPayment.toFixed(2)}`);