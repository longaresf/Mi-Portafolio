
  $(document).ready(function(){
    $("#enviarCorreo").click(function(){
      alert("El correo fue enviado correctamente...");
    });
  });

  $(document).ready(function(){
    $("u").on("dblclick", function(){
        $(this).css("color", "red");
    });
  });

  $(document).ready(function(){
    $("h5").click(function(){
        $(".img1").toggle();
        $(".text1").toggle();
    });
  });

