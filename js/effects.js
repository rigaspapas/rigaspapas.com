var dirtyScrolling = false;

function detect_mobile() { 
	var user_agent = navigator.userAgent.toString();
	
	if(user_agent.match(/Android/i)
	|| user_agent.match(/webOS/i)
	|| user_agent.match(/iPhone/i)
	|| user_agent.match(/iPad/i)
	|| user_agent.match(/iPod/i)
	|| user_agent.match(/BlackBerry/i)
	|| user_agent.match(/Windows Phone/i)
	)
		return true;
	else
		return false;
}

/* Function that makes the correct element to fade in and the others to fade out */
function navigate ( goal , easing ) {
	
	var menuItem = '#nav-' + goal,
		elementToFocus = '#' + goal + '-article';
	
	$( '#navigator li, .article' ).removeClass( 'selected' );
	$( menuItem + ',' + elementToFocus ).addClass( 'selected' );
	
	if ( easing === false )
		return false;
	
	dirtyScrolling = true;
	
	$( 'html, body' ).stop().animate( {
			scrollTop: $( elementToFocus ).offset().top - $( '#header' ).height() + 'px'
		},
		easing,
		function () {
			dirtyScrolling = false;
		}
	);
	
	return true;
}

$( document ).ready( function () {
	
	if ( detect_mobile() )
		$( 'body' ).attr( 'id', 'mobile' );

	$( '#nav-bio , #bio-article' ).click( function () { navigate( 'bio' , 1000 ) });
	$( '#nav-work , #work-article' ).click( function () { navigate( 'work' , 1000 ) });
	$( '#nav-contact , #contact-article' ).click( function () { navigate( 'contact' , 1000 ) });
	
	/* Hide the elements we don't want to be shown */
	var page = window.location.hash.substring(1);
	if ( ( page != 'work' ) && ( page != 'contact' ) ) page = "bio";
	
	navigate( page , 300 );
	
	var hash = location.hash;
	
	/* We check periodically if the hash has the changed in order to navigate dynamically */
	setInterval( function() {
		if ( location.hash != hash ) {
			hash = location.hash;
			
			$( '#navigator li' ).each( function(){
				var dest = $( this ).attr( 'id' ).substring( 4 );
				
				if ( '#' + dest == hash )
					navigate( dest , 500 );
			} );
		}
	}, 100 );
} );

$( window ).on( 'resize scroll', function () {

	if ( dirtyScrolling )
		return;
	
	var min = 1000;
	var focused = 'bio-article';
	var line = $( window ).scrollTop() + $( window ).height() / 2;
	
	$( '.article' ).each( function () {
	
		var start = $( this ).offset().top;
		var end   = start + $( this ).height();
	
		if ( line - start < min && line - start > 0 ) {
			min = line-start;
			focused = $( this ).attr( 'id' );
		}
	} );
	
	navigate( focused.substring( 0, focused.length - 8 ), false );

} );