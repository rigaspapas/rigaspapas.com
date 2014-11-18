function detect_mobile() { 
    var user_agent = navigator.userAgent.toString();
    
    if (   user_agent.match(/Android/i)
        || user_agent.match(/webOS/i)
        || user_agent.match(/iPhone/i)
        || user_agent.match(/iPad/i)
        || user_agent.match(/iPod/i)
        || user_agent.match(/BlackBerry/i)
        || user_agent.match(/Windows Phone/i)
    ){
        return true;
    }
    return false;
}

$( document ).ready( function () {
    if ( detect_mobile() ) {
        $( 'body' ).attr( 'id' , 'mobile' );
    }
} );