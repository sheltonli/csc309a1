function updateCollisions() {
	//check for a collision between the tanks bullet and an alien	
	for (i=0; i < player.bullets.length; i++) {
		for(j=0; j < invaders.length; j++) {
			if (invaders[j].alive && player.bullets[i].alive && player.bullets[i].drawy < invaders[j].y + 50 && player.bullets[i].drawy > invaders[j].y && player.bullets[i].drawx > invaders[j].x && player.bullets[i].drawx < invaders[j].x + 50) {
				// if the bullet is in an alien space
				// kill the alien! and make sure the bullet cannot keep killing aliens
				invaders[j].alive = false;
				player.bullets[i].alive = false;	
				score += 10;
				if (invaders[j].canshoot) {	
					updateShooter(j);				
				}
			}
		}
	}

	//check for a collision between the aliens bullet and the tank
	for (i=0; i < invaderBullets.length; i++) {
		if (invaderBullets[i].alive && invaderBullets[i].drawy < player.y + 25  && invaderBullets[i].drawy > player.y && invaderBullets[i].drawx > player.x && invaderBullets[i].drawx < player.x + 39) {
			invaderBullets[i].alive = false;
			player.lives -= 1;
			if (player.lives <= 0) {
				player.lives = 0;
				done();
			}
			
		}
	}
}

function updateShooter(k) {
	//aliens are red if they can shoot
	//once an alien who can shoot is killed the alien above him becomes red and can shoot
	if (k - 10 >= 0) {
		while (k - 10 >= 0) {
			if (invaders[k-10].alive) {
				invaders[k-10].canshoot = true;
				invaders[k-10].img.src = src2;
				for (l=0; l<shooters.length; l++) {
					if (shooters[l] == k) {
						shooters[l] = k - 10;
					}

				}
				k = -1;
			} else {
				k -= 10;
			}
		}
	}
}
