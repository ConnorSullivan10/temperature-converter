console.log('hi');

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
}

 const toCelsius =  () => {
   let domString = ``;
   let formInput = (document.getElementById("exampleFormControlInput1").value-32)*5/9;
   let celsius = Math.round(formInput)//.join(" °C");
   domString += `<h3>${celsius}</h3>`
   printToDom(domString, "convertedTemp")
   if (celsius > 32 ) {
    document.getElementById("convertedTemp").style.color="red";
  } else if ( celsius < 0) {
    document.getElementById("convertedTemp").style.color="blue";
  } else {
    document.getElementById("convertedTemp").style.color="green";
  }
 };

const toFahrenheit =  () => {
  let domString = ``;
  let formInput = document.getElementById("exampleFormControlInput1").value*9/5+32;
  let fahrenheit = Math.round(formInput)//.join(" °F");
  domString += `<h3>${fahrenheit}</h3>`
  printToDom(domString, "convertedTemp")
  if (fahrenheit > 90 ) {
    document.getElementById("convertedTemp").style.color="red";
  } else if ( fahrenheit < 32) {
    document.getElementById("convertedTemp").style.color="blue";
  } else {
    document.getElementById("convertedTemp").style.color="green";
  }
};

// This function should determine which conversion should
// happen based on which radio button is selected.
 const determineConverter = (e) => {
   if (document.getElementById("myRadioF").checked) {
     toFahrenheit();
    // console.log(toFahrenheit);
   } else if (document.getElementById("myRadioC").checked) {
     toCelsius();
   }
 };

 const clearConverter = (e) => {
     printToDom([], "convertedTemp");
     document.getElementById("exampleFormControlInput1").value = '';
   }

  // Assign a function to be executed when the button is clicked
  const convertButton = document.getElementById("convert");
  const clearButton = document.getElementById("clear");

  convertButton.addEventListener("click", determineConverter);
  clearButton.addEventListener("click", clearConverter);

//   document.querySelector('#exampleFormControlInput1').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       determineConverter// code for enter
//     }
// });

window.addEventListener('keyup',function(e){
  console.log(e.keyCode);
    if (e.keyCode === 13) {
      e.preventDefault();
       determineConverter();
  }
});

