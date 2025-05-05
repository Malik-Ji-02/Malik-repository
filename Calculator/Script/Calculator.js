let calculation= localStorage.getItem(('calculation')) || ' ';

calculationDisplay(calculation);

function updateCalculation(button) {
    if(button === '=') {
    calculation = eval(calculation);
    calculationDisplay(calculation);
    calculation = ' ';
    }else if (button === 'clear') {
    calculation = ' ';
    calculationDisplay(calculation);
    }else {
    calculation += button;
    calculationDisplay(calculation);
    }

    localStorage.setItem('calculation', (calculation));

};

function calculationDisplay(calculation){
    const display = document.querySelector('.calculation-display');
    display.innerHTML = calculation;
};