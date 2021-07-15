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

// const fieldRender2 = () => {
//     ctx.lineWidth = 10;
//     ctx.fillStyle = '#000';
//     ctx.fillRect(0, 0, 600, 600);
//     ctx.fillStyle = 'rgba(200, 210, 140, 1)';
//     for (let i = 0; i < canvasW; i += 24) {
//         ctx.fillRect(19 + i, 24, 5, 5);
//     }
//     for (let i = 0; i < canvasH; i += 24) {
//         ctx.fillRect(19, 24 + i, 5, 5);
//     }

//     ctx.strokeStyle = '#00a';
//     ctx.lineWidth = 2;
//     ctx.lineJoin = 'round';
//     ctx.beginPath();
//     ctx.moveTo(50, 50);
//     ctx.lineTo(70, 50);
//     ctx.lineTo(70, 150);
//     ctx.lineTo(110, 150);
//     ctx.lineTo(110, 170);
//     ctx.lineTo(70, 170);
//     ctx.lineTo(70, 220);
//     ctx.lineTo(50, 220);
//     ctx.lineTo(50, 50);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(350, 350);
//     ctx.lineTo(370, 350);
//     ctx.lineTo(370, 450);
//     ctx.lineTo(410, 450);
//     ctx.lineTo(410, 470);
//     ctx.lineTo(370, 470);
//     ctx.lineTo(370, 520);
//     ctx.lineTo(350, 520);
//     ctx.lineTo(350, 350);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(160, 170);
//     ctx.lineTo(180, 170);
//     ctx.lineTo(180, 470);
//     ctx.lineTo(160, 470);
//     ctx.lineTo(160, 240);
//     ctx.lineTo(120, 240);
//     ctx.lineTo(120, 220);
//     ctx.lineTo(160, 220);
//     ctx.lineTo(160, 170);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(120, 50);
//     ctx.lineTo(550, 50);
//     ctx.lineTo(550, 470);
//     ctx.lineTo(530, 470);
//     ctx.lineTo(530, 350);
//     ctx.lineTo(250, 350);
//     ctx.lineTo(250, 120);
//     ctx.lineTo(270, 120);
//     ctx.lineTo(270, 330);
//     ctx.lineTo(330, 330);
//     ctx.lineTo(330, 120);
//     ctx.lineTo(350, 120);
//     ctx.lineTo(350, 260);
//     ctx.lineTo(400, 260);
//     ctx.lineTo(400, 170);
//     ctx.lineTo(420, 170);
//     ctx.lineTo(420, 280);
//     ctx.lineTo(350, 280);
//     ctx.lineTo(350, 330);
//     ctx.lineTo(470, 330);
//     ctx.lineTo(470, 120);
//     ctx.lineTo(490, 120);
//     ctx.lineTo(490, 330);
//     ctx.lineTo(530, 330);
//     ctx.lineTo(530, 70);
//     ctx.lineTo(120, 70);
//     ctx.lineTo(120, 50);
//     ctx.stroke();

//     ctx.strokeStyle = '#ff0';
//     ctx.lineWidth = 1;
//     ctx.fillStyle = '#ee0';
//     ctx.beginPath();
//     ctx.moveTo(225, 25);
//     ctx.arc(225, 25, 20, 0.2 * Math.PI, 1.8 * Math.PI);
//     ctx.moveTo(225, 25);
//     ctx.fill();
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(300, 505);
//     ctx.lineTo(300, 515);
//     ctx.quadraticCurveTo(300, 520, 295, 520);
//     ctx.lineTo(295, 520);
//     ctx.lineTo(105, 520);
//     ctx.quadraticCurveTo(100, 520, 100, 515);
//     ctx.lineTo(100, 505);
//     ctx.quadraticCurveTo(100, 500, 105, 500);
//     ctx.lineTo(105, 500);
//     ctx.lineTo(215, 500);
//     ctx.quadraticCurveTo(220, 500, 220, 495);
//     ctx.lineTo(220, 415);
//     ctx.quadraticCurveTo(220, 410, 225, 410);
//     ctx.lineTo(235, 410);
//     ctx.quadraticCurveTo(240, 410, 240, 415);
//     ctx.lineTo(240, 495);
//     ctx.quadraticCurveTo(240, 500, 245, 500);
//     ctx.lineTo(295, 500);
//     ctx.quadraticCurveTo(300, 500, 300, 505);
//     ctx.stroke();
// };

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

//     // fieldRender2();
//     ctx.drawImage(img, cycle * spriteW, moveDirrection, spriteW, spriteH, pX, pY, 48, 48);

//     window.requestAnimationFrame(walk);
// }

// img.addEventListener('load', () => {
//     window.requestAnimationFrame(walk);
// });
