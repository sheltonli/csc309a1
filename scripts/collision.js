function updateCollisions() {
	
	for (i=0; i < player.bullets.length; i++) {
		for(j=0; j < invaders.length; j++) {
			if (invaders[j].alive && player.bullets[i].alive && player.bullets[i].drawy < invaders[j].y + 50 && player.bullets[i].drawy > invaders[j].y && player.bullets[i].drawx > invaders[j].x && player.bullets[i].drawx < invaders[j].x + 50) {
			// if the bullet is in an alien space
				// kill the alien!
				invaders[j].alive = false;
				player.bullets[i].alive = false;	
				if (invaders[j].canshoot) {
					if (j - 10 >= 0) {
						invaders[j-10].canshoot = true;
						invaders[j-10].img.src = src2;
					}
				}
			}
		}
	}
}
