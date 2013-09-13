$(document).ready( function () {
	var fontello = document.createElement('link');
	fontello.setAttribute('rel', 'stylesheet');
	fontello.setAttribute('type', 'text/css');
	fontello.setAttribute('href', 'css/fontello.css');
	document.getElementsByTagName("head")[0].appendChild( fontello );
	
	var roboto = document.createElement('link');
	roboto.setAttribute('rel', 'stylesheet');
	roboto.setAttribute('type', 'text/css');
	roboto.setAttribute('href', 'css/roboto.css');
	document.getElementsByTagName("head")[0].appendChild( roboto );
});