//Player bullet image
var playerBulletSrc = "images/playerbullet.png";
//Invader bullet image
var invaderBulletSrc = "images/invaderbullet.png";

function Bullet(src, startx, starty, speed){
	this.img = new Image();
	this.img.src = src;
	this.x = startx;
	this.y = starty;
	this.drawx;
	this.drawy;
	this.speed = speed;
	this.alive = false;
}

var drawPlayerBullets = function(){
	for (var i = 0; i < player.bullets.length; i++){
		if (player.bullets[i].alive){
			drawPlayerBullet(player.bullets[i]);
		}
	}
}

var drawPlayerBullet = function (bullet) {
	bullet.drawy -= bullet.speed;
	ctx.drawImage(bullet.img, bullet.drawx, bullet.drawy);
	if (bullet.drawy < 0){
		bullet.alive = false;
	}
}

var drawInvaderBullets = function(){
	for (var i = 0; i < invaderBullets.length; i++){
		if (invaderBullets[i].alive){
			drawInvaderBullet(invaderBullets[i]);
		}
	}
}

var drawInvaderBullet = function(bullet){
	bullet.drawy += bullet.speed;
	ctx.drawImage(bullet.img, bullet.drawx, bullet.drawy);
	if (bullet.drawy > 600){
		bullet.alive = false;
	}
}