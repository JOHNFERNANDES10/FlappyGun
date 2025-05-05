
// === Audio Setup ===
const gunshotSound = new Audio('gunshot-sound-178803.mp3');
const backgroundMusic = new Audio('phonk-292971.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.4;
backgroundMusic.play();

const bossMusic = new Audio('brain-implant-cyberpunk-sci-fi-trailer-action-intro-330416.mp3');
bossMusic.loop = true;
bossMusic.volume = 0.5;

let muted = false;

// === Create Control Panel ===
const controlPanel = document.createElement('div');
controlPanel.style.position = 'absolute';
controlPanel.style.top = '10px';
controlPanel.style.left = '10px';
controlPanel.style.padding = '10px';
controlPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
controlPanel.style.color = 'white';
controlPanel.style.fontFamily = 'monospace';
controlPanel.style.borderRadius = '8px';
controlPanel.innerHTML = `
  <strong>Controls:</strong><br>
  Space: Fly<br>
  F: Fire<br>
  M: Mute/Unmute<br>
  + / - : Volume Up/Down<br>
  R: Restart (after Game Over)
`;
document.body.appendChild(controlPanel);

// === Key Event Listeners ===
document.addEventListener('keydown', function(e) {
  if (e.code === 'Space') {
    player.velocity = player.lift;
  } else if (e.code === 'KeyF') {
    if (!muted) {
      gunshotSound.currentTime = 0;
      gunshotSound.play();
    }
    bullets.push({
      x: player.x + player.width,
      y: player.y + player.height / 2,
      width: 10,
      height: 4,
      speed: 10
    });
  } else if (e.code === 'KeyM') {
    muted = !muted;
    backgroundMusic.muted = muted;
    gunshotSound.muted = muted;
    bossMusic.muted = muted;
  } else if (e.code === 'Equal') {
    backgroundMusic.volume = Math.min(1, backgroundMusic.volume + 0.1);
    bossMusic.volume = Math.min(1, bossMusic.volume + 0.1);
  } else if (e.code === 'Minus') {
    backgroundMusic.volume = Math.max(0, backgroundMusic.volume - 0.1);
    bossMusic.volume = Math.max(0, bossMusic.volume - 0.1);
  } else if (e.code === 'KeyR' && gameOver) {
    restartGame();
  }
});
