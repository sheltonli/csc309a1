//Tank image
var tanksrc = "images/tank.png";

function Tank(startx, starty){
	this.img = new Image();
	this.img.src = tanksrc;
	this.x = startx;
	this.y = starty;
	this.bullets = [];
	this.lives = 3;
	//Counter to check position in bullet array
	this.currBullet = 0;
	//Array of 20 bullets
	for (var i = 0; i < 20; i++){
		this.bullets[i] = new Bullet(playerBulletSrc, 0, 610, 3);
	}
	//Boolean to check if tank is allowed to shoot
	this.shooting;
}

// Handle keyboard controls
var keyPressed = [];

//Places keycode in keyPressed if it is pressed
addEventListener("keydown", function (e) {
	keyPressed[e.keyCode] = true;
}, false);

//Removes the keycode from keyPressed when it is released
addEventListener("keyup", function (e) {
	delete keyPressed[e.keyCode];
}, false);

//Create the player
var player = new Tank((canvas.width/2) - 19.5, 550);

//Update the player tank according to what keys are pressed
var updateTank = function () {
	//Left
	if (37 in keyPressed) { 
		if( (player.x - 2) > 0 ){
			player.x -= 2;
		}
	}
	//Right
	if (39 in keyPressed) { 
		if( (player.x + 2) + 39 < canvas.width ){
			player.x += 2;
		}
	}
	//Space
	//Player is shooting, cycle through array of tank bullets
	if (32 in keyPressed && player.shooting == false) {
		player.shooting = true;
		player.shoot(player.bullets[player.currBullet])
		player.currBullet ++;
		if (player.currBullet >= player.bullets.length){
			player.currBullet = 0;
		}
	//Prevents player from holding space, only 1 bullet fired for each press
	} else if (!(32 in keyPressed)) {
		player.shooting = false;
	}
};

//Bullet is set to true, given x and y of tank cannon 
Tank.prototype.shoot = function (bullet) {
	bullet.alive = true;
	bullet.drawx = player.x + 18;
	bullet.drawy = player.y;
}

// Draw the player tank
var drawTank = function () {
	ctx.drawImage(player.img, player.x, player.y);
};