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
        sub2 : "How much the global temperature will rise?"
    },
    in : {
        title : "🌍अगर हर कोई आपके जैसा रहता...🌍",
        sub1 : "देखें कि आपकी जीवनशैली पृथ्वी के भविष्य को कैसे प्रभावित कर सकती है",
        sub2 : "यदि सभी आपकी तरह रहते हैं तो तापमान कितना बढ़ेगा?"
    }
};

const dropdown = document.getElementById("languages");

dropdown.addEventListener('change', function(){
    const selectedValue = this.value;
    console.log("User Selected", selectedValue)
        document.getElementById("heading").textContent = translation[selectedValue].title;
        document.getElementById("sub-head1").textContent = translation[selectedValue].sub1;
        document.getElementById("sub-head2").textContent = translation[selectedValue].sub2;
});

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


document.getElementById("button").addEventListener("click", function (){
    document.getElementById("questions").classList.remove("hidden");
    document.getElementById("hero").style.display = "none";
});

document.getElementById("back").addEventListener("click", function(){
    document.getElementById("questions").classList.add("hidden");
    document.getElementById("hero").style.display = "block";
})