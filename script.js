document.getElementById("popup-close-button").onclick = function() {
    document.getElementById("popup").style.display = "block";
};

document.querySelector(".close").onclick = function(){
    document.getElementById("popup").style.display = "none";
};

document.getElementById("popup-close-button").onclick = function(){
    document.getElementById("popup").style.display = "none"; 
};

window.onload = function () {
   document.getElementById("popup").style.display = "block";
};

const translation = {
    en : {
        title : "IF EVERYONE LIVED LIKE YOU...",
        sub1 : "See how your lifestyle could shape the future of our planet",
        sub2 : "How much the global temperature will rise?",
        sub3 : "Find the X"
    },
    in : {
        title : "🌍अगर हर कोई आपके जैसा रहता...🌍",
        sub1 : "देखें कि आपकी जीवनशैली पृथ्वी के भविष्य को कैसे प्रभावित कर सकती है",
        sub2 : "यदि सभी आपकी तरह रहते हैं तो तापमान कितना बढ़ेगा?",
        sub3 : "X को खोजें"
    }
};

const dropdown = document.getElementById("languages");

dropdown.addEventListener('change', function(){
    const selectedValue = this.value;
    console.log("User Selected", selectedValue)
        document.getElementById("heading").textContent = translation[selectedValue].title;
        document.getElementById("sub-head1").textContent = translation[selectedValue].sub1;
        document.getElementById("sub-head2").textContent = translation[selectedValue].sub2;
        document.getElementById("button").textContent = translation[selectedValue].sub3;
});

//Cursor light
const light = document.querySelector('.cursor-light');

document.addEventListener('mousemove', (e) => {
  light.style.left = `${e.clientX}px`;
  light.style.top = `${e.clientY}px`;
});



// Question 1
const transportSlider = document.getElementById("transportation");
const Description = document.getElementById("description");

const TransportLevels = [
  "Never 🥱",
  "Rarely 🤔",
  "Sometimes 😊",
  "Often 😀",
  "Daily 🤩"
];

transportSlider.addEventListener("input", function () {
  const value = parseInt(this.value);
  Description.textContent = TransportLevels[value];
});

//Question 2
const airtravelSlider = document.getElementById("airtravel");
const Description02 = document.getElementById("description01");

const airtravelLevels = [
  "0 Hours 🤩",
  "2 to 4 hours 😀",
  "4 to 5 hours 😊",
  "6 to 8 hours 😥",
  "More than 10 hours 😓"
];

airtravelSlider.addEventListener("input", function () {
  const value = parseInt(this.value);
  Description02.textContent = airtravelLevels[value];
});

//Question 3
const foodhabitSlider = document.getElementById("foodhabits");
const Description03 = document.getElementById("description02");

const foodLevels = [
  "Never 🤩",
  "Rarely 😀",
  "Sometimes 😊",
  "Often 🤔",
  "Daily 😅"
];

foodhabitSlider.addEventListener("input", function () {
  const value = parseInt(this.value);
  Description03.textContent = foodLevels[value];
});

//Question 4
const housingSlider = document.getElementById("housing");
const Description04 = document.getElementById("description03");

const familyLevels = [
  "Alone 😓",
  "With my Partner 🥰",
  "With Family 😊"
];

housingSlider.addEventListener("input", function () {
  const value = parseInt(this.value);
  Description04.textContent = familyLevels[value];
});

//Question 5

const energySlider = document.getElementById("energy");
const Description05 = document.getElementById("description04");

const energyLevels = [
"I don’t use any energy-efficient appliances 😓",
"I turn off lights/appliances when not in use 💡",
"I use some energy-saving devices (LEDs, star-rated AC, etc.) 🌿",
"I follow most best practices + use efficient appliances ⚡🏡",
"My home is optimized for energy saving (solar, smart devices, insulation) ☀️🔋 "
];

energySlider.addEventListener("input", function () {
  const value = parseInt(this.value);
  Description05.textContent = energyLevels[value];
});

//Question 6

const foodSlider = document.getElementById("food");
const Description06 = document.getElementById("description05");

const FoodGrowthLevels = [
"None of the food 😥",
"Some of the food🙂",
"Almost all😀",
"All Food WE EAT ARE LOCAL AND UNPROCESSED 😌"
]

foodSlider.addEventListener("input", function(){
  const value = parseInt(this.value);
  Description06.textContent = FoodGrowthLevels[value];
});

//Question 7

const GarbageSlider = document.getElementById("garbage");
const Description07 = document.getElementById("description06");

const GarbageLevels = [
"Much more than neighbours😥",
"More than them🙂",
"Same😀",
"Less than neighbours 😌"
]

GarbageSlider.addEventListener("input", function(){
  const value = parseInt(this.value);
  Description07.textContent = GarbageLevels[value];
});

//Question 8
const CarSlider = document.getElementById("car");
const Description08 = document.getElementById("description07");

CarSlider.oninput = function(){
  Description08.innerHTML = `${this.value} KM's`;
};

//Question 9
const PublicSlider = document.getElementById("public");
const Description09 = document.getElementById("description08");

PublicSlider.oninput = function(){
  Description09.innerHTML = `${this.value} KM's`;
};

//Question 10
const PlasticSlider = document.getElementById("waste");
const Description010 = document.getElementById("description09");

PlasticSlider.oninput = function(){
  Description010.innerHTML = `${this.value} Bottles 🥤`;
};

document.getElementById("button").addEventListener("click", function (){
    document.getElementById("intro1").style.display = "block";
    document.getElementById("hero").style.display = "none";
});
document.getElementById("back01").addEventListener("click", function(){
    document.getElementById("intro1").style.display = "none";
    document.getElementById("hero").style.display = "block";
});
document.getElementById("next01").addEventListener("click", function(){
    document.getElementById("intro1").style.display = "none";
    document.getElementById("q1").style.display = "block";
});
document.getElementById("back02").addEventListener("click", function(){
    document.getElementById("q1").style.display = "none";
    document.getElementById("intro1").style.display = "block";
});
document.getElementById("back02").addEventListener("click", function(){
    document.getElementById("questions").classList.add("q1");
    document.getElementById("hero").style.display = "block";
})

document.getElementById("next02").addEventListener("click", function(){
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "block";
})
document.getElementById("back03").addEventListener("click", function(){
    document.getElementById("q2").style.display = "none";
    document.getElementById("q1").style.display = "block";
})

document.getElementById("next03").addEventListener("click", function(){
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "block";
})

document.getElementById("back04").addEventListener("click", function(){
    document.getElementById("q3").style.display = "none";
    document.getElementById("q2").style.display = "block";
})

document.getElementById("next04").addEventListener("click", function(){
    document.getElementById("q4").style.display = "block";
    document.getElementById("q3").style.display = "none";
})

document.getElementById("back05").addEventListener("click", function(){
    document.getElementById("q3").style.display = "block";
    document.getElementById("q4").style.display = "none";
})

document.getElementById("next05").addEventListener("click", function(){
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "block";
})

document.getElementById("back06").addEventListener("click", function(){
    document.getElementById("q4").style.display = "block";
    document.getElementById("q5").style.display = "none";
})

document.getElementById("next06").addEventListener("click", function(){
    document.getElementById("q5").style.display = "none";
    document.getElementById("q6").style.display = "block";
})

document.getElementById("back07").addEventListener("click", function(){
    document.getElementById("q5").style.display = "block";
    document.getElementById("q6").style.display = "none";
})

document.getElementById("next07").addEventListener("click", function(){
    document.getElementById("q6").style.display = "none";
    document.getElementById("q7").style.display = "block";
})

document.getElementById("back08").addEventListener("click", function(){
    document.getElementById("q6").style.display = "block";
    document.getElementById("q7").style.display = "none";
})

document.getElementById("next08").addEventListener("click", function(){
    document.getElementById("q7").style.display = "none";
    document.getElementById("q8").style.display = "block";
})

document.getElementById("back09").addEventListener("click", function(){
    document.getElementById("q7").style.display = "block";
    document.getElementById("q8").style.display = "none";
})

document.getElementById("next09").addEventListener("click", function(){
    document.getElementById("q8").style.display = "none";
    document.getElementById("q9").style.display = "block";
})

document.getElementById("back010").addEventListener("click", function(){
    document.getElementById("q8").style.display = "block";
    document.getElementById("q9").style.display = "none";
})


document.getElementById("next010").addEventListener("click", function(){
    document.getElementById("q9").style.display = "none";
    document.getElementById("q10").style.display = "block";
})

document.getElementById("back011").addEventListener("click", function(){
    document.getElementById("q9").style.display = "block";
    document.getElementById("q10").style.display = "none";
})



