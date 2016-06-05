var s;
var scl = 20;
var i;
var speed = 2;
var food;
var heightGrid;
var widthGrid;
function setup() {
    createCanvas (1000, 500);
    heightGrid = int(height/scl);
    widthGrid = int(width/scl);
    s = new Snake();
    i = 0;
    food = createVector(int(random(widthGrid))*scl, int(random(heightGrid))*scl);
}

function draw() {
    background(51);
    if (!s.alive) {
        s.total = 0;
        s.alive = true;
    }
    if (i == 0) {
        if (s.eat(food)) food = createVector(int(random(widthGrid))*scl, int(random(heightGrid))*scl);
        s.update();
        s.movementSet = false;
    }
    
    fill (255, 0, 0, 200);
    rect (food.x, food.y, scl, scl);
    s.show();
    i++;
    if (i > speed) i = 0;
}

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
}
