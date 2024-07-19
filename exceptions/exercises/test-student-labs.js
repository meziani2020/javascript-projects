function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {

    let lab = labs[i];
    let result;
    try {
    result = lab.runLab(3);
    console.log(`${lab.student} code worked: ${result === 27}`);
    }catch(err){
      
      if(typeof lab.runLab =="undefined"){
        console.log('looks like the "runLab" property is not defined. ');
        result ="Error thrown";
      }

    }
    
  }
}

let studentLabs = [
  {
    student: 'Blake',
    myCode: function (num) {
      return Math.pow(num, num);
    }
},
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);
