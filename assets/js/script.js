
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
 
/* Tooltip */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  
/* Poppover */
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
  