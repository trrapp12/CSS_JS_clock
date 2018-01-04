

function setDate () {
	const secondHand = document.querySelector('.second');
	const minHand = document.querySelector('.minute');
	const hourHand = document.querySelector('.hour');
	const now = new Date();
	// Date() creates a JS date instance.  It is creating an object.  Note that to get an object you have to have the word "new" in front of it.
	// From MDN:
	// Note: JavaScript Date objects can only be instantiated by calling JavaScript Date as a constructor:
	// calling it as a regular function (i.e. without the new operator) will return a string rather than a Date object;
	// unlike other JavaScript object types, JavaScript Date objects have no literal syntax.
	const seconds = now.getSeconds();
	// An integer number, between 0 and 59, representing the seconds in the given date according to local time.
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	
	const mins = now.getMinutes();
	const minDegrees =((mins / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minDegrees}deg)`;

	const hours = now.getHours();
	const hourDegrees = ((hours / 24) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000)
// setInterval calls a function or evaluates an expression at specified intervals
// The setDate() method sets the day of the Date object relative to the beginning of the currently set month.
// note in the notation setInterval(setDate, 1000) setInterval is predefined method called on the window object.
// the setDate is the function you already created, and the 1000 is setting the timeinterval that is separating
// function calls, i.e. 1000ms or 1 second

// var backGround = {
// 	pattern: ["pattern-pineapple.jpeg", "pattern-stainglass.jpeg", "pattern-triangles.jpg"],
// 	soldiers: ["boarding.jpeg", "halo.jpeg", "singleRound.jpeg"],
// 	stars: ["stars1.jpg","stars2.jpeg","stars3.jpg"]
// };

// function changeBackground () {
// 	document.getElementsByTagName('html').style.background = 'url("../../assets/pattern/pattern-pineapple.jpeg")';

// };

// setTimeout(changeBackground, 3000);