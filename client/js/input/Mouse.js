function mouseMoveHandler(event) {
  if (playerManager.mainPlayer.isRespawning) return;

  const mouseX = event.offsetX - (canvas.width / 2 + camera.centerOffsetX);
  const mouseY = event.offsetY - (canvas.height / 2 + camera.centerOffsetY);
  const spriteRotation = Math.atan2(mouseY, mouseX) + 90 * Constants.TO_RADIANS;
  playerManager.mainPlayer.body.setRotation(spriteRotation);
}

let shootingInterval;

function onMouseDown(event) {
  if (event.button !== Constants.LEFT_MOUSE_BUTTON) return;
  if (
    !playerManager.mainPlayer.canShoot ||
    playerManager.mainPlayer.isRespawning
  )
    return;

  // Trigger the initial shot
  playerManager.mainPlayer.shoot();

  // Clear any existing interval to avoid multiple intervals running simultaneously
  clearInterval(shootingInterval);

  // Start a new interval for continuous shooting
  shootingInterval = setInterval(() => {
    if (
      playerManager.mainPlayer.canShoot &&
      !playerManager.mainPlayer.isRespawning
    ) {
      playerManager.mainPlayer.shoot();
    } else {
      clearInterval(shootingInterval);
    }
  }, 800);
}

function onMouseUp(event) {
  if (event.button !== Constants.LEFT_MOUSE_BUTTON) return;

  clearInterval(shootingInterval);
}
