$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('section').each(function(i) {
    // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top <= windscroll - -100) {
                $('.nav .menu__link.active').removeClass('active');
                $('.nav .menu__link').eq(i).addClass('active');
            }
        });

    } else {

        $('.nav .menu__link.active').removeClass('active');
        $('.nav .menu__link:first').addClass('active');
    }

}).scroll();