class Camera {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.centerOffsetX = 0;
    this.centerOffsetY = 0;

    // Define a dead zone centered on the screen, with a 20-pixel radius
    const deadZoneRadius = 20;
    this.deadZone = {
      x: canvas.width / 2 - deadZoneRadius,
      y: canvas.height / 2 - deadZoneRadius,
      width: deadZoneRadius * 2,
      height: deadZoneRadius * 2,
    };
  }

  setPos(player) {
    const playerScreenX = player.x * scaleFactor - this.x;
    const playerScreenY = player.y * scaleFactor - this.y;

    const centerOffsetX = playerScreenX - canvas.width / 2;
    const centerOffsetY = playerScreenY - canvas.height / 2;

    this.centerOffsetX = centerOffsetX;
    this.centerOffsetY = centerOffsetY;

    // Adjust the camera if the player is outside the dead zone
    if (playerScreenX < this.deadZone.x) {
      this.x += playerScreenX - this.deadZone.x;
    } else if (playerScreenX > this.deadZone.x + this.deadZone.width) {
      this.x += playerScreenX - (this.deadZone.x + this.deadZone.width);
    }

    if (playerScreenY < this.deadZone.y) {
      this.y += playerScreenY - this.deadZone.y;
    } else if (playerScreenY > this.deadZone.y + this.deadZone.height) {
      this.y += playerScreenY - (this.deadZone.y + this.deadZone.height);
    }

    // Clamp the camera position to prevent it from showing out of bounds areas
    this.x = Math.max(0, Math.min(this.x, 2110 - canvas.width));
    this.y = Math.max(0, Math.min(this.y, 1450 - canvas.height));
  }
}

const camera = new Camera();
