class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawPixelArt(x, y, design, color, scale = 2) {
        this.ctx.fillStyle = color;
        for (let row = 0; row < design.length; row++) {
            for (let col = 0; col < design[row].length; col++) {
                if (design[row][col]) {
                    this.ctx.fillRect(
                        x + col * scale,
                        y + row * scale,
                        scale,
                        scale
                    );
                }
            }
        }
    }

    drawPlayer(player) {
        this.drawPixelArt(
            player.x,
            player.y,
            SPRITES.PLAYER,
            GAME_CONFIG.PLAYER.COLOR,
            GAME_CONFIG.PLAYER.SPRITE_SCALE
        );
    }

    drawEnemy(enemy) {
        this.drawPixelArt(
            enemy.x,
            enemy.y,
            SPRITES.INVADER,
            GAME_CONFIG.ENEMY.COLOR,
            GAME_CONFIG.ENEMY.SPRITE_SCALE
        );
    }

    drawProjectile(projectile, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            projectile.x,
            projectile.y,
            projectile.width,
            projectile.height
        );
    }

    drawPlayerProjectiles(projectiles) {
        projectiles.forEach(projectile => {
            this.drawProjectile(projectile, GAME_CONFIG.PROJECTILE.PLAYER_COLOR);
        });
    }

    drawEnemyProjectiles(projectiles) {
        projectiles.forEach(projectile => {
            this.drawProjectile(projectile, GAME_CONFIG.PROJECTILE.ENEMY_COLOR);
        });
    }

    drawEnemies(enemies) {
        enemies.forEach(enemy => {
            this.drawEnemy(enemy);
        });
    }
}