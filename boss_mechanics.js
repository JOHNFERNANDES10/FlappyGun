
function spawnBoss() {
  boss = {
    x: 600,
    y: 100,
    width: 100,
    height: 150,
    health: 300
  };
}

function drawBoss() {
  ctx.fillStyle = 'black';
  ctx.fillRect(boss.x, boss.y, boss.width, boss.height);
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(boss.x + 30, boss.y + 40, 5, 0, Math.PI * 2);
  ctx.arc(boss.x + 70, boss.y + 40, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'silver';
  ctx.beginPath();
  ctx.moveTo(boss.x + 90, boss.y);
  ctx.lineTo(boss.x + 120, boss.y - 40);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(boss.x + 120, boss.y - 40, 15, 0, Math.PI);
  ctx.stroke();
  ctx.fillStyle = 'red';
  ctx.fillRect(boss.x, boss.y - 20, boss.width, 10);
  ctx.fillStyle = 'green';
  ctx.fillRect(boss.x, boss.y - 20, boss.width * (boss.health / 300), 10);
}
