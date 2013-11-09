/* Function that makes the correct element to fade in and the others to fade out */
function navigate ( goal , easing ) {
	var menuItem = "#nav-" + goal;
	$("#navigator li").removeClass("selected");
	$(menuItem).addClass("selected");
		
	var elementToFocus = '#' + goal + '-element';
	$(".column").removeClass("selected");
	$(elementToFocus).addClass("selected");
	
    var movePosition = 0-$(elementToFocus).position().left;
	$("#content").stop().animate({'left':movePosition} , easing )
	
    if (goal == 'work')
        $('.headerGradient').removeClass('green').addClass('blue');
    
    else if (goal == 'contact')
        $('.headerGradient').removeClass('blue').addClass('green');
        
    else
        $('.headerGradient').removeClass('blue green');
    
    return;
}


$(document).ready( function () {
	$("#work-element h3").click( function () {
		$(this).toggleClass("opened").next("div.work-cont").slideToggle( 400 );
	});
	
	$("#nav-bio , #bio-element").click( function () { navigate( "bio" , 1000) });
	$("#nav-work , #work-element").click( function () { navigate( "work" , 1000) });
	$("#nav-contact , #contact-element").click( function () { navigate( "contact" , 1000) });
	
	/* Hide the elements we don't want to be shown */
	var page = window.location.hash.substring(1);
	if ((page != "work") && (page != "contact")) page = "bio";
	navigate( page , 300);
	
	handleOverflow();
	
	var hash = location.hash;
	
    /* We check periodically if the hash has the changed in order to navigate dynamically */
	setInterval( function() {
		if (location.hash != hash) {
			hash = location.hash;
			$('#navigator li').each(function(){
				var dest = $(this).attr("id").substring(4);
				if ( "#"+dest == hash )
					navigate( dest , 500 );
			});
		}
	}, 100);
} );

function handleOverflow() {
	if ( $(window).width() > 600 )
		$("body").css({'overflow-x':'hidden'});
	else
		$("body").css({'overflow-x':'auto'});
        
    var w = $( window ).width();
    
    if ( w > 550 )
        $( '#contentWrapper' ).css({
            'width' : w + 'px',
            'overflow' : 'hidden'
        });
}

$( window ).resize( function () {
	handleOverflow();
    /* Recover the focused element and re-focus on it */
	var focused = $('#navigator li[class="selected"]').attr("id");
	navigate( focused.substring(4) , 500 );
});