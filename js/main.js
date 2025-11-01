const key = document.getElementById('key');
const keyCode = document.getElementById('keyCode');
const code = document.getElementById('code');
const type = document.getElementById('type');
const boxs = document.querySelectorAll('.box');

function animateBoxs() {
	boxs.forEach((box, i) => {
		setTimeout(() => {
			box.classList.add('show');
		}, i * 100);
	});
}

window.addEventListener('keydown', e => {
	key.textContent = e.key == ' ' ? 'Space' : e.key;
	keyCode.textContent = e.keyCode;
	code.textContent = e.code;
	type.textContent = e.type;

	const hue = Math.floor(Math.random() * 360);
	document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 40%), hsl(${(hue + 80) % 360}, 70%, 30%))`;

	boxs.forEach(box => box.classList.remove('show'));
	animateBoxs();
});
