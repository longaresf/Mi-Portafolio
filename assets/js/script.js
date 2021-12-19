
  $(document).ready(function(){
    $("#experiencia").click(function(){
        $(".fab").toggle();
        $(".fas").toggle();
        $("h4").toggle();
    });
  });

 
  $( "#trabajos" ).click(function() {
    $( ".card" ).fadeOut( 2000, function() {
      $( ".card" ).fadeIn( 4000 );
    });
    return false;
  });
 