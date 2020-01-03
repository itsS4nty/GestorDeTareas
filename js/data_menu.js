$(document).ready(function(){
    var clicked_li;
    $('ul').on('click', 'li', function(){
        clicked_li = $(this).attr('id'); 
    });
    $('#add_project').on('click', function(){
        console.log(clicked_li);
    })
  });