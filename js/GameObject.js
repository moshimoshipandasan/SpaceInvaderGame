class GameObject {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    checkCollision(other) {
        return this.x < other.x + other.width &&
               this.x + this.width > other.x &&
               this.y < other.y + other.height &&
               this.y + this.height > other.y;
    }
}

class Player extends GameObject {
    constructor(x, y) {
        super(x, y, GAME_CONFIG.PLAYER.WIDTH, GAME_CONFIG.PLAYER.HEIGHT);
        this.speed = GAME_CONFIG.PLAYER.SPEED;
        this.projectiles = [];
    }

    moveLeft(boundary = 0) {
        if (this.x > boundary) {
            this.x -= this.speed;
        }
    }

    moveRight(boundary) {
        if (this.x < boundary - this.width) {
            this.x += this.speed;
        }
    }

    shoot() {
        const projectile = new Projectile(
            this.x + this.width / 2,
            this.y,
            -GAME_CONFIG.PROJECTILE.PLAYER_SPEED
        );
        this.projectiles.push(projectile);
        return projectile;
    }

    updateProjectiles(canvasHeight) {
        this.projectiles = this.projectiles.filter(projectile => {
            projectile.update();
            return projectile.y > 0;
        });
    }
}

class Enemy extends GameObject {
    constructor(x, y) {
        super(x, y, GAME_CONFIG.ENEMY.WIDTH, GAME_CONFIG.ENEMY.HEIGHT);
    }

    shoot() {
        return new Projectile(
            this.x + this.width / 2,
            this.y + this.height,
            GAME_CONFIG.PROJECTILE.ENEMY_SPEED
        );
    }
}

class Projectile extends GameObject {
    constructor(x, y, speed) {
        super(x, y, GAME_CONFIG.PROJECTILE.WIDTH, GAME_CONFIG.PROJECTILE.HEIGHT);
        this.speed = speed;
    }

    update() {
        this.y += this.speed;
    }

    isOffScreen(canvasHeight) {
        return this.speed < 0 ? this.y < 0 : this.y > canvasHeight;
    }
}