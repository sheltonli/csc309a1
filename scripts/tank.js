//Tank image
var tankImage = new Image();
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


tank.x = (canvas.width/2) - 32;
tank.y = 536;


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
	if (32 in keysDown) {
		tank.shoot();
	}
};

tank.shoot = function () {
	console.log("Pew");
}

// Draw everything
var drawTank = function () {
	ctx.drawImage(tankImage, tank.x, tank.y);
};