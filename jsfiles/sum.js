//Allows users to enter numbers separated by commas and then prints sum of the numbers
const prompt=require("prompt-sync")({sigint:true}); 
function addnumbers(){
const input = prompt("Enter numbers separated by commas:");
const numbers = input.split(",").map(Number);
const sum = numbers.reduce((a, b) => a + b, 0);
console.log("The sum is:", sum);

}

addnumbers();


