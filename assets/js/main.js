$(function () {
    // header active 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }

        //show go to top button on sctoll
        if($(window).scrollTop() >= 400){
            $('.gotop').removeClass('active');
        }
        else{
            $('.gotop').addClass('active');


        }
 
});
         // ----scrool top  button
         $(window).each(function () {

         $('.gotop').each(function() {
            $(this).click(function () {
                $('html,body').animate({
                    scrollTop:0
                },1000);
            });
        });
    });

// small nav menu button
    $(window).ready(function () {
        $('.small_screen_nav_button').click(function () {
            $('nav').addClass('active');
        });
        $('.nav_li_close').click(function () {
            $('nav').removeClass('active');
        });
    });
  //nav item add class active
    $("header nav ul li a").click(function (e) {

        $(this).addClass('active');
        $('nav ul li ').find('a').not(this).removeClass('active');

    });
    $("header nav ul li a").click(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        });
    });

    //animate scroll

    $(document).on('click', 'nav li a[href^="#"]', function (e) {

        var target = $(this.getAttribute('href'));

        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });


    
});


