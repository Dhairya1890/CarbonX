
// Question 1
const transportSlider = document.getElementById("transportation");
const Description = document.getElementById("description");

const TransportLevels = [
  "Never",
  "Rarely",
  "Sometimes",
  "Often",
  "Daily"
];

transportSlider.addEventListener("input", function () {
  const value = parseInt(this.value);
  Description.textContent = TransportLevels[value];
});

// Question 2
const airtravelSlider = document.getElementById("airtravel");
const Description02 = document.getElementById("description01");

const airtravelLevels = [
  "0 Hours",
  "2 to 4 hours",
  "4 to 5 hours",
  "6 to 8 hours",
  "More than 10 hours"
];

airtravelSlider.addEventListener("input", function () {
  const value = parseInt(this.value);
  Description02.textContent = airtravelLevels[value];
});

// Question 3
const foodhabitSlider = document.getElementById("foodhabits");
const Description03 = document.getElementById("description02");

const foodLevels = [
  "Never",
  "Rarely",
  "Sometimes",
  "Often",
  "Daily"
];

foodhabitSlider.addEventListener("input", function () {
  const value = parseInt(this.value);
  Description03.textContent = foodLevels[value];
});

// Question 4
const housingSlider = document.getElementById("housing");
const Description04 = document.getElementById("description03");

const familyLevels = [
  "Alone",
  "With my Partner",
  "With Family"
];

housingSlider.addEventListener("input", function () {
  const value = parseInt(this.value);
  Description04.textContent = familyLevels[value];
});

// Question 5
const energySlider = document.getElementById("energy");
const Description05 = document.getElementById("description04");

const energyLevels = [
    "I don’t use any energy-efficient appliances",
    "I turn off lights/appliances when not in use",
    "I use some energy-saving devices (LEDs, star-rated AC, etc.)",
    "I follow most best practices + use efficient appliances",
    "My home is optimized for energy saving (solar, smart devices, insulation)"
];

energySlider.addEventListener("input", function () {
  const value = parseInt(this.value);
  Description05.textContent = energyLevels[value];
});

// Question 6
const foodSlider = document.getElementById("food");
const Description06 = document.getElementById("description05");

const FoodGrowthLevels = [
    "None of the food",
    "Some of the food",
    "Almost all",
    "All Food WE EAT ARE LOCAL AND UNPROCESSED"
];

foodSlider.addEventListener("input", function(){
  const value = parseInt(this.value);
  Description06.textContent = FoodGrowthLevels[value];
});

// Question 7
const GarbageSlider = document.getElementById("garbage");
const Description07 = document.getElementById("description06");

const GarbageLevels = [
    "Much more than neighbours",
    "More than them",
    "Same",
    "Less than neighbours"
];

GarbageSlider.addEventListener("input", function(){
  const value = parseInt(this.value);
  Description07.textContent = GarbageLevels[value];
});

// Question 8
const CarSlider = document.getElementById("car");
const Description08 = document.getElementById("description07");

CarSlider.oninput = function(){
  Description08.innerHTML = `${this.value} KM's`;
};

// Question 9
const PublicSlider = document.getElementById("public");
// FIX: Corrected typo in the assignment for Description09
const Description09 = document.getElementById("description08"); 

PublicSlider.oninput = function(){
  Description09.innerHTML = `${this.value} KM's`;
};

// Question 10
const PlasticSlider = document.getElementById("waste");
const Description010 = document.getElementById("description09");

PlasticSlider.oninput = function(){
  Description010.innerHTML = `${this.value} Bottles`;
};





