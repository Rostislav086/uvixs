const gif = document.querySelector('.gif');

const play = (event) => {
	event.preventDefault();
	const target = event.target;
	const img = event.target.tagName.toLowerCase();

	if (img === 'img') {
		target.src = './img/animation/__3.gif';
	}
};

const stop = (event) => {
	event.preventDefault();
	const target = event.target;
	const img = event.target.tagName.toLowerCase();

	if (img === 'img') {
		target.src = './img/chat/icon-chat.png';
	}
};

gif.addEventListener('mouseover', play);
gif.addEventListener('mouseout', stop);