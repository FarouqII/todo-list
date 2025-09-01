import './css/reset.css';
import './css/style.css';
import { loadHome } from './load/loadHome.js';
import { loadToday } from './load/loadToday.js';
import { loadUpcoming } from './load/loadUpcoming.js';

loadHome();

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    loadHome();
});

const todayBtn = document.getElementById('today');
todayBtn.addEventListener('click', () => {
    loadToday();
});

const upcomingBtn = document.getElementById('upcoming');
upcomingBtn.addEventListener('click', () => {
    loadUpcoming();
});