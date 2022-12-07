$(document).ready(function(){
    $('#bottom_header li').mouseenter(function(){
      $('#sub-menu-bg').stop().slideDown(); 
      $('.sub-menu').stop().slideDown(); 
    });
    $('header'),$('#sub-menu-bg').mouseleave(function(){
      $('#sub-menu-bg').stop().slideUp(); 
      $('.sub-menu').stop().slideUp();
    });
  });
