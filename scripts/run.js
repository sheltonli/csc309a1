//Calls to all other draw functions
//Draws all of the game assets
function draw () {
	drawInvaders();
	drawTank();
	drawInvaderBullets();
	drawPlayerBullets();
}

//Game loop that will handle running the game
var gameLoop;
//Starts the game
loop();

//This function runs the game
//Continously update the score and lives remaining
//Continuously update game assets by calling their update functions
//Clear and redraw canvas by calling the draw function
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

//Happens when game over, displays game over menu and stops the game loop
function done() {
	//Shows lives as 0. Line is needed here or else loop stops and says lives is still 1.
	document.getElementById('lives').innerHTML = player.lives;
	document.getElementById('gameover').style.display = "block";
	clearInterval(gameLoop);
}

//Restarts the game by initializing certain game assets again
//Removes all bullets that are in play
//Remakes invaders
//Remove game over menu and call the game loop again
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
