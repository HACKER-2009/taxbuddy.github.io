// JavaScript Functions

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
}

function navigateTo(pageId) {
  document.querySelectorAll('.container').forEach(page => {
    page.classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
  toggleSidebar(); // Hide sidebar after navigation
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    alert('Login successful!');
    navigateTo('homePage');
  } else {
    alert('Please enter a valid username and password.');
  }
}

function signup() {
  alert('Signup feature is under construction!');
}

function calculateTax() {
  const age = document.getElementById('age').value;
  const income = parseFloat(document.getElementById('income').value);
  const hra = parseFloat(document.getElementById('hra').value);
  const lta = parseFloat(document.getElementById('lta').value);
  const deductions = parseFloat(document.getElementById('deductions').value);
  let tax = 0;

  if (!income || !hra || !lta || !deductions) {
    alert('Please fill in all fields correctly.');
    return;
  }

  // Simple tax calculation logic
  if (age === 'below60') {
    tax = (income - hra - lta - deductions) * 0.1;
  } else if (age === '60to80') {
    tax = (income - hra - lta - deductions) * 0.08;
  } else if (age === 'above80') {
    tax = (income - hra - lta - deductions) * 0.05;
  }

  document.getElementById('result').innerHTML = `Estimated Tax: ₹${tax.toFixed(2)}`;
}

function planTaxes() {
  const investment = parseFloat(document.getElementById('investment').value);
  const insurance = parseFloat(document.getElementById('insurance').value);
  const homeLoan = parseFloat(document.getElementById('homeLoan').value);
  const donations = parseFloat(document.getElementById('donations').value);

  if (!investment || !insurance || !homeLoan || !donations) {
    alert('Please fill in all fields correctly.');
    return;
  }

  // Simple tax planning logic with personalized tips
  const totalTaxSavings = investment + insurance + homeLoan + donations;
  const tips = `
    <h3>Tax Saving Tips:</h3>
    <ul>
      <li>Maximize your 80C investments up to ₹1.5 lakh.</li>
      <li>Consider purchasing health insurance to save tax under 80D.</li>
      <li>Pay off home loan interest to avail deductions under Section 24.</li>
      <li>Donations to charitable organizations can provide deductions under 80G.</li>
    </ul>
    <p>Total Potential Tax Savings: ₹${totalTaxSavings.toFixed(2)}</p>
  `;

  document.getElementById('plannerResult').innerHTML = tips;
}

function toggleCalculator() {
  const calculator = document.getElementById('embeddedCalculator');
  calculator.classList.toggle('hidden');
}

function toggleCalendar() {
  const calendar = document.getElementById('embeddedCalendar');
  calendar.classList.toggle('hidden');
}
