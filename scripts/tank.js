
//Tank image
var tankReady = false;
var tankImage = new Image();
tankImage.onload = function () {
	tankReady = true;
};
tankImage.src = "images/tank.png";
var tank = {};
// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Initialize tank position
var initTank = function () {
	tank.x = (canvas.width/2) - 32;
	tank.y = 536;
};

// Update game objects
var updateTank = function () {
	if (37 in keysDown) { // Player holding left
		if( (tank.x - 2) > 0 ){
			tank.x -= 2;
		}
	}
	if (39 in keysDown) { // Player holding right
		if( (tank.x + 2) + 64 < canvas.width ){
			tank.x += 2;
		}
	}
};

// Draw everything
var drawTank = function () {
	if (tankReady) {
		ctx.drawImage(tankImage, tank.x, tank.y);
	}
};

// The main game loop
//var main = function () {
	//var now = Date.now();
	//var delta = now - then;


	//render();

	//then = now;
//};

// Let's play this game!
//initTank();
//var then = Date.now();
//setInterval(main, 1); // Execute as fast as possible

