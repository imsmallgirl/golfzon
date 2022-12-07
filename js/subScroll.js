const mediaQuery = matchMedia("screen and (max-width : 1024px)")

const changeMedia = (event) => {
    if(event.matches){
        var lastScrollTop = 0;
 
        $(window).scroll(function(){
        
            let subScrollTop = $(this).scrollTop(); //현재 스크롤값
            var headerHeight = $("header").height(); //header 높이값 
            
            if(subScrollTop >= headerHeight) { 
                if ((subScrollTop > lastScrollTop) && (lastScrollTop>0)) { 
                    $("header").addClass("header-up");
                } else {
                    $("header").removeClass("header-up");
                }
                        lastScrollTop = subScrollTop;
            }
        });
    }else{
        return;
    }
}

mediaQuery.addEventListener("change",changeMedia);
changeMedia(mediaQuery)



