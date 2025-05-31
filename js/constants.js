// Game Configuration Constants
const GAME_CONFIG = {
    CANVAS: {
        DEFAULT_WIDTH: 800,
        DEFAULT_HEIGHT: 600,
        BORDER_COLOR: '#30cf30',
        BACKGROUND_COLOR: '#000'
    },
    
    PLAYER: {
        WIDTH: 30,
        HEIGHT: 30,
        SPEED: 5,
        INITIAL_LIVES: 3,
        COLOR: '#30cf30',
        SPRITE_SCALE: 2
    },
    
    ENEMY: {
        WIDTH: 30,
        HEIGHT: 30,
        COLOR: '#ff0000',
        INITIAL_SPEED: 2,
        SPEED_INCREMENT: 0.5,
        MAX_SPEED: 5,
        DROP_DISTANCE: 20,
        SPRITE_SCALE: 2,
        SHOOT_PROBABILITY: 0.02
    },
    
    PROJECTILE: {
        WIDTH: 3,
        HEIGHT: 15,
        PLAYER_SPEED: 7,
        ENEMY_SPEED: 5,
        PLAYER_COLOR: '#fff',
        ENEMY_COLOR: '#ff6666',
        SHOOT_DELAY: 250
    },
    
    SCORING: {
        ENEMY_HIT: 100
    },
    
    SPAWN: {
        BASE_ROWS: 3,
        BASE_COLS: 8,
        ROW_INCREMENT_PER_2_LEVELS: 1,
        MAX_ADDITIONAL_ROWS: 2,
        PADDING: 20
    },
    
    SOUND: {
        DEFAULT_VOLUME: 0.3,
        BGM_VOLUME: 0.1,
        BGM_INTERVAL: 300,
        GAME_OVER_NOTE_DELAY: 300
    }
};

// Pixel Art Designs
const SPRITES = {
    PLAYER: [
        [0,0,0,0,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,0],
        [1,1,1,0,1,1,1,1,0,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,1,1,1,0,0,1,1,1,0,0],
        [0,0,0,1,0,0,0,0,1,0,0,0]
    ],
    
    INVADER: [
        [0,0,1,0,0,0,0,0,1,0,0],
        [0,0,0,1,0,0,0,1,0,0,0],
        [0,0,1,1,1,1,1,1,1,0,0],
        [0,1,1,0,1,1,1,0,1,1,0],
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,1,1,1,1,1,0,1],
        [1,0,1,0,0,0,0,0,1,0,1],
        [0,0,0,1,1,0,1,1,0,0,0]
    ]
};

// Sound frequencies and settings
const SOUND_CONFIG = {
    SHOOT: {
        frequency: 880,
        duration: 0.1,
        type: 'square',
        pan: -0.8
    },
    EXPLOSION: {
        frequency: 100,
        duration: 0.3,
        type: 'sawtooth',
        pan: 0.8
    },
    HIT: {
        frequency: 440,
        duration: 0.1,
        type: 'square',
        pan: 0
    },
    GAME_OVER: {
        notes: [440, 349.23, 261.63],
        duration: 0.3,
        type: 'triangle'
    },
    BGM: {
        notes: [261.63, 293.66, 329.63, 349.23, 391.995, 440.00, 493.88, 523.25],
        type: 'triangle'
    }
};