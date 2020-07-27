'use strict';

// sidebar toggle

const mainLogo = document.querySelector('.sidebar__logo');
const sidebar = document.querySelector('.sidebar__list');

mainLogo.onclick = function() {
  sidebar.classList.toggle('sidebar__list--disappear');
};

// to get screen width

const win = window;
const doc = document;
const docElem = doc.documentElement;
const body = doc.getElementsByTagName('body')[0];

const width = win.innerWidth || docElem.clientWidth || body.clientWidth;

// chats toggle

const chats = document.querySelector('.chats');
const currentChat = document.querySelector('.current-chat');
const buttonBack = document.querySelector('.current-chat__back');
const breakPoint = 610;

chats.onclick = function() {
  if (width <= breakPoint) {
    chats.classList.toggle('chats--hidden');
    currentChat.style.display = 'block';
    buttonBack.style.display = 'block';
  }
};

buttonBack.onclick = function() {
  if (width <= breakPoint) {
    chats.classList.toggle('chats--hidden');
    currentChat.style.display = 'none';
    buttonBack.style.display = 'none';
  }
};
