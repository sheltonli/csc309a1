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
	updateInvaders();
	updateCollisions();
	updateTank();
	ctx.clearRect(0,0, 600, 600);
	draw();
}, 10);
}

function done() {
	document.getElementById('game-over').style.display = "block";
	clearInterval(gameLoop);
}

function restart(){
	score = 0;
	speed = .1;
	invaders = [];
	makeInvaders();
	document.getElementById('game-over').style.display = "none";
	loop();


}
