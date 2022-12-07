
 
 $(function(){
    let video  = $('#best-video-cards>li>.best-videos>video');

    $('#best-video-cards>li>.best-videos>button').eq(0).click(function(){
        $(this).toggleClass('xi-play-circle-o xi-pause')
        if($(this).hasClass('xi-pause')){
            video.get(0).play();
        }else{
            video.get(0).pause();
        }
        video.eq(0).bind('ended' , () => {
            $(this).removeClass('xi-pause')
            $(this).addClass('xi-play-circle-o')
        })
    });

    $('#best-video-cards>li>.best-videos>button').eq(1).click(function(){
        $(this).toggleClass('xi-play-circle-o xi-pause')
        if($(this).hasClass('xi-pause')){
            video.get(1).play();
        }else{
            video.get(1).pause();
        }
        video.eq(1).bind('ended' , () => {
            $(this).removeClass('xi-pause')
            $(this).addClass('xi-play-circle-o')
        })
    });

    $('#best-video-cards>li>.best-videos>button').eq(2).click(function(){
        $(this).toggleClass('xi-play-circle-o xi-pause')
        if($(this).hasClass('xi-pause')){
            video.get(2).play();
        }else{
            video.get(2).pause();
        }
        video.eq(2).bind('ended' , () => {
            $(this).removeClass('xi-pause')
            $(this).addClass('xi-play-circle-o')
        })
    });

    $('#best-video-cards>li>.best-videos>button').eq(3).click(function(){
        $(this).toggleClass('xi-play-circle-o xi-pause')
        if($(this).hasClass('xi-pause')){
            video.get(3).play();
        }else{
            video.get(3).pause();
        }
        video.eq(3).bind('ended' , () => {
            $(this).removeClass('xi-pause')
            $(this).addClass('xi-play-circle-o')
        })
    });

    // 여자 남자 선택 버튼

    $('#best-video-genders li').click(function(){
        $('#best-video-genders li').removeClass('gender-on')
        $(this).addClass('gender-on')

        let videoIndex = $(this).index();
        const bestVideoCards = $('.bestVideoCards')
        bestVideoCards.eq(!videoIndex).stop().fadeOut();
        bestVideoCards.eq(videoIndex).stop().fadeIn()
    });
 });
