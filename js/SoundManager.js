class SoundManager {
    constructor() {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.bgmPlaying = false;
        this.bgmIndex = 0;
        this.bgmInterval = null;
    }

    playShoot() {
        const config = SOUND_CONFIG.SHOOT;
        this.playSound(
            config.frequency,
            config.duration,
            config.type,
            GAME_CONFIG.SOUND.DEFAULT_VOLUME,
            config.pan
        );
    }

    playExplosion() {
        const config = SOUND_CONFIG.EXPLOSION;
        this.playSound(
            config.frequency,
            config.duration,
            config.type,
            GAME_CONFIG.SOUND.DEFAULT_VOLUME,
            config.pan
        );
    }

    playHit() {
        const config = SOUND_CONFIG.HIT;
        this.playSound(
            config.frequency,
            config.duration,
            config.type,
            GAME_CONFIG.SOUND.DEFAULT_VOLUME,
            config.pan
        );
    }

    playGameOver() {
        const config = SOUND_CONFIG.GAME_OVER;
        config.notes.forEach((freq, i) => {
            setTimeout(() => {
                this.playSound(
                    freq,
                    config.duration,
                    config.type,
                    GAME_CONFIG.SOUND.DEFAULT_VOLUME,
                    0
                );
            }, i * GAME_CONFIG.SOUND.GAME_OVER_NOTE_DELAY);
        });
    }

    playSound(frequency, duration, type = 'square', volume = 0.3, pan = 0) {
        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();
        const panNode = this.context.createStereoPanner();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, this.context.currentTime);

        gainNode.gain.setValueAtTime(volume, this.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration);

        panNode.pan.setValueAtTime(pan, this.context.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(panNode);
        panNode.connect(this.context.destination);

        oscillator.start();
        oscillator.stop(this.context.currentTime + duration);
    }

    startBGM() {
        if (this.bgmPlaying) return;
        this.bgmPlaying = true;
        this.bgmInterval = setInterval(() => {
            this.playSound(
                SOUND_CONFIG.BGM.notes[this.bgmIndex],
                0.2,
                SOUND_CONFIG.BGM.type,
                GAME_CONFIG.SOUND.BGM_VOLUME
            );
            this.bgmIndex = (this.bgmIndex + 1) % SOUND_CONFIG.BGM.notes.length;
        }, GAME_CONFIG.SOUND.BGM_INTERVAL);
    }

    stopBGM() {
        if (!this.bgmPlaying) return;
        this.bgmPlaying = false;
        clearInterval(this.bgmInterval);
    }
}