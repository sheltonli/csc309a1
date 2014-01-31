function draw () {
	drawInvaders();
	drawTank();
	drawInvaderBullets();
	drawPlayerBullets();
}

setInterval(function () {
	updateInvaders();
	updateCollisions();
	updateTank();
	ctx.clearRect(0,0, 600, 600);
	draw();
}, 10);

function done() {
}
