//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');

let fuelLevel=0;
let astronotes=-1;
let altitude=0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  while(fuelLevel<=5000 || fuelLevel >30000 ){
    fuelLevel=input.question("from 5000 to 3000  starting fule level? ");
  }
  

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
while(astronotes< 0 || astronotes >7 ){
  astronotes=input.question("up to a maximum of 7,  number of astronauts? ");
  //validation
  if(astronotes< 0 || astronotes >7){console.log("invalit entry!!")}
} 
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

//decrease fuel 100/astronote,   altitud+50  // contition  fule < 100/astronote
while(fuelLevel>= astronotes * 100 ){
  fuelLevel=fuelLevel-astronotes*100;
  altitude=altitude+50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let addedMsg="";

if (altitude >= 2000) {
  addedMsg = " Orbit achieved!";
} else 
  {
    addedMsg = "Failed to reach orbit"
  }
  console.log(`The shuttle gained an altitude of ${altitude} km.  ${addedMsg}`);