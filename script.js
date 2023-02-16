$(document).ready(function() {
    $('.header_burger_icon img').click(function() {
        $('.header_burger_icon img').toggleClass('open_menu');
        $('.header_burger_menu').toggleClass('open_menu');
        $('.header_menu').toggleClass('open_menu');
        $('.header_logo').toggleClass('open_menu');
        $('.header_menu_container').toggleClass('open_menu');
    });
});