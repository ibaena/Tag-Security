$(document).ready(function() {

    let showNav = false;
    let showEbook = false;


    $('#menu-burger').on('click', function() {

        showNav = !showNav;

        if (showNav === true) {
            $('#tagNav').removeClass('hidden');
            $('#tagNav').removeClass('animated slideOutLeft');
            $('#tagNav').addClass('animated slideInLeft');
        } else {
            $('#tagNav').removeClass('animated slideInLeft');
            $('#tagNav').addClass('animated slideOutLeft');

        }

    });

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    //SHow ebook
    $('#showEbook').on('click', function() {
        showEbook = !showEbook;

        if (showEbook === true) {
            $('.pop-out').removeClass('hidden');
            $('#showEbook').removeClass('fa-arrow-circle-o-left');
            $('.pop-out').removeClass('animated slideOutRight');
            $('#showEbook').addClass('fa-times');
            $('.pop-out').addClass('animated slideInRight');
        } else {
            $('.pop-out').removeClass('animated slideInRight');
            $('#showEbook').removeClass('fa-times');
            $('#showEbook').addClass('fa-arrow-circle-o-left');
            $('.pop-out').addClass('animated slideOutRight');

        }
    });

    //Sticky Nav on scroll
    let stickyNavTop = $('#header-title').offset().top;

    let stickyNav = function() {

        let scrollTop = $(window).scrollTop();
        let fired = true;

        if (scrollTop > stickyNavTop && fired === true) {
        console.log('Hey im greater scrolltop');
            $('.nav').addClass('sticky');
            $('.nav').addClass('animated slideInDown');
            $('.nav').removeClass('slideInUp');

            showNav = true;

            if (showNav === true ) {
                //links
                $('#tagNav').removeClass('hidden');
                $('#tagNav').removeClass('animated fadeOut');
                $('#tagNav').addClass('animated slideInLeft');
                //menu-burger
                $('#menu-burger').removeClass('fadeIn');
                $('#menu-burger').addClass('animated fadeOut');
            }
            fired = false;
        } else if (scrollTop < stickyNavTop){
            console.log(fired)
            $('.nav').removeClass('sticky');
            $('.nav').removeClass('slideInDown');
            $('.nav').addClass('slideInUp');

            showNav = false;
            if (showNav === false) {
                $('#tagNav').removeClass('animated slideInLeft');
                $('#tagNav').addClass('animated fadeOut');

                //menu-burger
                $('#menu-burger').removeClass('fadeOut');
                $('#menu-burger').addClass('fadeIn');

            }


        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

    /*let launchSite = function() {
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $('#header-title').offset().top
            }, 1800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = '#why-exist-block';
            });
        })
    };

    setTimeout(launchSite, 5000);*/

});
