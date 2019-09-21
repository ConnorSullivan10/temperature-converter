console.log('hi');

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
}

let formInput = document.getElementById("exampleFormControlInput1").value;

const toCelsius =  () => {
  ((formInput-32)*5/9).join(" °C");
};

const toFahrenheit =  () => {
  (formInput*9/5+32).join(" °F");
};

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  const fCheck = document.getElementById("myRadioF").checked;
  const cCheck = document.getElementById("myRadioC").checked;
  let domString = ``;
  // console.log("event", e);
  if (fCheck) {
    domString = toFahrenheit();
  } else if (cCheck) {
    domString = toCelsius();
  }
  printToDom(domString, "convertedTemp")
};
console.log(determineConverter);

  const clearConverter = (e) => {
    printToDom([], "convertedTemp");
    formInput == 0;
  }

  // Assign a function to be executed when the button is clicked
  const convertButton = document.getElementById("convert");
  const clearButton = document.getElementById("clear");

  convertButton.addEventListener("click", determineConverter);
  clearButton.addEventListener("click", clearConverter);