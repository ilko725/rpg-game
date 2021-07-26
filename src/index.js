import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

// import SenseiWalk from './assets/Male-4-Walk.png';
// import terrainAtlas from './assets/terrain.png';
// import worldCfg from './configs/world.json';
// import sprites from './configs/sprites';
// import ClientGame from './client/ClientGame';

// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');

// const canvasW = canvas.clientWidth;
// const canvasH = canvas.clientHeight;
// const spriteW = 48;
// const spriteH = 48;

// const terrain = document.createElement('img');
// terrain.src = terrainAtlas;

// terrain.addEventListener('load', () => {
//     console.log(sprites);
//     const { map } = worldCfg;
//     map.forEach((cfgRow, y) => {
//         cfgRow.forEach((cfgCell, x) => {
//             const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//             ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//         })
//     })
// });

// const shots = 3;
// const moveDownSpritePosition = 0;
// const moveLeftSpritePosition = 48;
// const moveRightSpritePosition = 96;
// const moveUpSpritePosition = 144;

// let cycle = 0;
// let moveDirrection = 0;
// let bottomPressed = false;
// let leftPressed = false;
// let upPressed = false;
// let rightPressed = false;
// let pY = 0;
// let pX = 0;
// let startPlayerPositionX = 0;
// let startPlayerPositionY = 0;

// function keyDownHandler(e) {
//     console.log(e);
//     switch (e.key) {
//         case 'Down':
//         case 'ArrowDown':
//             bottomPressed = true;
//             break;
//         case 'Up':
//         case 'ArrowUp':
//             upPressed = true;
//             break;
//         case 'left':
//         case 'ArrowLeft':
//             leftPressed = true;
//             break;
//         case 'Right':
//         case 'ArrowRight':
//             rightPressed = true;
//             break;
//         default:
//             break;
//     }
// }

// function keyUpHandler(e) {
//     console.log(e);
//     switch (e.key) {
//         case 'Down':
//         case 'ArrowDown':
//             bottomPressed = false;
//             break;
//         case 'Up':
//         case 'ArrowUp':
//             upPressed = false;
//             break;
//         case 'left':
//         case 'ArrowLeft':
//             leftPressed = false;
//             break;
//         case 'Right':
//         case 'ArrowRight':
//             rightPressed = false;
//             break;
//         default:
//             break;
//     }
// }

// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);

// const img = document.createElement('img');
// img.src = SenseiWalk;
// startPlayerPositionX = canvasW / 2 - spriteW / 2;
// startPlayerPositionY = canvasH / 2 - spriteH / 2;
// pX = startPlayerPositionX;
// pY = startPlayerPositionY;

// function squareFieldDimentionsCheck(pos) {
//     if (canvasW !== canvasH) {
//         return console.log('Write another Check Dimentions function for NON SQUARE game field.');
//     }
//     if (pos < 0) {
//         return 0;
//     }
//     if (pos > canvasW - spriteW) {
//         return canvasW - spriteW;
//     }
//     return pos;
// }

// function walk(timestamp) {
//     if (bottomPressed) {
//         pY += 10;
//         pY = squareFieldDimentionsCheck(pY);
//         moveDirrection = moveDownSpritePosition;
//         cycle = (cycle + 1) % shots;
//     } else if (upPressed) {
//         pY -= 10;
//         pY = squareFieldDimentionsCheck(pY);
//         moveDirrection = moveUpSpritePosition;
//         cycle = (cycle + 1) % shots;
//     } else if (rightPressed) {
//         pX += 10;
//         pX = squareFieldDimentionsCheck(pX);
//         moveDirrection = moveRightSpritePosition;
//         cycle = (cycle + 1) % shots;
//     } else if (leftPressed) {
//         pX -= 10;
//         pX = squareFieldDimentionsCheck(pX);
//         moveDirrection = moveLeftSpritePosition;
//         cycle = (cycle + 1) % shots;
//     }
//     ctx.clearRect(0, 0, canvasW, canvasH);

//     ctx.drawImage(img, cycle * spriteW, moveDirrection, spriteW, spriteH, pX, pY, 48, 48);

//     window.requestAnimationFrame(walk);
// }

// img.addEventListener('load', () => {
//     window.requestAnimationFrame(walk);
// });
