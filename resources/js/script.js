$(document).ready(function() {

    $('.js--section-form').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    // Mobile Nav
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        
        nav.slideToggle(500);
        
        if (icon.hasClass('<ion-icon name="reorder-four-outline"></ion-icon>')) {
            icon.addClass('<ion-icon name="close-outline"></ion-icon>');
            icon.removeClass('<ion-icon name="reorder-four-outline"></ion-icon>');
        } else {
            icon.addClass('<ion-icon name="reorder-four-outline"></ion-icon>');
            icon.removeClass('<ion-icon name="close-outline"></ion-icon>');
        }        
    });

     /* Animations on scroll */
     $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
})


//     var waypoints = $('.js--section-form').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })
// })