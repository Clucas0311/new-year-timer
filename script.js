const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const year = document.querySelector('#year');
const loading = document.querySelector('#loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set  background current year
year.innerText = currentYear + 1;

// Update time
function updateCountdown() {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;

	const day = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
	const min = Math.floor(diff / 1000 / 60) % 60;
	const sec = Math.floor(diff / 1000) % 60;

	// Add Values to the dom
	days.innerHTML = day;
	hours.innerHTML = hour < 10 ? '0' + hour : hour;
	minutes.innerHTML = min < 10 ? '0' + min : min;
	seconds.innerHTML = sec < 10 ? '0' + sec : sec;
}

// Show spinner before countdown
setTimeout(() => {
	loading.remove();
	countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
