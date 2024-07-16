// Declare and assign the variables below
let name_of_Space_shuttle ="Determination";
let shuttle_speed_mph=17500;
let distance_to_mars_klm=225000000;
let distance_to_moone_klm=384400;
const miles_per_km=0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log( typeof name_of_Space_shuttle);
console.log( typeof shuttle_speed_mph);
console.log(typeof distance_to_mars_klm);
console.log(typeof distance_to_moone_klm);
console.log(typeof miles_per_km);
// Calculate a space mission below
let distance_to_mars_miles=distance_to_mars_klm * miles_per_km;
let time_to_get_to_Mars_h=distance_to_mars_miles/shuttle_speed_mph;
let days_it_takes_to_Mars=time_to_get_to_Mars_h/24;
// Print the results of the space mission calculations below
console.log(name_of_Space_shuttle+" will take "+ days_it_takes_to_Mars+" days to reach Mars.");
// Calculate a trip to the moon below
let distance_To_Moon_mile = distance_to_moone_klm * miles_per_km;
let time_it_takes_to_moon_h = distance_To_Moon_mile / shuttle_speed_mph;
let time_to_moon_days = time_it_takes_to_moon_h / 24;
// Print the results of the trip to the moon below
console.log(name_of_Space_shuttle + " will take " + time_to_moon_days + " days to reach the Moon.");