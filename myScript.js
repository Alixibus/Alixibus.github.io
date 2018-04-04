$('.enter_link').click(function () {
    $('#splashscreen').fadeOut(500);
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var height = $(window).height();
        $('#splashscreen').css({'opacity':(( height-scroll )/height)});        
});