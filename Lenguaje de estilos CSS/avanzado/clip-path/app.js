const menu = document.getElementById('nav-icon-open');
	menu.addEventListener('click', () => {
		document.getElementById('main-container').classList.toggle('active');
	});