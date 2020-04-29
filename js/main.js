$(document).ready(function(){
    $('.overOpen').mouseover(function(){
        $('.' + $(this).attr('id')).css('opacity', 1);
    })

    $(window).resize(function(){
        cakemobile();
    });

    function cakemobile(){
        if($(window).width() < 767){
            console.log('768');
            $('.cake').addClass('fixed')
        }else{
            $('.cake').removeClass('fixed');
        }
    }
    cakemobile();

    function widthwindows(){
        if($(window).width() < 767){
            var style=document.createElement("link");
            style.rel="stylesheet";
            style.type="text/css";
            style.href="https://unpkg.com/aos@2.3.1/dist/aos.css";
    
            document.head.appendChild(style);
            AOS.init();
            return;
        }else{
            var styleSheets = document.styleSheets;
            var href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
            for (var i = 0; i < styleSheets.length; i++) {
                if (styleSheets[i].href == href) {
                    styleSheets[i].disabled = true;
                    break;
                }
            }            
        }
    } 
    widthwindows();

    var s = $('.hbd');
    var pos = s.position();

    $(window).scroll(function() {

        var windowpos = $(window).scrollTop();

        if (windowpos >= pos.top) {
            $('.cake').addClass("fixed");
        } else {
            $('.cake').removeClass("fixed");
        }
    });


    // $(window).scroll(function(){
    //     // Get container scroll position
    //     // var fromTop = $(this).scrollTop() + $(window).height();
    //     // var position = $('.hbd')[0].offsetTop;

    //     // console.log( fromTop )
    //     console.log( fromTop );
    //     console.log( `position ${position}` )

    //     if(fromTop > position){
    //         $('.cake').removeClass('fixed');
    //     }else{
    //         $('.cake').addClass('fixed');
    //     }
    // }); 
});
