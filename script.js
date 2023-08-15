// Write your JavaScript code here!
// *call formSub at right time*

const { pickPlanet, formSubmission, addDestinationInfo } = require("./scriptHelper");

//
window.addEventListener("load", function() {
//create event listener() handles formSubmission, calls formSubmission

    let form = document.querySelector("testForm");
    formSubmission.addEventListener("submit", function(event) {
       let pilotNameInput = document.querySelector("input[name=pilotName]").value;
       let copilotNameInput = document.querySelector("input[name=copilotName]").value;
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
       let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
       let form = document.querySelector("faultyItems");
       formSubmission(document, form, pilotNameInput,copilotNameInput,fuelLevelInput, cargoMassInput);
          event.preventDefault();  
})
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch() 
   let listedPlanetsResponse = planetsReturned;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planet = pickPlanet(listedPlanetsResponse);
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
















        0
    })
   
});