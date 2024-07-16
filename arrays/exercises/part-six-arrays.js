//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
element1 = ['hydrogen', 'H', 1.008];
element2 = ['helium', 'He', 4.003];
element26 = ['iron', 'Fe', 55.85];
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
table=[];
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]); // print the row imdexed by  1
console.log(table[1][1]); // print the comums 1 of the row 1 
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table);
console.log(`the element1 mass is ${table[0][2]}, the name of elemet2 is ${table[1][0]} and the symbol for element26 is ${table[2][1]} .`);
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
// concidering 2 boxes stockin deferentelent
element4 = ['Maghnizium', 'Mn', 2 ];
element5 = ['aluminium', 'Al', 4.003];
element6 = ['zink', 'Zn', 55.85];

let tube1=[element1,element2,element26];
let tube2=[element4,element5,element6];

let boxe1=[tube1,tube2];
let boxe2=[];//umplty box

let boxes=[boxe1,boxe2];

console.log( boxes);
console.log(`the boxes content is  ${boxes}.`);
console.log(`the box1 content is  ${boxes[0]}.`);
console.log(`the tube 1 on box1 content is  ${boxes[0][0]}.`);
console.log(`the element 1 on tube 1 on box1 content is  ${boxes[0][0][0]}.`);
console.log(`the element 1 on tube 1 on box1 is named  ${boxes[0][0][0][0]}.`);
console.log(`the element 2 on tube 1 on box1 is named  ${boxes[0][0][1][0]}.`);
console.log(`the element 1 on tube 2 on box1 is named  ${boxes[0][1][0][0]}.`);
