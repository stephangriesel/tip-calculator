var amount = document.querySelector('#amount');
var people = document.querySelector('#people');
var tip = document.querySelector('#tip');
var result = document.querySelector('#result')

var calculateAmountOwed = function() {
    var tipAmount = tip.value.length > 0 ? tip.value / 100 : 0;
    var perPerson = amount.value.length > 0 && people.value.length > 0 ? amount.value / people.value : 0;
    var owed = perPerson + (perPerson * tipAmount);

    return owed;

};

var changeHandler = function(event){
    if(!event.target.closest('.container')) return;

    result.innerHTML = 'The total amount you owe is ' + calculateAmountOwed() + ' per person.';
};

document.addEventListener('input', changeHandler, false);