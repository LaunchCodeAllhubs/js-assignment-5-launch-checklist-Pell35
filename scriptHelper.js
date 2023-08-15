// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    //doesn't need to return anything
   // uncomment put inside template literal, get mission target element set inner html of element to template literal
   // Here is the HTML formatting for our mission 
    const missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML =
      `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
   
`}



function validateInput(testInput) {
   //takes in a string and returns "Empty", "Not a Number" (uses isNAN()), or "Is a Number", use it to complete formSubmissio
   if(testInput === ""){
    return "Empty" //makes sure parameter isn't an empty string
}

else if (isNaN(Number(testInput))){
    return "Is Not a Number" //tries to change it to a number and then checks that it isNAN

}
else{
   return "Is a Number" //It actually was a number if it made it this far
}

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

   //takes document param or string for the others, values are for HTML doc =, updat shuttle req. *Make sure to call it at right time in script file*
    let pilotStatus= document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

       if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"|| validateInput(fuelLevel) === "Empty"|| validateInput(cargoLevel) === "Empty") {
          alert("All fields are required!");
          // stop the form submission
       }
       else if(validateInput(pilot) === "Is a Number"|| validateInput(copilot) === "Is a Number"|| validateInput(fuelLevel) === "Is Not a Number"|| validateInput(cargoLevel) === "Is Not a Number" ){
        alert("Valid Input Required")
       }
      else{
        pilotStatus.innerHTML = `${pilot} ready`
        copilotStatus.innerHTML = `${copilot} ready`
        list.style.visibility = "visible";
      
  
      if(fuelLevel < 10000 && cargoLevel > 10000){
        fuelStatus.innerHTML = "Not enough fuel for journey";
        cargoStatus.innerHTML = "Cargo mass too high for launch";
        launchStatus.innerHTML = "Shuttle not ready";
        launchStatus.style.color =  "#C7254E";


       }
       else if(fuelLevel >= 10000 && cargoLevel > 10000){
        cargoStatus.innerHTML = "Cargo mass too high for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        launchStatus.innerHTML = "Shuttle not ready";
        launchStatus.style.color =  "#C7254E";
        }
        
        else if(fuelLevel < 10000 && cargoLevel <= 10000){
        cargoStatus.innerHTML = "Cargo mass low enough for journey";
        fuelStatus.innerHTML = "Not enough fuel for journey";
        launchStatus.innerHTML = "Shuttle not ready";
         launchStatus.style.color =  "#C7254E";
        }
       else {
        launchStatus.innerHTML = "Shuttle is ready for launch!";
        cargoStatus.innerHTML = "Cargo mass low enough for journey";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        launchStatus.style.color =  "#419F6A" ;
      
       }
      }
    };
 

async function myFetch() {

    let planetsReturned 

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { 
        return response.json()
        
});
    return planetsReturned;
};

function pickPlanet(planets) {
   
    return (planets[Math.floor(Math.random() * planets.length)]);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
