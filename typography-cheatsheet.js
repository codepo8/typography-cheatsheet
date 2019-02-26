(function(){
const setbanner = (msg, x, y) => {
	let banner = document.querySelector('#banner');
	banner.querySelector('span').innerText = msg;
	let textwidth = banner.querySelector('span').offsetWidth;
	if (x + textwidth > screen.width) { x = (screen.width - textwidth) - 50;}
	banner.style.top = y + "px";
	banner.style.left = x + "px";
}
const clearbanner = () => {
	banner.querySelector('span').innerText = '';
}
const seteventhandlers = () => {
	let elements = document.querySelector('#elements');
	let shapes = [...elements.querySelectorAll('[id^="e"]')];
	elements.addEventListener('click', handleselect);
	shapes.forEach(element => element.addEventListener('focus', handleselect));
	shapes.forEach(element => element.addEventListener('blur', clearbanner));
}
const setfocusableelements = () => {
	const elements = document.querySelectorAll('#elements [id^="e"]');
	elements.forEach(element => element.setAttribute('tabindex', 0));
}
const handleselect = (ev) => {
	const { width, height, top, left } = ev.target.getBoundingClientRect();
	if (['path','polygon','g'].indexOf(ev.target.nodeName.toLowerCase()) !== -1){
		setbanner((information[ev.target.id]), left + width, top + height);
		ev.preventDefault();
	}
};
const init = () => {
	setfocusableelements();
	seteventhandlers();
}
init();
})();