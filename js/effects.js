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
    
    var min = Math.abs( $( '#bio-article' ).offset().top - 180 - $( window ).scrollTop() );
    var focused = 'bio-article';
    
    $( '.article' ).each( function () {
    
        var dist = Math.abs( $( this ).offset().top - 180 - $( window ).scrollTop() );
    
        if ( dist < min ) {
            min = dist;
            focused = $( this ).attr( 'id' );
        }
    } );
    
    console.log( focused.substring( 0, focused.length - 8 ) );
    
    navigate( focused.substring( 0, focused.length - 8 ), false );

} );