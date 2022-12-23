# stick-arena-reborn
A HTML5 remake of the Flash game Stick Arena

Interested in following this project? Join the Discord! https://discord.gg/R3VDrpVnX9

## Media

#### Animations
![Demo](https://user-images.githubusercontent.com/52111974/209248299-059d8f04-e35c-4aae-a4a3-2c504b634890.gif)

#### Multiplayer
![Multiplayer](https://user-images.githubusercontent.com/46038298/209293806-513930e8-4bf0-48ec-b7d6-cd86f636fe82.gif)

## Roadmap

- [x] Initial Phaser js setup
- [ ] Initial multiplayer setup
- [ ] Setup PostgreSQL DB + `users` table created
- [ ] Login / registration system
- [ ] Gameplay
  - [ ] Maps
  - [ ] Camera follows the player
- [ ] Combat system
  - [ ] Picking up weapons from the ground
  - [ ] Collision detection
  - [ ] Hitpoints
    - [ ] Death animations
  - [ ] Weapon: Pistol
  - [ ] Weapon: AK-47
  - [ ] Weapon: Lightsaber
- [ ] Game logic
  - [ ] Battle room creation
  - [ ] 10 minute timer for the room
  - [ ] Game matching
    - Ex: If there's an open game with 3 out of 4 players and someone wants to join, add them to that game
  - [ ] Quick Play support
    - This will likely mean that there needs to be support for unregistered users
  - [ ] Player disconnections in the middle of a game
    - Ideally there should be a system in place to discourage this from happening
- [ ] Security: Validate bounds of player positions
- [ ] Cosmetic: Spinners
- [ ] Cosmetic: Pets
- [ ] Game mode: Capture The Flag
- [ ] Game mode: Team Deathmatch
- [ ] Game mode: PvE / Zombies
- [ ] Game mode: Wager matches
