

var allowedValues = [249,253,257,170,186,196,206,216,226,236,245,181,191,201,211,221,231,241,176];
var filteredInputs = [];
var submitBtn = document.querySelector("#btnApply");

var radioInputs = document.querySelectorAll("input[type='radio']");
radioInputs.forEach(function(input) {
 
  if (allowedValues.includes(parseInt(input.value))) {
    //console.log(input);
    filteredInputs.push(input);
  }
});

filteredInputs.forEach(function(input){
    input.checked = true;
})

submitBtn.click();
