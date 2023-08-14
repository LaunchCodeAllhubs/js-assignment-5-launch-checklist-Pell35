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
// I need to add preventDefault(),  *DOES IT GO IN validateInput()*
//    a. The user has entered something for every field.
//    b. The user has entered string values for names and number for fuel and cargo levels.
function validateInput(testInput) {
   //takes in a string and returns "Empty", "Not a Number" (uses isNAN()), or "Is a Number", use it to complete formSubmission
if(testInput === ""){
    return "Empty"
}

else if (isNaN(Number(testInput))){
    return "Is Not a Number"

}
else{
   return "Is a Number"
}

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //takes document param or string for the others, values are for HTML doc =, updat shuttle req. *Make sure to call it at right time in script file*
   //validateInput?
     //change pilotStatus Id

//        if (pilotNameInput.value === "" || copilotNameInput.value === ""|| fuelLevelInput.value === ""|| cargoMassInput.value === "") {
//           alert("All fields are required!");
//           // stop the form submission
   
//       }
//        else if{validateInput(pilotNameInput.value)=== true}{
//         let pilotStatus = ${pilotNameInput.value} ready
//        }
//        else if{validateInput(copilotNameInput.value)=== true}{
//         let copilotStatus = ${copilotNameInput.value} ready
//        }
//        else if{validateInput(fuelLevel.value) === true && fuelLevel.value <= 10000>}{
//         let fuelStatus = Not enough fuel for journey;
//         let launchStatus = Shuttle not ready;
//         <h2 style = "color:red;"></h2>
//         #faultyItems{"visibilty:visible"}
//        }
//     });
//  });

}

async function myFetch() {
    //need to add URLand return response.json
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    //takes list of planets, use Math.Random to select one index
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
