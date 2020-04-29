$(document).ready(function(){
    $('.overOpen').mouseover(function(){
        $('.' + $(this).attr('id')).css('opacity', 1).addClass('active');
        if($('#cacke-grid .step').length === $('#cacke-grid .active').length){
            $('#cacke-grid .overOpen').css('pointer-events','none');
            setTimeout(function(){ 
                $('html, body').animate({ 
                    scrollTop: $('#hbd').offset().top
                }, 2000)
            }, 1000);
        };
    })

    $(window).resize(function(){
        cakemobile();
    });

    function cakemobile(){
        if($(window).width() < 767){
            $('.cake').addClass('fixed')

            var hbd = $('.hbd');
            var hbdPos = hbd.position();
        
            $(window).scroll(function() {
                var windowPos = $(window).scrollTop();
                if (windowPos > (hbdPos.top - hbd[0].offsetHeight)) {
                    $('.cake').removeClass("fixed");
                }else if (windowPos < (hbdPos.top - hbd[0].offsetHeight)) {
                    $('.cake').addClass("fixed");
                }
            });


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
});
