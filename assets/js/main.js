$(document).ready(function(){

    // OWL Carousel Banner
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        animateOut:true,
        animateIn:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    // Project Show More Button
    $(".extra-works").hide();

    $(".show-more").click(function(){
        $(".extra-works").toggle();

        document.getElementById("show-less").innerHTML = "Show Less";
    });

});