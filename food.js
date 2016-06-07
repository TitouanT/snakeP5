function Food () {
	this.x = int(random(int(width/scl)))*scl;
	this.y = int(random(int(height/scl)))*scl;

	this.show = function () {
		fill (255, 0, 0, 200);
		rect (this.x, this.y, scl, scl);
	}
}
