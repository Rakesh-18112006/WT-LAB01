$(document).ready(function() {

    // Smooth scrolling for navigation links and buttons
    $('a.nav-link, a.btn-yellow').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70 // adjust for fixed navbar height
            }, 800);
        }
    });

    // Scroll reveal animation utility
    function revealElement() {
        var windowHeight = $(window).height();
        var elementVisible = 150;

        $('.reveal, .reveal-left, .reveal-right').each(function() {
            var elementTop = $(this).offset().top;
            var windowScrollTop = $(window).scrollTop();
            
            if (windowScrollTop > elementTop - windowHeight + elementVisible) {
                $(this).addClass("active");
            }
        });
    }

    // Trigger reveal checks on load
    revealElement();

    // Trigger reveal checks on scroll
    $(window).scroll(function() {
        revealElement();
        
        // Navbar styling on scroll
        if ($(window).scrollTop() > 50) {
            $('.csk-nav').css('box-shadow', '0 5px 20px rgba(0,0,0,0.8)');
        } else {
            $('.csk-nav').css('box-shadow', 'none');
        }
    });

    // --- NEW INTERACTIONS ---

    // 1. Event Handling (Hover)
    $('.interactive-hover-box').hover(
        function() {
            // Mouse Enter
            $(this).css('background-color', '#333');
            $(this).find('.hover-text').stop(true, true).slideDown(300);
        }, 
        function() {
            // Mouse Leave
            $(this).css('background-color', '#252525');
            $(this).find('.hover-text').stop(true, true).slideUp(300);
        }
    );

    // 2. Event Handling & Show/Hide element
    $('.toggle-tactic-btn').on('click', function(e) {
        e.preventDefault();
        // Toggle the visibility of the secret strategy
        $(this).siblings('.secret-tactic-content').stop(true, true).slideToggle(400);
        
        // Change button text based on state
        if ($(this).text() === 'Toggle Strategy') {
            $(this).text('Hide Strategy');
            $(this).removeClass('btn-outline-warning').addClass('btn-warning text-dark');
        } else {
            $(this).text('Toggle Strategy');
            $(this).removeClass('btn-warning text-dark').addClass('btn-outline-warning');
        }
    });

    // 3. Trigger modal using jQuery
    $('.open-modal-btn').on('click', function(e) {
        e.preventDefault();
        $('#legacyVaultModal').modal('show');
    });

    // 4. Surprise Meme Trigger
    $('#surpriseBtn').on('click', function(e) {
        e.preventDefault();
        $('#surpriseModal').modal('show');
    });

    // Initialize carousel configuration
    $('.carousel').carousel({
        interval: 3500,
        pause: "hover"
    });
});
