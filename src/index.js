import { io } from 'socket.io-client';
import './index.scss';
import ClientGame from './client/ClientGame';
import { getTime } from './common/util';

window.addEventListener('load', async () => {
  const world = await fetch('https://jsmarathonpro.herokuapp.com/api/v1/world').then((res) => res.json());
  const sprites = await fetch('https://jsmarathonpro.herokuapp.com/api/v1/sprites').then((res) => res.json());
  const gameObjects = await fetch('https://jsmarathonpro.herokuapp.com/api/v1/gameObjects').then((res) => res.json());

  const socket = io('https://jsprochat.herokuapp.com');

  const startScreen = document.querySelector('.start-game');
  const loginForm = document.getElementById('nameForm');
  const nameInput = document.getElementById('name');

  const chatWrap = document.querySelector('.chat-wrap');
  const chatForm = document.getElementById('form');
  const chatInput = document.getElementById('input');
  const chatMessage = document.querySelector('.message');

  startScreen.style.display = 'flex';

  const submitName = (event) => {
    event.preventDefault();

    if (!nameInput.value) {
      alert('Enter a name, please.');
      return;
    }
    ClientGame.init({
      tagId: 'game',
      playerName: nameInput.value,
      world,
      sprites,
      gameObjects,
      apiCfg: {
        url: 'https://jsmarathonpro.herokuapp.com/',
        path: '/game',
      },
    });
    socket.emit('start', nameInput.value);

    chatWrap.classList.toggle('hide-element');
    loginForm.removeEventListener('submit', submitName);
    startScreen.remove();
  };

  loginForm.addEventListener('submit', submitName);

  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (chatInput.value) {
      socket.emit('chat message', chatInput.value);

      chatInput.value = '';
    }
  });

  socket.on('chat connection', (data) => {
    chatMessage.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  });

  socket.on('chat disconnect', (data) => {
    chatMessage.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  });

  socket.on('chat message', (data) => {
    let myMessages = '';
    if (data.name === nameInput.value) {
      myMessages = 'my-message';
    }
    // console.log(data);
    chatMessage.insertAdjacentHTML(
      'beforeend',
      `<p class="${myMessages}"><strong>${getTime(data.time)}: ${data.name}</strong> - ${data.msg}</p>`,
    );
  });

  socket.on('chat online', (data) => {
    // chatMessage.removeChild();
    chatMessage.insertAdjacentHTML('beforeend', `<p class="now-online"><strong>Online: ${data.online}</strong></p>`);
  });
});
