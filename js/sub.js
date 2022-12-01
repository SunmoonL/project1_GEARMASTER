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

$(document).on('change',"#headset",function(){

    if($(this).val() == '제품을 선택하세요'){
        $('.totalprice').text('제품을 선택하세요.');
        $('#one').text('(총0개)');
    }

    if($(this).val() == 'VOID RGB ELITE WHITE'){
        $('.totalprice').text('159,000원');
        $('#one').text('(총1개)');
    }

    if($(this).val() == 'VOID RGB ELITE BLACK'){
        $('.totalprice').text('일시 품절입니다.');
        $('#one').text('(총0개)');
    }

    if($(this).val() == 'VOID RGB ELITE CHERRY'){
        $('.totalprice').text('159,000원');
        $('#one').text('(총1개)');
    }
});

$(function(){
    $('.selectbox div:nth-of-type(1)').click(function(){
        $('.img1').show();
        $('.img2').hide();
        $('.img3').hide();
    });

    $('.selectbox div:nth-of-type(2)').click(function(){
        $('.img1').hide();
        $('.img2').show();
        $('.img3').hide();
    });

    $('.selectbox div:nth-of-type(3)').click(function(){
        $('.img1').hide();
        $('.img2').hide();
        $('.img3').show();
    });
});