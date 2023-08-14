// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    //doesn't need to return anything
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}



function validateInput(testInput) {
   //takes in a string and returns "Empty", "Not a Number" (uses isNAN()), or "Is a Number", use it to complete formSubmission
alert("All fields are required!")
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
    let document = document.querySelector("launchStatusCheck");
    let form = document.querySelector("faultyItems");
    let pilot = document.querySelector(pilotStatus.value);
    let copilot = document.querySelector(copilot.value);
    let fuelLevel = document.querySelector(fuelStatus.value);
    let cargoLevel = document.querySelector(cargoStatus.value);
   //takes document param or string for the others, values are for HTML doc =, updat shuttle req. *Make sure to call it at right time in script file*
   //validateInput?
     //change pilotStatus Id

       if (pilot === "" || copilot === ""|| fuelLevel === ""|| cargoLevel === "") {
          alert("All fields are required!");
          // stop the form submission
   
      }
       else if{validateInput(pilot)=== true}{
        let pilot = ${pilotNameInput.value} ready
       }
       else if{validateInput(copilot)=== true}{
        let copilot = ${copilotNameInput.value} ready
       }
       else if{validateInput(fuelLevel) === true && fuelLevel <= 10000>}{
        let fuelStatus = Not enough fuel for journey;
        let launchStatus = Shuttle not ready;
        <h2 style = "color:  #C7254E ;"></h2>
        #faultyItems{"visibilty:visible"}
       }
       else if{validateInput(cargoLevel) === true && cargoLevel <= 10000>}{
        let cargoStatus = Not enough fuel for journey;
        let launchStatus = Shuttle not ready;
        <h2 style = "color: #C7254E ;"></h2>
        #faultyItems{"visibilty:visible"}
       }
       else {
        let launchStatus = Shuttle is ready for launch!;
        <h2 style = "color: #419F6A ;"></h2>
      
       }
    };
 

async function myFetch() {
    //need to add URLand return response.json 
    let planetsReturned = ;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        )

    return planetsReturned;
};

function pickPlanet(planets) {
    for(i=0; i < planets.length; i++)
    return (planets[Math.random(i)])
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
