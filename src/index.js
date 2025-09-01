import './css/reset.css';
import './css/style.css';
import { loadHome } from './load/loadHome.js';
import { loadToday } from './load/loadToday.js';

loadHome();

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    loadHome();
});

const todayBtn = document.getElementById('today');
todayBtn.addEventListener('click', () => {
    loadToday();
});