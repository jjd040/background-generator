var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector("#random");
var body = document.getElementById("gradient");

color1.value = "#ff0000";
color2.value = "#ffff00";

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}


setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setRandom() {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}

random.addEventListener("click", setRandom)
