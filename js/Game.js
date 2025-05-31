class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.setupCanvas();
        
        this.renderer = new Renderer(this.canvas);
        this.soundManager = new SoundManager();
        this.inputHandler = new InputHandler();
        
        this.score = 0;
        this.lives = GAME_CONFIG.PLAYER.INITIAL_LIVES;
        this.gameActive = false;
        this.level = 1;
        
        this.player = null;
        this.enemies = [];
        this.enemyProjectiles = [];
        this.enemySpeed = GAME_CONFIG.ENEMY.INITIAL_SPEED;
        this.enemyDirection = 1;
        
        this.lastShot = 0;
        
        this.bindUIEvents();
        this.updateUI();
    }

    setupCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    bindUIEvents() {
        document.getElementById('startButton').addEventListener('click', () => this.startGame());
        document.getElementById('restartButton').addEventListener('click', () => this.startGame());
        window.addEventListener('resize', () => this.setupCanvas());
    }

    startGame() {
        this.gameActive = true;
        this.score = 0;
        this.lives = GAME_CONFIG.PLAYER.INITIAL_LIVES;
        this.level = 1;
        this.enemies = [];
        this.enemyProjectiles = [];
        this.enemySpeed = GAME_CONFIG.ENEMY.INITIAL_SPEED;
        
        this.player = new Player(
            this.canvas.width / 2 - GAME_CONFIG.PLAYER.WIDTH / 2,
            this.canvas.height - 40
        );
        
        document.getElementById('gameOver').classList.add('hidden');
        this.updateUI();
        
        this.spawnEnemies();
        this.soundManager.startBGM();
        this.gameLoop();
    }

    spawnEnemies() {
        const rows = GAME_CONFIG.SPAWN.BASE_ROWS + 
                    Math.min(GAME_CONFIG.SPAWN.MAX_ADDITIONAL_ROWS, 
                    Math.floor(this.level / 2));
        const cols = GAME_CONFIG.SPAWN.BASE_COLS;
        const padding = GAME_CONFIG.SPAWN.PADDING;
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const enemy = new Enemy(
                    col * (GAME_CONFIG.ENEMY.WIDTH + padding) + padding,
                    row * (GAME_CONFIG.ENEMY.HEIGHT + padding) + padding
                );
                this.enemies.push(enemy);
            }
        }
    }

    updateUI() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('lives').textContent = this.lives;
    }

    gameLoop() {
        if (!this.gameActive) return;
        
        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.handlePlayerInput();
        this.updateProjectiles();
        this.updateEnemies();
        this.checkCollisions();
        this.checkGameState();
    }

    handlePlayerInput() {
        if (this.inputHandler.isLeftPressed()) {
            this.player.moveLeft();
        }
        if (this.inputHandler.isRightPressed()) {
            this.player.moveRight(this.canvas.width);
        }
        
        if (this.inputHandler.isSpacePressed()) {
            const now = Date.now();
            if (now - this.lastShot >= GAME_CONFIG.PROJECTILE.SHOOT_DELAY) {
                this.player.shoot();
                this.soundManager.playShoot();
                this.lastShot = now;
            }
        }
    }

    updateProjectiles() {
        this.player.updateProjectiles(this.canvas.height);
        
        this.enemyProjectiles = this.enemyProjectiles.filter(projectile => {
            projectile.update();
            return !projectile.isOffScreen(this.canvas.height);
        });
    }

    updateEnemies() {
        let touchedEdge = false;
        
        this.enemies.forEach(enemy => {
            enemy.x += this.enemySpeed * this.enemyDirection;
            if (enemy.x <= 0 || enemy.x + enemy.width >= this.canvas.width) {
                touchedEdge = true;
            }
        });
        
        if (touchedEdge) {
            this.enemyDirection *= -1;
            this.enemies.forEach(enemy => {
                enemy.y += GAME_CONFIG.ENEMY.DROP_DISTANCE;
            });
        }
        
        if (Math.random() < GAME_CONFIG.ENEMY.SHOOT_PROBABILITY && this.enemies.length > 0) {
            const shooter = this.enemies[Math.floor(Math.random() * this.enemies.length)];
            this.enemyProjectiles.push(shooter.shoot());
        }
    }

    checkCollisions() {
        // Check player projectiles hitting enemies
        this.player.projectiles = this.player.projectiles.filter(projectile => {
            let hit = false;
            this.enemies = this.enemies.filter(enemy => {
                if (projectile.checkCollision(enemy)) {
                    hit = true;
                    this.score += GAME_CONFIG.SCORING.ENEMY_HIT;
                    this.soundManager.playExplosion();
                    this.updateUI();
                    return false;
                }
                return true;
            });
            return !hit;
        });
        
        // Check enemy projectiles hitting player
        this.enemyProjectiles = this.enemyProjectiles.filter(projectile => {
            if (projectile.checkCollision(this.player)) {
                this.lives--;
                this.soundManager.playHit();
                this.updateUI();
                if (this.lives <= 0) {
                    this.gameOver();
                }
                return false;
            }
            return true;
        });
    }

    checkGameState() {
        // Check if enemies reached player
        if (this.enemies.some(enemy => enemy.y + enemy.height >= this.player.y)) {
            this.gameOver();
        }
        
        // Check if all enemies defeated
        if (this.enemies.length === 0) {
            this.level++;
            this.enemySpeed = Math.min(
                this.enemySpeed + GAME_CONFIG.ENEMY.SPEED_INCREMENT,
                GAME_CONFIG.ENEMY.MAX_SPEED
            );
            this.spawnEnemies();
        }
    }

    gameOver() {
        this.gameActive = false;
        this.soundManager.stopBGM();
        this.soundManager.playGameOver();
        document.getElementById('gameOver').classList.remove('hidden');
    }

    draw() {
        this.renderer.clear();
        this.renderer.drawPlayer(this.player);
        this.renderer.drawPlayerProjectiles(this.player.projectiles);
        this.renderer.drawEnemies(this.enemies);
        this.renderer.drawEnemyProjectiles(this.enemyProjectiles);
    }
}