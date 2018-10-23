window.onload = function() {
  $("form button").on("click", function(event) {
    event.preventDefault();
    var texto = $("form input").val();
    var prueba = "rojo";
    if (texto.indexOf(prueba) > -1) {
      console.log("rojo eh?");
    } else {
      console.log("khé");
    }
  });
};
