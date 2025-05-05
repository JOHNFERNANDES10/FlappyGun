
function updateGame() {
  if (gameOver) return;

  player.velocity += player.gravity;
  player.y += player.velocity;

  score++;

  if (score >= 1000 && !bossAppeared) {
    bossAppeared = true;
    backgroundMusic.pause();
    bossMusic.currentTime = 0;
    bossMusic.play();
    bossMusic.muted = muted;
    spawnBoss();
  }

  bullets.forEach((b, i) => {
    b.x += b.speed;
    if (boss && b.x + b.width > boss.x && b.x < boss.x + boss.width && b.y > boss.y && b.y < boss.y + boss.height) {
      boss.health -= 10;
      bullets.splice(i, 1);
    }
  });

  if (boss && boss.health <= 0) {
    boss = null;
    bossMusic.pause();
    backgroundMusic.play();
    backgroundMusic.muted = muted;
    locationStage++;
    score = 0;
    bossAppeared = false;
    bullets = [];
    enemies = [];
    alert("You defeated the Death Reaper! Advancing to new location...");
  }

  ctx.fillStyle = locationStage === 1 ? '#a0e0ff' : locationStage === 2 ? '#ffe6a0' : '#d0b0ff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'yellow';
  ctx.fillRect(player.x, player.y, player.width, player.height);

  ctx.fillStyle = 'red';
  bullets.forEach(b => ctx.fillRect(b.x, b.y, b.width, b.height));

  if (boss) drawBoss();

  ctx.fillStyle = 'black';
  ctx.font = '20px monospace';
  ctx.fillText('Score: ' + score, 650, 30);
  ctx.fillText('Location: ' + locationStage, 20, 30);

  requestAnimationFrame(updateGame);
}

function restartGame() {
  location.reload();
}

updateGame();
