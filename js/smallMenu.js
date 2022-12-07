$(document).ready(function(){
    $('#small-menu').click(function(){
        $('#small_menus').stop().fadeToggle();
        $(this).toggleClass('xi-close');
    })
    $('#small_menu_contents li').click(function(){
        let i = $(this).index();
        $('#small_menu_contents>li>.small-sub-tit').eq(i).toggleClass('plus-menu')
        $('#small_menu_contents>li>.small-sub-tit span').eq(i).toggleClass('toggleIcons')
        $('.small_sub_menu').eq(i).stop().slideToggle();
    })
});

