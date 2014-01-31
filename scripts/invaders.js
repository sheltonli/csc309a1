var src = "images/invader.jpg";
var dir = 1;
var speed = .1;
var invaders = [];
var leftbound = 0;
var rightbound = 550;
makeInvaders();

function Invader(src, startx, starty) {
	this.img = new Image();
	this.img.src = src;
	this.x = startx;
	this.y = starty;
	this.power = 1;
	this.alive = true;
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
	for (r = 0; r < 5; r++) {
		for (i = 0; i < 10; i++) {
			invaders.push(new Invader(src, i * 50, r * 50));	
		}
	}	
}
