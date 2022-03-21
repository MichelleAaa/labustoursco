 // for the sticky nav - add background

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() == 0) {
            $('#sticky-nav').removeClass('d-background');
            $('#sticky-nav').addClass('t-background');
        } else {
            $('#sticky-nav').addClass('d-background');
            $('#sticky-nav').removeClass('t-background');
        }
    });
});