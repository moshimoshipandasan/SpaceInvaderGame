# Space Invaders Game

A classic Space Invaders game implementation using HTML5 Canvas and JavaScript with retro pixel art graphics and 8-bit sound effects.

## Features

- Retro pixel art graphics
- 8-bit style sound effects and background music
- Responsive design
- Keyboard controls
- Progressive difficulty
- Score tracking
- Lives system

## How to Play

1. Open `index.html` in a modern web browser
2. Click "Start Game" to begin
3. Use arrow keys or A/D keys to move left/right
4. Press spacebar to shoot
5. Destroy all invaders to advance to the next level
6. Avoid enemy projectiles and prevent invaders from reaching the bottom

## Controls

- Left Arrow / A: Move Left
- Right Arrow / D: Move Right
- Spacebar: Shoot
- Start Game button: Begin new game
- Play Again button: Restart after game over

## Project Structure

```
SpaceInvaderGame/
├── index.html          # Main HTML file
├── styles.css          # Game styles
├── js/
│   ├── constants.js    # Game configuration and constants
│   ├── Game.js         # Main game logic
│   ├── GameObject.js   # Game entity classes (Player, Enemy, Projectile)
│   ├── Renderer.js     # Rendering engine
│   ├── SoundManager.js # Sound effects and music management
│   ├── InputHandler.js # Keyboard input handling
│   └── main.js         # Game initialization
└── README.md          # This file
```

## Technical Details

- Built with vanilla JavaScript using object-oriented programming
- Modular architecture with separation of concerns
- Uses HTML5 Canvas for rendering
- Web Audio API for sound effects
- No external dependencies required

## Browser Support

Works in all modern browsers that support HTML5 Canvas and Web Audio API:
- Chrome
- Firefox
- Safari
- Edge