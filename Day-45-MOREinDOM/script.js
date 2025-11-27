// Progress bar demo: pick a random percent when the button is clicked

const btn = document.getElementById('randomize');
const inner = document.querySelector('.inner');

if (btn && inner) {
	btn.addEventListener('click', () => {
		// pick a random value 0..100
		const percent = Math.floor(Math.random() * 101);
		inner.style.width = percent + '%';
		// show the percentage inside the progress bar
		inner.textContent = percent + '%';
	});
} else {
	// helpful message for debugging if elements are missing
	console.warn('randomize button or .inner element not found in DOM');
}

