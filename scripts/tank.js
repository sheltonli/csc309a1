 var canvas = document.getElementById("screen");
 var ctx = canvas.getContext("2d");

// Hero image
var tankReady = false;
var tankImage = new Image();
tankImage.onload = function () {
	tankReady = true;
};
tankImage.src = "images/tank.png";

// Game objects
var tank = {
	speed: 200 // movement in pixels per second
};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	tank.x = 0;
	tank.y = 536;
};

// Update game objects
var update = function (modifier) {
	if (37 in keysDown) { // Player holding left
		if( (tank.x - tank.speed * modifier) > 0 ){
			tank.x -= tank.speed * modifier;
		}
	}
	if (39 in keysDown) { // Player holding right
		if( (tank.x + tank.speed * modifier) + 64 < canvas.width ){
			tank.x += tank.speed * modifier;
		}
	}
};

// Draw everything
var render = function () {
	if (tankReady) {
		ctx.drawImage(tankImage, tank.x, tank.y);
	}
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
};

// Let's play this game!
reset();
var then = Date.now();
setInterval(main, 1); // Execute as fast as possible

