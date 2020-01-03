$(document).ready(function(){
    $("#add_project").on('click', function(event){
        console.log("funciona");
        var new_proj = prompt("Introduce el nombre del proyecto");
        var div_id = new_proj.replace(" ", "").toLowerCase();
        var li_id = new_proj.replace(" ", "").toLowerCase() + "_" + "but"; 
        var div = `<div id="${div_id}" class="hide"></div>`;
        var li = `<li id="${li_id}"><i class="material-icons">dashboard</i><span>${new_proj}</span></li id="add_project">`;
        $('#menu').append(li);
        $('#container').append(div);
    });
  });