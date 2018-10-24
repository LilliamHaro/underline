window.onload = function() {
  // chat-bot
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


// ---letters

jQuery(document).ready(function(){
  jQuery(".titleWrapper").addClass("ready");
  
jQuery(".titleWrapper h1").each(function(){
  var fullString;
  var characters = jQuery(this).text().split("");
  
  $this = jQuery(this);
  $this.empty();
  $.each(characters, function (i, el) {
      if(el == " "){el = "&nbsp;"};
  $this.append("<span>" + el + "</span");
  });
      
});
  
});
