function draw () {
	drawInvaders();
	drawTank();
	drawInvaderBullets();
	drawPlayerBullets();
}

var gameLoop;
loop();

function loop (){
	gameLoop = setInterval(function () {
	document.getElementById('score').innerHTML = score;
	document.getElementById('lives').innerHTML = player.lives;
	document.getElementById('level').innerHTML = level;
	updateInvaders();
	updateCollisions();
	updateTank();
	ctx.clearRect(0,0, 600, 600);
	draw();
}, 10);
}

function done() {
	//Shows lives as 0. Line is needed here or else loop stops and says lives is still 1.
	document.getElementById('lives').innerHTML = player.lives;
	document.getElementById('gameover').style.display = "block";
	clearInterval(gameLoop);
}

function restart(){
	level = 1;
	score = 0;
	speed = .1;
	invaders = [];
	for (i=0;i<player.bullets.length; i++) {
		player.bullets[i].alive=false;
	}
	for (i=0;i<invaderBullets.length; i++) {
		invaderBullets[i].alive=false;
	}
	makeInvaders();
	player.lives = 3;
	document.getElementById('gameover').style.display = "none";
	loop();
}
