// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration:10000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

$('#stories_slides').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:'9000',
    autoplaySpeed:'1000',
    dotsSpeed:'1000',
    dragEndSpeed:'1000',
    autoplayHoverPause:false,
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

//footer part mobile
jQuery(document).ready(function(){
    var winWidth = jQuery(window).width();
    if(winWidth<768){
      //var footer_bottom_menuhtml = jQuery(".footer_bottom_menu").html();
      //footer_bottom_menuhtml
      jQuery("footer address").after(jQuery("footer .footer_social_icon"));
    }
  });
  //footer part mobile
  

jQuery(document).ready(function(){
    AOS.init({
        disable: function() {
          var maxWidth = 800;
          return window.innerWidth < maxWidth;
        }
      });
});
jQuery( document ).ready(function() {
    const element = document.querySelector('.timeline1');
    const observer = new IntersectionObserver(entries => {
        // element.classList.toggle( 'animation1', entries[0].isIntersecting );
        console.log("intersecting")
        if(entries[0].isIntersecting){
            var connecter_1_timeline = gsap.timeline({repeat : 0 , repeatDelay : 1})
            connecter_1_timeline.to(".timeline1",{
                height:"320px",
                width:"3px",
                bottom:0,
                duration : 0.5,
            })
            connecter_1_timeline.to(".timeline1",{
                height:"320px",
                width:"105px",
                bottom:"-260px",
                duration : 2,
            })

            gsap.from(".timeline-item-two",{opacity : 0})
            gsap.to(".timeline-item-two",{opacity : 1, duration : 3, delay : 2})
        }else{
            console.log("Not intersecting")
            gsap.to(".timeline1" , {
                height:"0px",
                width:"3px",
                bottom:0,
                duration : 0.1
            })
            gsap.to(".timeline-item-two",{opacity : 0,duration : 0.1})
        }

        
        
    });
    observer.observe( element );
});

jQuery( document ).ready(function() {
    const element = document.querySelector('.timeline2');
    const observer = new IntersectionObserver(entries => {
        // element.classList.toggle( 'animation2', entries[0].isIntersecting );
        if(entries[0].isIntersecting){
            var connecter_2_timeline = gsap.timeline({repeat : 0 , repeatDelay : 1})
            connecter_2_timeline.to(".timeline2",{
                height:"320px",
                width:"0px",
                left:"397px",
                duration : 0.5,
            })
            connecter_2_timeline.to(".timeline2",{
                height:"320px",
                width:"75px",
                bottom:"-240px",
                left:"318px",
                duration : 2,
            })

            gsap.from(".timeline-item-three",{opacity : 0})
            gsap.to(".timeline-item-three",{opacity : 1, duration : 3, delay : 2})
        }else{
            console.log("Not intersecting")
            gsap.to(".timeline2" , {
                height:"0px",
                width:"0px",
                bottom:0,
                left:"397px",
                duration : 0.1
            })
            gsap.to(".timeline-item-three",{opacity : 0,duration : 0.1})
        }
    });
    observer.observe( element );
});
jQuery( document ).ready(function() {
    jQuery(function() {
        jQuery('.lazy-ban-d').Lazy({
            effect:'fadeIn',
            visibleOnly:true,
            placeholder:"assets/image/slider1-small.jpg",
        });
        jQuery('.lazy-ban-m').Lazy({
            effect:'fadeIn',
            visibleOnly:true,
            placeholder:"assets/image/slider-mobile-small.jpg",
        });
        jQuery('.lazy-ban-d2').Lazy({
            effect:'fadeIn',
            visibleOnly:true,
            placeholder:"assets/image/slider2-small.jpg",
        });
        jQuery('.lazy-ban-m2').Lazy({
            effect:'fadeIn',
            visibleOnly:true,
            placeholder:"assets/image/slider2-mobile-small.jpg",
        });
        jQuery('.lazy').Lazy({
            effect:'fadeIn',
            visibleOnly:true,
            placeholder:"assets/image/loader.gif",
        });
    });
});





