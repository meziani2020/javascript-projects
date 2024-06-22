let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(num.toString().length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 123.45;
console.log(`ther is ${num.toString().length-1 } digits in ${num} `); // substracting 1 to exclude the . in the decimal

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
num = 12345;

if(num.toString().includes(".")){
    // is decimal
    console.log(`ther is ${num.toString().length-1 } digits in ${num} `); 
}else{
    //is entiger
    console.log(`ther is ${num.toString().length} digits in ${num} `); 
}