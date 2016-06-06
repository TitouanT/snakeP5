function Snake () {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.movementSet = false;
	this.justEat = false;
	this.total = 0;
	this.tail = [];
	this.alive = true;
	this.score = 0;
	
	this.dir = function (x, y) {
		if (abs(x) != abs(this.xspeed) && !this.movementSet) {
			this.xspeed = x;
			this.yspeed = y;
			this.movementSet = true;
		} 
		//if (abs(y) != abs(this.yspeed)) this.yspeed = y;
	}
	
	this.eat = function (pieceOf) {
		if (pieceOf.x == this.x && pieceOf.y == this.y) {
		   // this.total++;
			this.justEat = true;
			return true;
		}
		return false;
	}
	
	this.update = function() {
		if (!this.justEat) {
			for (var i = 0; i < this.total - 1; i++) {
				this.tail[i] = this.tail[i+1];
			}
			
		}
		else {
			this.justEat = false;
			this.total++;
		}
		this.tail[this.total - 1] = createVector(this.x, this.y);
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;
		
		if (this.x > width - scl) this.x = 0;
		else if (this.x < 0) this.x = width - scl;
		
		if (this.y > height - scl) this.y = 0;
		else if (this.y < 0) this.y = height - scl;
		for (var i = 0; i < this.total; i++) {
			if (this.tail[i].x == this.x && this.tail[i].y == this.y)
			this.alive = false;
		}
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
}
