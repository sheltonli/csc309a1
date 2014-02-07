Will Armstrong 993418789
Shelton Li 999009905 

How the game runs
	
	Our game is run in a loop (the loop function). We assign the loop function to a variable named gameLoop. 

	loop - In the loop function, it continously updates the score and remaining player lives. It will also call all the appropriate update functions to continuously update game assets (read about the update functions below). Finally it will clear the canvas before calling the draw function.

	draw - The draw function draws all the games assets by calling the specific draw functions (read about them below).

	done - The done function handles what happens when the game should be over (aliens reach the bottom or player loses all 3 lives). It displays the game over menu and stops the game loop.

	restart - The restart function will restart the game by reinitializing variables that are needed (ie. setting lives back to 3, etc.). It also remakes the array of invaders, and removes all active bullets from play. Finally it removes the game over menu and starts the game loop all over again by calling the loop function.

Tank - Object

	Create a tank object by passing it a starting x and starting y coordinate.

	Tank object contains an image (picture of the tank), an x and y coordinate, an array of bullet objects, an amount of lives, and a boolean variable to show if the tank is firing or not.

Tank - Functions

	updateTank - This function handles user input from the keyboard and determines what the tank will do. The tank will move left or right by pressing the left and right arrow keys. If the space bar is pressed, it will call the shoot function with the next bullet in the tank's bullets array.

	shoot - Sets the bullet to be active (bullet.alive = true) and gives it the coordinates of the tank's cannon tip.

	drawTank - Draws the tank image and coordinates to the canvas.


Bullet - Object

	A bullet that can be fired by either the tank or the invader. Takes an image, a starting x and y coordinate, and the speed of the bullet as parameters.

	Contains an image, a starting x and y coordinate (since the bullets are created when a tank/invaders are made they are given a starting position off the screen or else they are seen before they are fired), a x and y coordinate used for drawing the bullet, a speed (how many pixels the bullet will move), and a boolean indicating if the bullet is in play or not.

Bullet - Functions

	drawPlayerBullets - This function loops through all the bullets in the player tank's bullets array and checks if the bullet is in play. If they are, it will call the drawPlayerBullet function with the current active bullet. 

	drawPlayerBullet - Continously draw the bullet going up the screen by decreasing it's y value. If it passes the top of the canvas, it is no longer active.

	drawInvaderBullets - Exactly the same as drawPlayerBullets except for the array of invader bullets. Will call the drawInvaderBullet function with the current bullet in the array if it is active.

	drawInvaderBullet - Continously draw the bullet going down the screen by inreasing it's y value. If it passes the bottom of the canvas, it is no longer active.

Invaders
	invaders.js contains the type definition for the Invader objects.  This is also where we create the invaders, update them on the screen so they move around properly, check to see if they are all dead in order to go to the next level, shoot bullets from the invaders, and initialize which invaders can shoot.


Collision
	in collision.js we check to see if any collisions occur between bullets shot from the tank at the invaders as well as bullets shot from the invaders at the tank. We limited the number of invaders that could shoot to 10.  Once one of them dies we handle updating the next invader which can shoot in this file.

Soundtrack by Will Armstrong made with PixiTracker 1-bit sequencer for Android

Images from:
http://pripie.deviantart.com/art/Space-Invaders-Enemy-type-1-154010296
http://www.google.ca/imgres?biw=994&bih=859&tbm=isch&tbnid=acC4HGzfPPSA9M%3A&imgrefurl=http%3A%2F%2Fdlgames.square-enix.com%2Fsiig%2F&docid=waRc8C3Ar-kefM&imgurl=http%3A%2F%2Fdlgames.square-enix.com%2Fsiig%2Fimg%2Fred.jpg&w=310&h=280&ei=YiH1Ut3oIYnCywHM94CYDA&zoom=1&ved=0CFcQhBwwAg&iact=rc&dur=279&page=1&start=0&ndsp=18
