function updateCollisions() {
	
	for (i=0; i < player.bullets.length; i++) {
		for(j=0; j < invaders.length; j++) {
			if (invaders[j].alive && player.bullets[i].alive && player.bullets[i].drawy < invaders[j].y + 50 && player.bullets[i].drawy > invaders[j].y && player.bullets[i].drawx > invaders[j].x && player.bullets[i].drawx < invaders[j].x + 50) {
				// if the bullet is in an alien space
				// kill the alien!
				invaders[j].alive = false;
				player.bullets[i].alive = false;	
				score += 10;
				console.log(score);
				if (invaders[j].canshoot) {	
					k = j;
					if (k - 10 >= 0) {
						while (k - 10 >= 0) {
							if (invaders[k-10].alive) {
								invaders[k-10].canshoot = true;
								invaders[k-10].img.src = src2;
								k = -1;
							} else {
								k -= 10;
							}
						}
					}
				}
			}
		}
	}


	for (i=0; i < invaderBullets.length; i++) {
		if (invaderBullets[i].alive && invaderBullets[i].drawy < player.y + 25  && invaderBullets[i].drawy > player.y && invaderBullets[i].drawx > player.x && invaderBullets[i].drawx < player.x + 39) {
			invaderBullets[i].alive = false;
			console.log("hit the tank!");
			player.lives -= 1;
			if (player.lives <= 0) {
				done();
			}
			
		}
	}
}
