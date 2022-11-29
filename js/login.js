$(function(){
    $('.user').click(function(){
        $('.userinputbox').show();
        $('.noninputbox').hide();
    });

    $('.nonu').click(function(){
        $('.userinputbox').hide();
        $('.noninputbox').show();
    });
});

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