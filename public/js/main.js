$(document).ready(function() {

    let showNav = false;
    let showEbook = false;


    $('#menu-burger').on('click', function() {
        showNav = !showNav;
        console.log(showNav);
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
    console.log(showEbook);
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

let stickyNav = function(){
let scrollTop = $(window).scrollTop();

if (scrollTop > stickyNavTop) {
    $('.nav').addClass('sticky');
    $('.nav').addClass('animated slideInDown');
    $('.nav').removeClass('slideInUp');

    showNav = !showNav;
    if (showNav === true) {
        $('#tagNav').removeClass('hidden');
        $('#tagNav').removeClass('animated slideOutLeft');
        $('#tagNav').addClass('animated slideInLeft');
    }

} else {
    $('.nav').removeClass('sticky');
    $('.nav').removeClass('slideInDown');
    $('.nav').addClass('slideInUp');

    showNav = !showNav;
    if (showNav === false) {
        $('#tagNav').removeClass('animated slideInLeft');
        $('#tagNav').addClass('animated slideOutLeft');

    }


}
};

stickyNav();

$(window).scroll(function() {
  stickyNav();
});


});
