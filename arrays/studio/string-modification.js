const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.

let first3= str.slice(0,3);
let rest=str.slice(3,str.length-1);
let newStr=rest+first3;



//Hint - define another variable to hold the new string or reassign the new string to str.


str=input.question("enter the new string to use");

console.log(usernbr);
//Use a template literal to print the original and modified string in a descriptive phrase.
let description=`the orriginal is:${str} , new string is  ${newStr} ` ;
console.log(description);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let usernbr=input.question("enter the number of caracter to relocate ?");
usernbr=nember(usernbr);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(usernbr <= str.length){
    first3= str.slice(0,usernbr-1);
    rest=str.slice(usernbr,str.length-1);
    newStr=rest+first3;
}else{
    
}
