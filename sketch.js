var scl = 20;
var speed = 4;
var s;
var i;
var k = 0;
var food;
var heightGrid;
var widthGrid;
var gamePause = false;
function setup() {
	createCanvas (1200, 600);
	heightGrid = int(height/scl);
	widthGrid = int(width/scl);
	s = new Snake();
	i = 0;
	food = createVector(int(random(widthGrid))*scl, int(random(heightGrid))*scl);
}

function draw() {
	background(72);
	noStroke();
	if (!s.alive && k > 200) {
		//s.total = 0;
		//s.alive = true;
		k = 0;
		s = new Snake();
	}
	if (i == 0 && !gamePause && s.alive) {
		if (s.eat(food) || mouseIsPressed) {
			food = createVector(int(random(widthGrid))*scl, int(random(heightGrid))*scl);
			if (s.justEat) s.score++;
			else s.justEat = true;
		}
		s.update();
		s.movementSet = false;
	} 
	else if (gamePause) {
		//textSize(80);
		//text("PAUSE", width/2 - 130, height/2);
		textSize(50);
		text("Aurel, Guillaume, voici mon snake ;)", 100, height/2);
	}
	
	fill (255, 0, 0, 200);
	rect (food.x, food.y, scl, scl);
	s.show();
	var t = "score: " + s.score;
	textSize(20);
	text(t, width - 150, height - 5);
	i++;
	if (i > speed) i = 0;
	if (!s.alive) {
		k++;
		fill(0);
		textSize(80);
		text("GAME OVER", k+300, height/2);
	}
}

//function mousePressed() {
//	s.justEat = true;
//}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	}
	return false;
}

function keyTyped() {
	if (key === 'p') gamePause = !gamePause;
	return false;
}
