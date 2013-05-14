WebFontConfig = {
		google: { families: [ 'Lato:300,400,700,900:latin', 'Open+Sans+Condensed:300,700:latin' ] }
	};
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();
	
$(document).ready( function () {
	var fontello = document.createElement('link');
	fontello.setAttribute('rel', 'stylesheet');
	fontello.setAttribute('type', 'text/css');
	fontello.setAttribute('href', 'css/fontello.css');
	document.getElementsByTagName("head")[0].appendChild( fontello );
});