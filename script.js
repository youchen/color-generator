let color1 = document.querySelector(".color1");
color1.setAttribute("value", "#005aa7")

let color2 = document.querySelector(".color2");
color2.setAttribute("value", "#fffde4")


let body = document.getElementById("gradient");
let h3 = document.querySelector("h3");

function setGradient() {
	body.style.background = 
	"linear-gradient(to bottom, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	h3.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


let randomButton = document.getElementById("random");

function getRandomizedRGBHex() {
	let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

	while (color.length < 7){
		color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	}
	return color;
}

randomButton.addEventListener("click", () => {
	color1.setAttribute("value", getRandomizedRGBHex());
	color2.setAttribute("value", getRandomizedRGBHex());

	setGradient();
});