let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID:"01",
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {      
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID:"02",
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimptow = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID:"03",
   move: function () {return Math.floor(Math.random()*11)}
};



   
   let dogone = {
      name: "Leroy",
      species: "Beagle",
      mass: 14,
      age: 5,
      astronautID:"04",
      move: function () {return Math.floor(Math.random()*11)}
   };


			1
let TardigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID:5,
   move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew=[superChimpOne,salamander,dogone,superChimptow,TardigradeOne];
// Print out the relevant information about each animal.

  function crewReports(animal){
    return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
  }


  console.log(crewReports(TardigradeOne));

// Start an animal race!
function fitnessTest(candidates){
   let results = [];
   let raiseOrder=[];

    //------------------
    for (let i = 0; i < candidates.length; i++){
      candidates[i]["steped"]= 0;
      candidates[i]["turns"]= 0;

    }
    

    let runingCondidate=candidates;
    while(runingCondidate.length > 0){
       //all tak next stups
       console.log( "  ------------------");
        console.log(runingCondidate.length+ " runing...");
       for(let i=0;i<runingCondidate.length;i++){
         runingCondidate[i].steped+=runingCondidate[i].move();
         runingCondidate[i].turns=runingCondidate[i].turns+1;
         console.log(runingCondidate[i].name+" on turn "+runingCondidate[i].turns);
         if(runingCondidate[i].steped>=20 ){
              //get out, record in  raiseOrder
              console.log("      >>>"+runingCondidate[i].name+"   is out "+runingCondidate[i].steped);
              raiseOrder.push(runingCondidate[i]);
              runingCondidate.splice(i, 1);

         }

       }

    }
    //all animals done
    for(let j=0;j<raiseOrder.length;j++){
      results.push(`${raiseOrder[j].name} took ${raiseOrder[j].turns} turns to take 20 steps.`);
    }

return results;
}


console.log( fitnessTest(crew));