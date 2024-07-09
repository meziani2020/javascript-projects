// Code your selectRandomEntry function here:
function selectRandomEntry(arr){
   return rondonIdex=arr[Math.floor(Math.random()*arr.length)];
   
}

// Code your buildCrewArray function here:

function select3IDfrom(arr){
   let selectedIds=[];

   while(selectedIds.length<3){
      let id=selectRandomEntry(arr);
      if(!selectedIds.includes(id)){
        selectedIds.push(id);
      }
   }

 return selectedIds;
}




function crewSelection( idsArray, animalsArray){
    let crew=[];
     
    for(let i=0;i<idsArray.length;i++){
       let id=idsArray[i];
       for(j=0;j<animalsArray.length;j++){
          let  animal=animalsArray[j];
          if(animal["astronautID"]===id){
             crew.push(animal);
          }

       }


    }
  return crew;
};


let idNumbers = [291, 414, 503, 599, 796, 890];

console.log(selectRandomEntry(idNumbers));
console.log(select3IDfrom(idNumbers));


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
  
  
//'____, ____, and ____ are going to space!'
let selections=select3IDfrom(idNumbers);
let crew=crewSelection(selections,animals);
console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!` );
