var scl = 20;
var speed = 4;
var snake, food;
var i, k;
var gameIsPaused = false;
function setup() {
	createCanvas (1200, 600);
	snake = new Snake();
	food = new Food(); //createVector(int(random(widthGrid))*scl, int(random(heightGrid))*scl);
	i = k = 0;
}

function draw() {
	background(72);
	noStroke();
	if (!snake.alive && k >= 200) {
		k = 0;
		snake = new Snake();
	}
	if (gameIsPaused) pauseGame();
	else if (i == 0 && snake.alive) {
		if (snake.eat(food) || mouseIsPressed) {
			food = new Food();
			if (snake.justEat) snake.score++; // if the player didn't cheat.
			else snake.justEat = true; 	// if the player clicked the mouse then 
		}					// just make the snake longer but the score stay the same
		snake.update();
	}
	food.show();
	snake.show();
	snake.showScore();
	if (!snake.alive) {
		k++;
		gameOver();
	}
	i++;
	if (i > speed) i = 0;
}
