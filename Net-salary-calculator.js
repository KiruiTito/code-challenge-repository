const basicSalary = prompt("Enter basic salary: ");
const benefits = prompt("Enter benefits: ");
const grossSalary = Number(basicSalary) + Number(benefits);
const taxRates = {
  0: 0,
  12298: 10,
  23885: 15,
  35472: 20,
  47059: 25,
  1000000000: 30,
};
const nhifDeductions = [150, 300, 400, 500];
const nssfDeductions = {
  employee: 0.06,
  employer: 0.06,
};

function calculateTaxablePay(grossSalary, nhifDeductions, nssfDeductions) {
  const taxablePay = grossSalary - nhifDeductions - (grossSalary * nssfDeductions.employee);
  return taxablePay;
}

function calculateTax(taxablePay, taxRates) {
  let tax = 0;
  let prevRate = 0;
  
  for (const [threshold, rate] of Object.entries(taxRates)) {
    if (taxablePay > threshold) {
      const taxableIncome = threshold - prevRate;
      tax += (taxableIncome * rate) / 100;
      prevRate = threshold;
    } else {
      const taxableIncome = taxablePay - prevRate;
      tax += (taxableIncome * rate) / 100;
      break;
    }
  }
  
  return tax;
}

const taxablePay = calculateTaxablePay(grossSalary, nhifDeductions[0], nssfDeductions);
const tax = calculateTax(taxablePay, taxRates);
const nhif = nhifDeductions
