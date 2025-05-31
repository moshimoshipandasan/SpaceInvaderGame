class InputHandler {
    constructor() {
        this.keys = {
            left: false,
            right: false,
            space: false
        };
        
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('keydown', (e) => this.onKeyDown(e));
        window.addEventListener('keyup', (e) => this.onKeyUp(e));
    }

    onKeyDown(e) {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
            this.keys.left = true;
        }
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
            this.keys.right = true;
        }
        if (e.key === ' ') {
            e.preventDefault();
            this.keys.space = true;
        }
    }

    onKeyUp(e) {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
            this.keys.left = false;
        }
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
            this.keys.right = false;
        }
        if (e.key === ' ') {
            this.keys.space = false;
        }
    }

    isLeftPressed() {
        return this.keys.left;
    }

    isRightPressed() {
        return this.keys.right;
    }

    isSpacePressed() {
        return this.keys.space;
    }
}