$(document).ready(function(){
    $("#add_project").on('click', function(event){
        console.log("funciona");
        var div = document.createElement('div');
        $('#container').append(div);
    });
  });