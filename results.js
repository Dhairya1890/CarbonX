
let badge = document.getElementById("badge");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let text5 = document.getElementById("text5");
const button = document.getElementById("Resultbutton");
const popup = document.getElementById("results-popup");
const warn = document.getElementById("warning");
//Evaluation System
document.getElementById("Resultbutton").addEventListener("click", function(){
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
    popup.classList.add("active");


if(totalScore <=116){
    badge.src = "medal1.png";
    text1.innerHTML = 'You are a <span class="bold">Eco-Champion!</span>';
    text2.innerHTML = 'You only emit: <span class="bold">1-2 tons CO<sub>2</sub>/year</span>';
    text3.innerHTML = 'If everyone lived like you: <span class="bold">~1.2&#176;C</span> or lower temp rise!';
    text4.innerHTML = '<span class="bold">You are giving this planet a sustainable future!</span>';
    text5.innerHTML = '<span id="warning">The good part : </span>You&apos;re leading the way toward a sustainable future. At just 1–2 tons/year, your lifestyle is proof that low-impact living is possible — and powerful. Stay strong and inspire others</p>'
}
else if(totalScore<=415){
 badge.src = "medal2.png";
    text1.innerHTML = 'You are an <span class="bold">Eco-Advocate!</span>';
    text2.innerHTML = 'You emit around: <span class="bold">3-4 tons CO<sub>2</sub>/year</span>';
    text3.innerHTML = 'If everyone lived like you: <span class="bold">~1.8&#176;C</span> temp rise!';
    text4.innerHTML = '<span class="bold">You\'re making just enough efforts to maintain Sustainability!</span>';
    text5.innerHTML = '<span id="warning">The good part : </span>You&apos;re on the right path — emitting just 3–5 tons/year helps limit warming to safer levels. Keep optimizing your choices; your effort makes a real difference.'
}
else if(totalScore <=700){
    warn.classList.add("red");
    badge.src = "medal3.png";
    text1.innerHTML = 'You are an <span class="bold">Average Global Citizen</span>';
    text2.innerHTML = 'You emit around: <span class="bold">6-8 tons CO<sub>2</sub>/year</span>';
    text3.innerHTML = 'If everyone lived like you: <span class="bold">~2.5&#176;-3&#176;C</span> temp rise!';
    text4.innerHTML = 'Your type of are the most comman, that are a risk to this planet';
    text5.innerHTML = '<span id="warning">Warning : </span>Even 6–8 tons per year is too much. You may seem average, but you&apos;re still contributing to a 2.5–3°C rise, which brings severe heatwaves, floods, and a dangerous "new normal." It&apos;s time to shift.'
}

else if(totalScore <=900){
    warn.classList.add("red");
    badge.src = "medal4.png";
    text1.innerHTML = 'You are an <span class="bold">Carbon Heavyweight</span>';
    text2.innerHTML = 'You emit around: <span class="bold">15-25 tons CO<sub>2</sub>/year</span>';
    text3.innerHTML = 'If everyone lived like you: <span class="bold">~3.5&#176;-4.5&#176;C</span> temp rise!';
    text4.innerHTML = 'You are a weight to this planet';
    text5.innerHTML = '<span id="warning">Warning : </span>At 15–25 tons of CO₂ annually, your impact is driving extreme climate disruption. If you don’t make changes, you’re accelerating irreversible damage to both the planet and future generations.'
}
else if(totalScore >= 901){
    warn.classList.add("red");
    badge.src = "medal5.png";
    text1.innerHTML = 'You are an <span class="bold">Unaware Contributor</span>';
    text2.innerHTML = 'You emit around: <span class="bold">20+ tons CO<sub>2</sub>/year</span>';
    text3.innerHTML = 'If everyone lived like you: <span class="bold">~4&#176;- 5&#176;C</span> temp rise!';
    text4.innerHTML = 'You are unaware of real problems, Probably you are from Reel Gen';
    text5.innerHTML = '<span id="warning">Warning : </span>You need to become conscious of your lifestyle — emitting 10–20+ tons of CO₂ a year is pushing us toward catastrophic 4–5°C global warming. At that point, systems collapse — food, water, and safety.'

}
})









