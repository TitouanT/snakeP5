function pauseGame() {
	textSize(80);
	text("PAUSE", width/2 - 130, height/2);
}

function gameOver() {
	fill(0, 200, 200);
	var t = map (k, 0, 200, 0, PI);
	textSize(sin(t)*100);
	text("GAME OVER", k+300, height/2);
}
