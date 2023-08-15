// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    //doesn't need to return anything
   // uncomment put inside template literal, get mission target element set inner html of element to template literal
   // Here is the HTML formatting for our mission 
   { const missionTarget = document.getElementByID("missionTarget")
    missionTarget = missionTarget.innerHTML  
      `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${image}">
   
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
   

       if (validateInput(pilot) === "" || validateInput(copilot) === ""|| validateInput(fuelLevel) === ""|| validateInput(cargoLevel) === "") {
          alert("All fields are required!");
          // stop the form submission
       }
       else if(validateInput(pilot) === "Is a Number"|| validateInput(copilot) === "Is a Number" ){
        alert("Answer cannot be a number")
       }
       else if(validateInput(fuelLevel) === "Is Not a Number"|| validateInput(cargoLevel) === "Is Not a Number"){
        alert("Answer must be a number")
       }
   
      
       else if{validateInput(pilot)}{
        let pilot = `${pilotNameInput} ready`
       }
       else if{validateInput(copilot)} {
        let copilot = `${copilotNameInput} ready`
       }
       else if{(fuelLevel < 10000)}{
        faultyItems.style.visibility = visible;
        let fuelStatus = "Not enough fuel for journey";
        let launchStatus = "Shuttle not ready";
        launchStatus.style.color =  #C7254E;
 

       }
       else if{(cargoLevel > 10000)}{
        faultyItems.style.visibility = "visible";
        let cargoStatus = "Not enough fuel for journey";
        let launchStatus = "Shuttle not ready";
        launchStatus.style.color =  #C7254E;
       }
       else {
        let launchStatus = "Shuttle is ready for launch!";
        launchStatus.style.color =  #419F6A ;
      
       }
    };
 

async function myFetch() {

    let planetsReturned = ;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        
});
    return planetsReturned;
};

function pickPlanet(planets) {
   
    return (planets[Math.floor(Math.random() * 6);])
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
