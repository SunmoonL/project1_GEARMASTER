
$(function(){
    $('nav').mouseover(function(){
        $('.list').slideDown();
    });

    $('.list').mouseover(function(){
        $('.list').show();
    });

    
     $('.list').mouseout(function(){
         $('.list').hide();
    });
});
