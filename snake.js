function Snake () {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;

	this.movementSet = false;
	this.justEat = false;
	this.alive = true;

	this.tail = [];
	this.total = 0;
	this.score = 0;
	
	this.dir = function (x, y) {
		if (abs(x) != abs(this.xspeed) && !this.movementSet) {
			this.xspeed = x;
			this.yspeed = y;
			this.movementSet = true;
		} 
	}
	
	this.eat = function (pieceOf) {
		if (pieceOf.x == this.x && pieceOf.y == this.y) {
			this.justEat = true;
			return true;
		}
		return false;
	}
	
	this.update = function() {
		if (!this.justEat) { // if he didn't eat the snake doesn't grow and he's body go ahead
			for (var i = 0; i < this.total - 1; i++) {
				this.tail[i] = this.tail[i+1];
			}
		}
		else {
			this.justEat = false;
			this.total++;
		}
		this.tail[this.total - 1] = createVector(this.x, this.y); // the last position is added to the tail

		this.x += this.xspeed*scl; // the snake move;
		this.y += this.yspeed*scl;
		
		if (this.x > width - scl) this.x = 0; // the next foor line are the implementation of passing throw the wall
		else if (this.x < 0) this.x = width - scl;
		
		if (this.y > height - scl) this.y = 0;
		else if (this.y < 0) this.y = height - scl;

		for (var i = 0; i < this.total; i++) { // did the snake collide himself ??
			if (this.tail[i].x == this.x && this.tail[i].y == this.y)
			this.alive = false;
		}

		this.movementSet = false;
	}

	this.show = function() {
		fill (0);
		for (var i = 0; i < this.total; i++) {
			if (this.alive) {
				var c = map(i, 0, this.total, 0, 199);
				fill(0, c, c, 200);
			}
			//if (this.justEat) console.log("PROBLEME");
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		fill(0,200,200,200);
		rect(this.x, this.y, scl, scl);
	}

	this.showScore = function() {
	        var t = "score: " + this.score;
		fill(0,200,200,200);
		textSize(20);
		text(t, width - 150, height - 5); 
	}

}
