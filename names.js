//Array of names
const names =["Aditi" , "Astha" , "Shreyshri" , "Jhanvi" , "Vani"];

console.log("Names with length greater than s:");
names.filter(name => name.length > 5).forEach(name => console.log(name));