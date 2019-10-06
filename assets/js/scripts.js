$('li.men').hover(
    function () { $('.main-menu-inner').addClass('show-menu-inner') },
    function () { $('.main-menu-inner').removeClass('show-menu-inner') }
)

$('.main-menu-inner').hover(
    function () { $('.main-menu-inner').addClass('show-menu-inner') },
    function () { $('.main-menu-inner').removeClass('show-menu-inner') }
)


$(function () {
    $('.toggle-menu').click(function(){
       $('.menu').toggleClass('display');

    });

   });

