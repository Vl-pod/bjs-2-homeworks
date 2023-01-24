// 1 зад.
"use strict"
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    return [x];
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  }
}

solveEquation();


// 2 зад.
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseFloat(countMonths);

  if (isNaN(percent) || percent < 0 || percent > 100) {
      return false;
  }
  if (isNaN(contribution) || contribution < 0) {
      return false;
  }
  if (isNaN(amount) || amount < 0) {
      return false;
  }
  if (isNaN(countMonths) || countMonths < 0) {
      return false;
  }
  percent /= 100;
  let monthlyRate = percent / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return Number(totalAmount.toFixed(2));   
}