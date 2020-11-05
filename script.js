const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;

	const day = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
	const min = Math.floor(diff / 1000 / 60) % 60;
	const sec = Math.floor(diff / 1000 / 60) % 60;

	days.innerHTML = day;
	hours.innerHTML = hour < 10 ? '0' + hour : hour;
	minutes.innerHTML = min < 10 ? '0' + min : min;
	hours.innerHTML = sec < 10 ? '0' + sec : sec;
}

setInterval(updateCountdown, 1000);
