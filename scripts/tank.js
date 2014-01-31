//Tank image
var tanksrc = "images/tank.png";
//Bullet image
var bulletsrc = "images/bullet.png";

function Tank(src, startx, starty){
	this.img = new Image();
	this.img.src = tanksrc;
	this.x = startx;
	this.y = starty;
	this.bullets = [];
	this.currentbullet = 0;
	for (var i = 0; i < 20; i++){
		this.bullets[i] = new Bullet(bulletsrc, 0, 610, 3);
	}
}

function Bullet(src, startx, starty, speed){
	this.img = new Image();
	this.img.src = bulletsrc;
	this.x = startx;
	this.y = starty;
	this.drawx;
	this.drawy;
	this.speed = speed;
	this.alive = false;
}

// Handle keyboard controls
var keyPressed = {};

//Places keycode in keyPressed if it is pressed
addEventListener("keydown", function (e) {
	keyPressed[e.keyCode] = true;
}, false);

//Removes the keycode from keyPressed when it is released
addEventListener("keyup", function (e) {
	delete keyPressed[e.keyCode];
}, false);


//Create the player
var player = new Tank(src, (canvas.width/2) - 19.5, 550);

var bullet = new Bullet(bulletsrc, 0, 610, 5);

// Update game objects
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
	if (32 in keyPressed) {
		player.shoot();
	}
};

player.shoot = function () {
	bullet.alive = true;
	bullet.drawx = player.x + 18;
	bullet.drawy = player.y;
}

// Draw the player tank
var drawTank = function () {
	ctx.drawImage(player.img, player.x, player.y);
};

var drawBullet = function () {
	if (bullet.alive == true){
		ctx.drawImage(bullet.img, bullet.drawx, bullet.drawy);
	}
	//if (bullet.drawy < 0){
		//bullet.drawy = 610;
	//}
}

var updateBullet = function(){
	bullet.drawy -= bullet.speed;
}
