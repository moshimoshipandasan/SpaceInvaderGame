# Space Invaders Game

A feature-rich Space Invaders game implementation using HTML5 Canvas and JavaScript with retro pixel art graphics, advanced gameplay mechanics, and immersive 8-bit sound effects.

## Features

### Graphics & Visual Effects
- Retro pixel art graphics with multiple enemy types
- Animated starfield background
- Particle explosion effects
- Dynamic color-coded barriers that change as they take damage
- Visual power-up indicators

### Gameplay Mechanics
- **Destructible Barriers**: 4 barriers between player and invaders that can be destroyed
- **Power-Up System**:
  - Rapid Fire: Increased shooting speed
  - Double Shot: Fire two projectiles at once
  - Shield: Temporary invincibility
- **Combo System**: Chain enemy kills for bonus points
- **UFO Bonus Enemy**: Randomly appearing high-value target
- **Progressive Difficulty**: Speed increases with each level
- **Multiple Enemy Types**: Different point values and colors

### Sound & Music
- Enhanced 8-bit style sound effects
- Background music with dynamic tempo
- Unique sounds for:
  - Power-up collection
  - Barrier hits
  - UFO appearance
  - Level completion
  - Combo achievements

### Score & Progress
- Score tracking with combo multipliers
- High score persistence (saved locally)
- Level progression system
- Lives system
- Real-time stats display

## How to Play

1. Open `index.html` in a modern web browser
2. Click "Start Game" to begin
3. Use arrow keys or A/D keys to move left/right
4. Press spacebar to shoot
5. Destroy all invaders to advance to the next level
6. Use barriers for protection
7. Collect power-ups for temporary advantages
8. Chain kills quickly for combo bonuses
9. Watch for the UFO for extra points

## Controls

- Left Arrow / A: Move Left
- Right Arrow / D: Move Right
- Spacebar: Shoot
- Start Game button: Begin new game
- Play Again button: Restart after game over

## Scoring System

- Basic Invader (Red): 100 points
- Medium Invader (Purple): 200 points
- Top Invader (Cyan): 300 points
- UFO: 500 points
- Combo Multiplier: x2, x3, x4... for rapid kills

## Power-Ups

Power-ups randomly drop from destroyed enemies:
- **Rapid Fire (Purple)**: Doubles your fire rate for 10 seconds
- **Double Shot (Cyan)**: Shoot two projectiles at once for 10 seconds
- **Shield (Yellow)**: Absorb one hit without losing a life

## Technical Details

- Built with vanilla JavaScript
- Uses HTML5 Canvas for rendering
- Web Audio API for dynamic sound generation
- LocalStorage for high score persistence
- No external dependencies required
- Responsive design adapts to different screen sizes

## Browser Support

Works in all modern browsers that support HTML5 Canvas and Web Audio API:
- Chrome
- Firefox
- Safari
- Edge
