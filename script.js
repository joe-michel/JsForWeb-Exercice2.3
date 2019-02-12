
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style 
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

let cookieNbr = 0;
let multiplierNbr = 1;
let multiplierPrice = 50;
let autoClickNbr = 0;
let autoClickPrice = 100;

function addCookie(cookieNbr, multiplierNbr){
	cookieNbr = cookieNbr + multiplierNbr;
	return cookieNbr;
}

function autoClick(){
	cookieNbr = cookieNbr + autoClickNbr;
	document.querySelector(".counter").innerText = cookieNbr;
	document.querySelector(".title").innerText = cookieNbr + " cookies";
}

function createFactory(){
	let x = document.createElement("IMG");
  	x.setAttribute("src", "factory/factory.png");
  	x.setAttribute("width", "100");
  	x.setAttribute("height", "100");
  	document.querySelector(".factories").appendChild(x);
}	

document.querySelector(".multiplierButton").addEventListener("click", ()  => {

	if(cookieNbr >= multiplierPrice){
		cookieNbr = cookieNbr - multiplierPrice;
		multiplierNbr++;
		multiplierPrice = Math.floor(multiplierPrice * 1.5);
		document.querySelector(".multiplierButton").innerText = "LVL UP (" + multiplierPrice + ")";
		document.querySelector(".counter").innerText = cookieNbr;
		document.querySelector(".multiplierText").innerText = "You are level " + multiplierNbr + " and you produce " + multiplierNbr + " cookies/click";
		document.querySelector(".title").innerText = cookieNbr + " cookies";
	}

});



document.querySelector(".cookieButton").addEventListener("click", ()  => {
	function resetCookie(){
		document.querySelector(".cookieButton").style.width = "300px";
		document.querySelector(".cookieButton").style.height = "300px";
	}

	cookieNbr = addCookie(cookieNbr, multiplierNbr);
	document.querySelector(".counter").innerText = cookieNbr;
	document.querySelector(".title").innerText = cookieNbr + " cookies";

	document.querySelector(".cookieButton").style.width = "297px";
	document.querySelector(".cookieButton").style.height = "297px";
	setTimeout(resetCookie, 200);
	

});

document.querySelector(".autoClickButton").addEventListener("click", ()  => {

	if(cookieNbr >= autoClickPrice){
		cookieNbr = cookieNbr - autoClickPrice;
		autoClickNbr++;
		autoClickPrice = Math.floor(autoClickPrice * 1.5);
		document.querySelector(".autoClickButton").innerText = "Buy a factory (" + autoClickPrice + ")";
		document.querySelector(".counter").innerText = cookieNbr;
		document.querySelector(".autoClickText").innerText = "You have " + autoClickNbr + " factories producing " + autoClickNbr + " Cookies/second";
		document.querySelector(".title").innerText = cookieNbr + " cookies";
		createFactory();
	}

});

setInterval(autoClick, 1000);