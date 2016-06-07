function keyPressed() {
        if (keyCode === UP_ARROW) {
                snake.dir(0, -1);
        } else if (keyCode === DOWN_ARROW) {
                snake.dir(0, 1);
        } else if (keyCode === RIGHT_ARROW) {
                snake.dir(1, 0);
        } else if (keyCode === LEFT_ARROW) {
                snake.dir(-1, 0);
        }
        return false;
}

function keyTyped() {
        if (key === 'p') gameIsPaused = !gameIsPaused;
        return false;
}
