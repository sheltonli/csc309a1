function draw () {
	drawInvaders();
}

setInterval(function () {
	updateInvaders();
	ctx.clearRect(0,0, 600, 600);
	draw();
}, 10);
