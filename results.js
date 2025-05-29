//Evaluation System

let Q1 = parseInt(document.getElementById("transportation").value);
let Q2 = parseInt(document.getElementById("airtravel").value);
let Q3 = parseInt(document.getElementById("foodhabits").value);
let Q4 = parseInt(document.getElementById("housing").value);
let Q5 = parseInt(document.getElementById("energy").value);
let Q6 = parseInt(document.getElementById("food").value);
let Q7 = parseInt(document.getElementById("garbage").value);
let Q8 = parseInt(document.getElementById("car").value);
let Q9 = parseInt(document.getElementById("public").value);
let Q10 = parseInt(document.getElementById("waste").value);

let totalScore = Q1+Q2+Q3+Q4+Q5+Q6+Q7+Q8+Q9+Q10;

console.log(totalScore);