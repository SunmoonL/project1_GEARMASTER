$(function(){
    $('.detail_tablebox').click(function(){
        $('#detail_tablebox').show();
        $('#shipping').hide();
        $('#review').hide();
        $('#inquiry_tablebox').hide();
    });

    $('.shipping').click(function(){
        $('#detail_tablebox').hide();
        $('#shipping').show();
        $('#review').hide();
        $('#inquiry_tablebox').hide();
    });

    $('.review').click(function(){
        $('#detail_tablebox').hide();
        $('#shipping').hide();
        $('#review').show();
        $('#inquiry_tablebox').hide();
    });

    $('.inquiry_tablebox').click(function(){
        $('#detail_tablebox').hide();
        $('#shipping').hide();
        $('#review').hide();
        $('#inquiry_tablebox').show();
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