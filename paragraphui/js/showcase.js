$( document ).ready( function () {
    
    $("a.nav").click( function( event ) {
        event.preventDefault();
        
        var goalId = $( this ).attr('href');
        
        var selected = $( '#examples .paragraph.selected' );
        
        if ( '#' + selected.attr( 'id' ) == goalId )
            return;
            
        selected.removeAttr( 'style' ).removeClass( 'selected' );
        
        $( goalId ).insertBefore( $('#examples .paragraph').first() );
        $( goalId ).fadeIn( 500 ).addClass( 'selected' );
            
        /* Navigator images effects */
        $( 'a.nav.selected img.example' ).animate( {'top' : '-8em'} , 150 ).removeClass( 'selected' );
        
        $( this ).find( 'img.example' ).animate( {'top' : '0em'} , 200 );
        $( this ).addClass( 'selected' );
    } );
    
} );