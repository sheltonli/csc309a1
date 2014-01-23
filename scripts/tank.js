//Tank image
var src = "images/tank.png";

function Tank(src, startx, starty){
	this.img = new Image();
	this.img.src = src;
	this.x = startx;
	this.y = starty;
}

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


//Create the player
var player = new Tank(src, (canvas.width/2) - 32, 536);

// Update game objects
var updateTank = function () {
	if (37 in keysDown) { // Player holding left
		if( (player.x - 2) > 0 ){
			player.x -= 2;
		}
	}
	if (39 in keysDown) { // Player holding right
		if( (player.x + 2) + 64 < canvas.width ){
			player.x += 2;
		}
	}
	if (32 in keysDown) {
		player.shoot();
	}
};

player.shoot = function () {
	console.log("Pew");
}

// Draw everything
var drawTank = function () {
	ctx.drawImage(player.img, player.x, player.y);
};