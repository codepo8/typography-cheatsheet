(function(){
const setbanner = (msg, x, y) => {
	let banner = document.querySelector('#banner');
	banner.querySelector('span').innerText = msg;
	let textwidth = banner.querySelector('span').offsetWidth;
	if (x + textwidth > screen.width) { x = (screen.width - textwidth) - 50;}
	banner.style.top = y + "px";
	banner.style.left = x + "px";
}
const seteventhandlers = () => {
	let elements = document.querySelector('#elements');
	elements.addEventListener('click', handleselect);
}
const handleselect = (ev) => {
	if (['path','polygon','g'].indexOf(ev.target.nodeName.toLowerCase()) !== -1){
		setbanner((information[ev.target.id]), ev.pageX, ev.pageY);
		ev.preventDefault();
	}
};
const init = () => {
	seteventhandlers();
}
init();
})();