// Error variables

let daysFieldReq = document.getElementById('days-filed-req');
let monthsFieldReq = document.getElementById('months-filed-req');
let yearsFieldReq = document.getElementById('years-filed-req');

let daysValidInput = document.getElementById('days-valid-input');
let monthsValidInput = document.getElementById('months-valid-input');
let yearsValidInput = document.getElementById('years-valid-input');

let daysValidNumber = document.getElementById('days-valid-number');
let monthsValidNumber = document.getElementById('months-valid-number');
let yearsValidNumber = document.getElementById('years-valid-number');

// Inputs variables

let daysTextBox = document.getElementById('days-input');
let monthsTextBox = document.getElementById('months-input');
let yearsTextBox = document.getElementById('years-input');

// programming variable

let maxDays = 0;

let resultDay = document.getElementById('result-day');
let resultMonth = document.getElementById('result-month');
let resultYear = document.getElementById('result-year');

let currYear = new Date().getFullYear();
let currMonth = new Date().getMonth() + 1;
let currDay = new Date().getDay() + 15;


// Rules functions

daysTextBox.onkeyup = function(){

    if(daysTextBox.value < 0){
        daysValidNumber.style.cssText = `opacity: 1; margin-top: 0px;`
        daysTextBox.style.cssText = `border: 2px solid red;`
    } else{
        daysValidNumber.style.cssText = `opacity: 0; margin-top: -5px;`
        daysTextBox.style.cssText = `border: 2px solid #868686;`
        if(daysTextBox.value >= 0 && daysTextBox.value <= maxDays ){
            daysValidInput.style.cssText = `opacity: 0; margin-top: -5px;`
            daysTextBox.style.cssText = `border: 2px solid #868686;`
        } else{
            daysValidInput.style.cssText = `opacity: 1; margin-top: 0px;`
            daysTextBox.style.cssText = `border: 2px solid red;`
        }
    }

    if(daysTextBox.value.length > 0){
        daysFieldReq.style.cssText = `opacity: 0; margin-top: -5px;`
    }
}

monthsTextBox.onkeyup = function(){

    if(monthsTextBox.value < 0){
        monthsValidNumber.style.cssText = `opacity: 1; margin-top: 0px;`
        monthsTextBox.style.cssText = `border: 2px solid red;`
    } else{
        monthsValidNumber.style.cssText = `opacity: 0; margin-top: -5px;`
        monthsTextBox.style.cssText = `border: 2px solid #868686;`
        if(monthsTextBox.value >= 0 && monthsTextBox.value <= 12 ){
            monthsValidInput.style.cssText = `opacity: 0; margin-top: -5px;`
            monthsTextBox.style.cssText = `border: 2px solid #868686;`
        } else{
            monthsValidInput.style.cssText = `opacity: 1; margin-top: 0px;`
            monthsTextBox.style.cssText = `border: 2px solid red;`
        }
    }

    if(monthsTextBox.value.length > 0){
        monthsFieldReq.style.cssText = `opacity: 0; margin-top: -5px;`
    }

    if(monthsTextBox.value == 1){
        maxDays = 31;
    } else if (monthsTextBox.value == 2){
        maxDays = 28;
    } else if (monthsTextBox.value == 3){
        maxDays = 31;
    } else if (monthsTextBox.value == 4){
        maxDays = 30;
    } else if (monthsTextBox.value == 5){
        maxDays = 31;
    } else if (monthsTextBox.value == 6){
        maxDays = 30;
    } else if (monthsTextBox.value == 7){
        maxDays = 31;
    } else if (monthsTextBox.value == 8){
        maxDays = 31;
    } else if (monthsTextBox.value == 9){
        maxDays = 30;
    } else if (monthsTextBox.value == 10){
        maxDays = 31;
    } else if (monthsTextBox.value == 11){
        maxDays = 30;
    } else if (monthsTextBox.value == 12){
        maxDays = 31;
    } 
}

yearsTextBox.onkeyup = function(){

    if(yearsTextBox.value < 0){
        yearsValidNumber.style.cssText = `opacity: 1; margin-top: 0px;`
        yearsTextBox.style.cssText = `border: 2px solid red;`
    } else{
        yearsValidNumber.style.cssText = `opacity: 0; margin-top: -5px;`
        yearsTextBox.style.cssText = `border: 2px solid #868686;`
        if(yearsTextBox.value >= 0 && yearsTextBox.value <= 2024 ){
            yearsValidInput.style.cssText = `opacity: 0; margin-top: -5px;`
            yearsTextBox.style.cssText = `border: 2px solid #868686;`
        } else{
            yearsValidInput.style.cssText = `opacity: 1; margin-top: 0px;`
            yearsTextBox.style.cssText = `border: 2px solid red;`
        }
    }

    if(yearsTextBox.value.length > 0){
        yearsFieldReq.style.cssText = `opacity: 0; margin-top: -5px;`
    }
}

// clearing everything out

let clearAll = document.getElementById('clear-all');
clearAll.onclick = function(){
    daysTextBox.value = '';
    monthsTextBox.value = '';
    yearsTextBox.value = '';

    daysTextBox.style.cssText = `border: 2px solid #868686`;
    monthsTextBox.style.cssText = `border: 2px solid #868686`;
    yearsTextBox.style.cssText = `border: 2px solid #868686`;

    daysFieldReq.style.cssText = `opacity: 0; margin-top: -5px;`;
    monthsFieldReq.style.cssText = `opacity: 0; margin-top: -5px;`;
    yearsFieldReq.style.cssText = `opacity: 0; margin-top: -5px;`;

    daysValidInput.style.cssText = `opacity: 0; margin-top: -5px;`;
    monthsValidInput.style.cssText = `opacity: 0; margin-top: -5px;`;
    yearsValidInput.style.cssText = `opacity: 0; margin-top: -5px;`;

    daysValidNumber.style.cssText = `opacity: 0; margin-top: -5px;`;
    monthsValidNumber.style.cssText = `opacity: 0; margin-top: -5px;`;
    yearsValidNumber.style.cssText = `opacity: 0; margin-top: -5px;`;

    resultDay.innerHTML = '--';
    resultMonth.innerHTML = '--';
    resultYear.innerHTML = '--';
}

// Submiting

function submit(){
    
    // Days
    if(daysTextBox.value.length == 0){
        daysFieldReq.style.cssText = `opacity: 1; margin-top: 0px;`
        daysTextBox.style.cssText = `border: 2px solid red;`
    }
    else{
        daysFieldReq.style.cssText = `opacity: 0; margin-top: -5px;`
        daysTextBox.style.cssText = `border: 2px solid #868686;`
        
        if(daysTextBox.value < 0){
            daysValidNumber.style.cssText = `opacity: 1; margin-top: 0px;`
            daysTextBox.style.cssText = `border: 2px solid red;`
        } else{
            daysValidNumber.style.cssText = `opacity: 0; margin-top: -5px;`
            daysTextBox.style.cssText = `border: 2px solid #868686;`
            if(daysTextBox.value >= 0 && daysTextBox.value <= maxDays ){
                daysValidInput.style.cssText = `opacity: 0; margin-top: -5px;`
                daysTextBox.style.cssText = `border: 2px solid #868686;`
            } else{
                daysValidInput.style.cssText = `opacity: 1; margin-top: 0px;`
                daysTextBox.style.cssText = `border: 2px solid red;`
            }
        }

    }

    // Months

    if(monthsTextBox.value.length == 0){
        monthsFieldReq.style.cssText = `opacity: 1; margin-top: 0px;`
        monthsTextBox.style.cssText = `border: 2px solid red;`
    }
    else{
        monthsFieldReq.style.cssText = `opacity: 0; margin-top: -5px;`
        monthsTextBox.style.cssText = `border: 2px solid #868686;`

        if(monthsTextBox.value < 0){
            monthsValidNumber.style.cssText = `opacity: 1; margin-top: 0px;`
            monthsTextBox.style.cssText = `border: 2px solid red;`
        } else{
            monthsValidNumber.style.cssText = `opacity: 0; margin-top: -5px;`
            monthsTextBox.style.cssText = `border: 2px solid #868686;`
            if(monthsTextBox.value >= 0 && monthsTextBox.value <= 12 ){
                monthsValidInput.style.cssText = `opacity: 0; margin-top: -5px;`
                monthsTextBox.style.cssText = `border: 2px solid #868686;`
            } else{
                monthsValidInput.style.cssText = `opacity: 1; margin-top: 0px;`
                monthsTextBox.style.cssText = `border: 2px solid red;`
            }
        }

    }

    // Years

    if(yearsTextBox.value.length == 0){
        yearsFieldReq.style.cssText = `opacity: 1; margin-top: 0px;`
        yearsTextBox.style.cssText = `border: 2px solid red;`
    }
    else{
        yearsFieldReq.style.cssText = `opacity: 0; margin-top: -5px;`
        yearsTextBox.style.cssText = `border: 2px solid #868686;`
                
        if(yearsTextBox.value < 0){
            yearsValidNumber.style.cssText = `opacity: 1; margin-top: 0px;`
            yearsTextBox.style.cssText = `border: 2px solid red;`
        } else{
            yearsValidNumber.style.cssText = `opacity: 0; margin-top: -5px;`
            yearsTextBox.style.cssText = `border: 2px solid #868686;`
            if(yearsTextBox.value >= 0 && yearsTextBox.value <= 2024 ){
                yearsValidInput.style.cssText = `opacity: 0; margin-top: -5px;`
                yearsTextBox.style.cssText = `border: 2px solid #868686;`
            } else{
                yearsValidInput.style.cssText = `opacity: 1; margin-top: 0px;`
                yearsTextBox.style.cssText = `border: 2px solid red;`
            }
        }
    }

    if(yearsTextBox.value.length > 0 && yearsTextBox.value >= 0 && yearsTextBox.value <= 2024){
        if(monthsTextBox.value.length > 0 && monthsTextBox.value >= 0 && monthsTextBox.value <= 12){
            if(daysTextBox.value.length > 0 && daysTextBox.value >= 0 && daysTextBox.value <= maxDays){
                
                resultYear.innerHTML = (yearsTextBox.value - currYear) * -1;
                if((monthsTextBox.value - currMonth) < 0){
                    resultMonth.innerHTML = (monthsTextBox.value - currMonth) * -1;
                }
                else{
                    resultMonth.innerHTML = monthsTextBox.value - currMonth;
                }
                if((daysTextBox.value - currDay) < 0){
                    resultDay.innerHTML = (daysTextBox.value - currDay) * -1;
                }
                else{
                    resultDay.innerHTML = daysTextBox.value - currDay;
                }

            }
        }
    }


}