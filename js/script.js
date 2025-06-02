window.onload = function () {
	const mobileMenu = document.getElementById('mobile-menu')
	const navList = document.querySelector('.nav__list')
	const iconMenu = document.querySelector('.icon-menu')

	mobileMenu.addEventListener('click', () => {
		navList.classList.toggle('active')
		iconMenu.classList.toggle('active')
	})
}
