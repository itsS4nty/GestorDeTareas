$(document).ready(function(){
    $("#alexa_but").on('click', function(event){
        $('#alexa').addClass('show').removeClass('hide');
        $('#whats').addClass('hide').removeClass('show');
    });
    $("#whats_but").on('click', function(event){
        $('#whats').addClass('show').removeClass('hide');
        $('#alexa').addClass('hide').removeClass('show');
    });
  });