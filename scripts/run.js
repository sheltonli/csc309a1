function draw () {
	drawInvaders();
	drawTank();
	drawBullet();
}

setInterval(function () {
	updateInvaders();
	updateTank();
	updateBullet();
	ctx.clearRect(0,0, 600, 600);
	draw();
}, 10);
