var invader1img = new Image();
invader1img.src = "images/invader.jpg";

var invader1x = 100;
var invader1y = 0;
var dir = 1;


function updateInvaders() {
	invader1x += dir * 10;
	if (invader1x < 100 || invader1x > 500) {
		invader1y += 50;
		dir *= -1;
	}
}

function drawInvaders() {
	ctx.drawImage(invader1img, invader1x, invader1y, 50, 50);
}
