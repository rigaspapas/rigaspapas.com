var dirtyScrolling = false;

/* Function that makes the correct element to fade in and the others to fade out */
function navigate ( goal , easing ) {
	var menuItem = '#nav-' + goal,
		elementToFocus = '#' + goal + '-article';

	window.location.hash = goal;
	$( '#navigator li, article' ).removeClass( 'selected' );
	$( menuItem + ',' + elementToFocus ).addClass( 'selected' );

	if ( easing === false )
		return false;

	dirtyScrolling = true;

	$( '#content' ).stop().animate( {
			scrollTop: $( elementToFocus ).prev().outerHeight() + $( elementToFocus ).prev().prev().outerHeight() + 'px'
		},
		easing,
		function () {
			dirtyScrolling = false;
		}
	);
	return true;
}

function autoFocus() {
	// Don't auto-focus anywhere if the scroll is caused by a navigator button click
	if ( dirtyScrolling )
		return;

	var min = 1000000;
	var focused = 'bio-article';
	var line = $( '#content' ).height() / 2;
	// Check all articles to find the focused one
	$( 'article' ).each( function () {
		var start = $( this ).offset().top;
		var end = start + $( this ).height();
		// Line of reading inside an article
		if ( line - start > 0 && line - end < 0) {
			focused = $( this ).attr( 'id' );
			min = 0;
		}
		// Line of reading almost on top of article
		else if ( line - start < min && line - start > 0 ) {
			focused = $( this ).attr( 'id' );
			min = line - start;
		}
	} );
	// Navigate to the currently focused element
	navigate( focused.substring( 0, focused.length - 8 ), false );
}

$( document ).ready( function () {
	$( '#nav-bio , #bio-article' ).click( function () { navigate( 'bio' , 1000 ) });
	$( '#nav-work , #work-article' ).click( function () { navigate( 'work' , 1000 ) });
	$( '#nav-contact , #contact-article' ).click( function () { navigate( 'contact' , 1000 ) });

	// On-load focus on the hashed element
	if ( window.location.hash.length > 1 ) {
		$( '#navigator li' ).each( function(){
			var dest = $( this ).attr( 'id' ).substring( 4 );
			if ( '#' + dest == window.location.hash )
				navigate( dest , 50 );
		} );
	}
} );

$( window ).on( 'resize', autoFocus );
$( '#content' ).on( 'scroll', autoFocus );
