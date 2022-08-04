// https://calculator.swiftutors.com/hookes-law-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const forceRadio = document.getElementById('forceRadio');
const springForceConstantRadio = document.getElementById('springForceConstantRadio');
const distancefromEquilibriumRadio = document.getElementById('distancefromEquilibriumRadio');
const springEquilibriumPositionRadio = document.getElementById('springEquilibriumPositionRadio');

let force;
let springForceConstant = v1;
let distancefromEquilibrium = v2;
let springEquilibriumPosition = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

forceRadio.addEventListener('click', function() {
  variable1.textContent = '(k) Spring Force Constant (N/m)';
  variable2.textContent = '(x) Distance from Equilibrium (m)';
  variable3.textContent = '(x0) Spring Equilibrium Position (m)';
  springForceConstant = v1;
  distancefromEquilibrium = v2;
  springEquilibriumPosition = v3;
  result.textContent = '';
});

springForceConstantRadio.addEventListener('click', function() {
  variable1.textContent = '(Fx) Force (N)';
  variable2.textContent = '(x) Distance from Equilibrium (m)';
  variable3.textContent = '(x0) Spring Equilibrium Position (m)';
  force = v1;
  distancefromEquilibrium = v2;
  springEquilibriumPosition = v3;
  result.textContent = '';
});

distancefromEquilibriumRadio.addEventListener('click', function() {
  variable1.textContent = '(Fx) Force (N)';
  variable2.textContent = '(k) Spring Force Constant (N/m)';
  variable3.textContent = '(x0) Spring Equilibrium Position (m)';
  force = v1;
  springForceConstant = v2;
  springEquilibriumPosition = v3;
  result.textContent = '';
});

springEquilibriumPositionRadio.addEventListener('click', function() {
  variable1.textContent = '(Fx) Force (N)';
  variable2.textContent = '(k) Spring Force Constant (N/m)';
  variable3.textContent = '(x) Distance from Equilibrium (m)';
  force = v1;
  springForceConstant = v2;
  distancefromEquilibrium = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(forceRadio.checked)
    result.textContent = `Force = ${computeForce().toFixed(2)} N`;

  else if(springForceConstantRadio.checked)
    result.textContent = `Spring Force Constant = ${computeSpringForceConstant().toFixed(2)} N/m`;

  else if(distancefromEquilibriumRadio.checked)
    result.textContent = `Distance from Equilibrium = ${computeDistancefromEquilibrium().toFixed(2)} m`;

  else if(springEquilibriumPositionRadio.checked)
    result.textContent = `Spring Equilibrium Position = ${computeSpringEquilibriumPosition().toFixed(2)} m`;
})

// calculation

function computeForce() {
  return -Number(springForceConstant.value) * (Number(distancefromEquilibrium.value) - Number(springEquilibriumPosition.value));
}

function computeSpringForceConstant() {
  return (Number(force.value) / (Number(distancefromEquilibrium.value) - Number(springEquilibriumPosition.value))) * -1;
}

function computeDistancefromEquilibrium() {
  return (Number(force.value) - (Number(springForceConstant.value) * Number(springEquilibriumPosition.value))) / -Number(springForceConstant.value);
}

function computeSpringEquilibriumPosition() {
  return (Number(force.value) + (Number(springForceConstant.value) * Number(distancefromEquilibrium.value))) / Number(springForceConstant.value);
}