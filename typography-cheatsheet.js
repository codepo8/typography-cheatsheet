(function(){

const information = {
	'e1': 'tittle', 'e2': 'shoulder', 'e3': 'aperture', 'e4': 'stem',
	'e5': 'spur', 'e6': 'axis', 'e7': 'shoulder', 'e8': 'ascender', 'e9': 'descender',
	'e10': 'finial', 'e11': 'crossbar', 'e12': 'bowl', 'e13': 'terminal', 'e14': 'terminal', 
	'e15': 'loop', 'e16': 'link/neck', 'e17': 'ear', 'e18': 'tail', 'e19': 'crossbar',
	'e20': 'apex', 'e21': 'vertex', 'e22': 'overhang', 'e23': 'apex', 'e24': 'apex',
	'e25': 'beak', 'e26': 'joint', 'e27': 'bracket', 'e28': 'bracket', 'e29': 'crossbar',
	'e30': 'arc', 'e31': 'bilateral serif', 'e32': 'bilateral serif', 'e33': 'foot','e34': 'counter (closed)',
	'e35': 'hairline (stroke)', 'e36': 'crotch', 'e37': 'leg', 'e38': 'arm', 'e39': 'bowl',
	'e40': 'eye', 'e41': 'counter (open)', 'e42': 'arm', 'e43': 'stress', 'e44': 'serif',
	'e45': 'ligature', 'e46': 'beak', 'e47': 'spine', 'e48': 'head serif', 'e49': 'head serif'
}

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