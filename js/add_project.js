$(document).ready(function(){
    $("#add_project").on('click', function(event){
        console.log("funciona");
        var div = '<div class="hide"></div>';
        var li = '<li id="add_project"><i class="material-icons">dashboard</i><span>Prueba</span></li id="add_project">';
        $('#menu').append(li);
        $('#container').append(div);
    });
  });