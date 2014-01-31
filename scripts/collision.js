function updateCollisions() {
	//
	/*for (i=0; i < player.bullets.length; i++) {
		for(j=0; j < invaders.length; j++) {
			// if the bullet is in an alien space
			if (player.bullets[i].y < invaders[j].y + 50 && player.bullets[i].y > invaders.y && player.bullets[i] > invaders[j].x && player.bullets[i].x < invaders[j].x + 50) {
				// kill the alien!
				invaders[j].alive = false;
				console.log("got one");
			}
		}
	}*/

	 
	for(j=0; j < invaders.length; j++) {
		if (invaders[j].alive && bullet.alive && bullet.drawy < invaders[j].y + 50 && bullet.drawy > invaders[j].y && bullet.drawx > invaders[j].x && bullet.drawx < invaders[j].x + 50) {

				// kill the alien!
				invaders[j].alive = false;
				bullet.alive = false;
		}
	}
}
