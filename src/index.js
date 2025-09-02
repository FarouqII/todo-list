import './css/reset.css';
import './css/style.css';
import { loadHome } from './load/loadHome.js';
import { loadToday } from './load/loadToday.js';
import { loadUpcoming } from './load/loadUpcoming.js';
import { loadPast } from './load/loadPast.js';
import { resetForm } from './resetForm.js';

loadHome();

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    loadHome();
    selectTile(homeBtn);
});

const todayBtn = document.getElementById('today');
todayBtn.addEventListener('click', () => {
    loadToday();
    selectTile(todayBtn);
});

const upcomingBtn = document.getElementById('upcoming');
upcomingBtn.addEventListener('click', () => {
    loadUpcoming();
    selectTile(upcomingBtn);
});

const pastBtn = document.getElementById('past');
pastBtn.addEventListener('click', () => {
    loadPast();
    selectTile(pastBtn);
});

function selectTile(tile) {
    const tiles = document.querySelectorAll('.nav-tile');
    for (const t of tiles) {
        t.className = "nav-tile";
    }
    tile.classList += " selected";
}

const closeBtns = document.querySelectorAll('#project-close');
for (const btn of closeBtns) {
    btn.addEventListener('click', e => {
        e.preventDefault();

        resetForm();
    });
}