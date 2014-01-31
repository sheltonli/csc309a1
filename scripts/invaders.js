var src = "images/invader.jpg";
var src2 = "images/shootinginvader.jpg";
var dir = 1;
var speed = .1;
var invaders = [];
var leftbound = 0;
var rightbound = 550;
var score = 0;
var invaderBullets = [];
var invaderBulletsCounter = 0;
for (var i = 0; i < 10; i++){
	invaderBullets[i] = new Bullet(invaderBulletSrc, 0, 610, 1);
}
var shooter;
makeInvaders();

function Invader(src, startx, starty, canshoot) {
	this.img = new Image();
	this.img.src = src;
	this.x = startx;
	this.y = starty;
	this.power = 1;
	this.alive = true;
	this.canshoot = canshoot;
}

function updateInvaders() {
	//get the first invader that's not dead...
	//assume he has the max to initialize the loop
	var max;
	var min;
	var movey = 0;
	var levelup = true;
	for (i = 0; i < invaders.length; i++) {
		if (invaders[i].alive) {
			max = invaders[i];
			min = invaders[i];
			levelup = false;
			break;
		}	
	}

	var gameover = false;
	for (i = 0; i < invaders.length; i++) {
		if (invaders[i].alive && invaders[i].y > 525) {
			gameover = true;
		}
	}

	if(!gameover) {
		if(!levelup) {

			//get the invader that's furthest to the right
			for (i = 0; i < invaders.length; i++) {
				if (invaders[i].alive && invaders[i].x > max.x) {
					max = invaders[i];
				}	
			}

			//get the invader that's furthest to the left
			for (i = 0; i < invaders.length; i++) {
				if (invaders[i].alive && invaders[i].x < min.x) {
					min = invaders[i];
				}
			}
			
			if (min.x < leftbound || max.x > rightbound) {
				dir *= -1;
				movey = 50;
			}

			for (i = 0; i < invaders.length; i++) {
				invaders[i].x += dir * speed;
				invaders[i].y += movey;
			}
		} else {
			nextlevel();
		}
	} else {
		done();
	}
}

function nextlevel() {
	invaders = [];
	speed += .1
	makeInvaders();
}

function drawInvaders() {
	for (i = 0; i < invaders.length; i++) {
		if (invaders[i].alive) {
		ctx.drawImage(invaders[i].img , invaders[i].x, invaders[i].y, 50, 50);
		}
	}
}

function makeInvaders() {
	num_rows = 5;
	for (r = 0; r < num_rows; r++) {
		for (i = 0; i < 10; i++) {
			if (r < num_rows - 1) {
				invaders.push(new Invader(src, i * 50, r * 50, false));	
			} else {
				invaders.push(new Invader(src2, i * 50, r * 50, true));	
			}
			
		}
	}	
}

setInterval(function (){
	shooter = Math.floor((Math.random()*50));
	if (invaders[shooter].canshoot){
		shootInvaderBullet(invaderBullets[invaderBulletsCounter],shooter);
	}
}, 1000);

function shootInvaderBullet(bullet, position){
	bullet.alive = true;
	bullet.drawx = invaders[position].x + 25;
	bullet.drawy = invaders[position].y + 25;
	invaderBulletsCounter ++;
	if (invaderBulletsCounter >= invaderBullets.length - 1){
		invaderBulletsCounter = 0;
	}
}
