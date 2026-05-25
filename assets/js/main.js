;(function($){

$(document).ready(function(){

//========== HEADER ACTIVE STRATS ============= //
if ($("#header").length > 0) {
$(window).on("scroll", function (event) {
  var scroll = $(window).scrollTop();
  if (scroll < 1) {
  $(".header-area").removeClass("sticky");
  } else {
  $(".header-area").addClass("sticky");
  }
  });
}
//========== HEADER ACTIVE ENDS ============= //

//========== PAGE PROGRESS STARTS ============= // 
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition =
  "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
//========== PAGE PROGRESS ENDS ============= // 

//========== VIDEO POPUP STARTS ============= //
   if ($(".popup-youtube").length > 0) {
    $(".popup-youtube").magnificPopup({
    type: "iframe",
    });
    }
//========== VIDEO POPUP ENDS ============= //

//========== AOS AREA ============= //
AOS.init;
AOS.init({disable: 'mobile'});
//========== AOS AREA ============= //

//========== NICE SELECT ============= //
$('select').niceSelect();
//========== NICE SELECT ============= //

//========== GALLERY IMAGE ============= //
$('.cs_hover_active').hover(function () {
  $(this).addClass('active').siblings().removeClass('active');
  });
});
//========== COUNTER UP ============= //
const ucounter = $('.counter');
if (ucounter.length > 0) {
 ucounter.countUp();  
};
//========== COUNTER UP ============= //

//========== TOGGLE ============= //
$("#ce-toggle").click(function (event) {
  $(".plan-toggle-wrap").toggleClass("active");
});

$("#ce-toggle").change(function () {
  if ($(this).is(":checked")) {
    $(".tab-content #yearly").hide();
    $(".tab-content #monthly").show();
  } else {
    $(".tab-content #yearly").show();
    $(".tab-content #monthly").hide();
  }
});
//========== TOGGLE ============= //

//========== TESTIMONIAL AREA ============= //
// testimonial //
$('.service-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:1,
      }
  }
});

// testimonial //
$('.service-slider-area2').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  items:10,
  autoplay:true,
  rtl:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:1,
      }
  }
});

// testimonial //
$('.testimonial-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  center:true,
  items:30,
  autoplay:true,
  smartSpeed:3000,
  autoplayTimeout:4000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// testimonial //
$('.testimonial-slider-area2').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:true,
  center:true,
  items:30,
  autoplay:true,
  rtl:true,
  smartSpeed:3000,
  autoplayTimeout:4000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// testimonial //
$('.work-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  center:true,
  dots:false,
  navText:["<i class='fa-solid fa-arrow-left'></i>" , "<i class='fa-solid fa-arrow-right'></i>"],
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});
// testimonial //
$('.work-slider-area2').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  center:true,
  dots:false,
  navText:["<i class='fa-solid fa-arrow-right'></i>" , "<i class='fa-solid fa-arrow-left'></i>"],
  items:10,
  autoplay:true,
  rtl:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// testimonial //
$('.testimonial2-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  center:true,
  dots:false,
  navText:["<i class='fa-solid fa-arrow-left'></i>" , "<i class='fa-solid fa-arrow-right'></i>"],
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
});

// testimonial //
$('.slider-nav').slick({
  slidesToShow: 4,
  infinite: true,
  centerMode: false,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  autoplay:true,
  arrows:false,
  autoplaySpeed:1500,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      }
      },
  {
    breakpoint: 1024,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    }
    },

    {
      breakpoint: 600,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
    },

    {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
    },

    {
      breakpoint: 375,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
    },

    {
      breakpoint: 320,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
    },
  ]
});

// Header slider //
  $('.slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      centerMode: true,
      arrows:false,
      dots:false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          }
          },
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        }
        },
    
        {
          breakpoint: 600,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
        },
    
        {
          breakpoint: 480,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },
    
        {
          breakpoint: 375,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },
    
        {
          breakpoint: 320,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        },
      ]
  });

// testimonial //
$('.brand-slider-area').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  center:true,
  dots:false,
  nav:false,
  items:10,
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:2,
      },
      600:{
          items:5,
      },
      1000:{
          items:7,
      }
  }
});

  // testimonial //
  $('.brand-slider-area1').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    center:true,
    dots:false,
    nav:false,
    rtl:true,
    items:10,
    autoplay:true,
    smartSpeed:2000,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:5,
        },
        1000:{
            items:7,
        }
    }
  });
  
  $(".tes2-slider-bottom").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".tes2-solider-parent",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    loop: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".tes2-solider-parent").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    loop: true,
    focusOnSelect: true,
    asNavFor: ".tes2-slider-bottom",
    infinite: true,
  });

  $(".slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider1",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    fade:true,
    loop: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".slider1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    loop: true,
    focusOnSelect: true,
    asNavFor: ".slider2",
    infinite: true,
    prevArrow: $('.testimonial-next-arrow'),
    nextArrow: $('.testimonial-prev-arrow'),
  });
//========== TESTIMONIAL AREA ============= //
  
//========== PRELOADER AREA ============= //
$(window).on("load", function (event) {
  setTimeout(function () {
    $("#ctn-preloader").fadeToggle();
  }, 200);
//========== PRELOADER AREA ============= //

//========== GSAP AREA ============= //
if ($('.text-anime-style-1').length) {
  let staggerAmount 	= 0.05,
  translateXValue = 0,
  delayValue 		= 0.5,
   animatedTextElements = document.querySelectorAll('.text-anime-style-1');

  animatedTextElements.forEach((element) => {
  let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.words, {
    duration: 1,
    delay: delayValue,
    x: 20,
    autoAlpha: 0,
    stagger: staggerAmount,
    scrollTrigger: { trigger: element, start: "top 85%" },
    });
  });
  }

  if ($('.text-anime-style-2').length) {
  let	 staggerAmount 		= 0.05,
   translateXValue	= 20,
   delayValue 		= 0.5,
   easeType 			= "power2.out",
   animatedTextElements = document.querySelectorAll('.text-anime-style-2');

  animatedTextElements.forEach((element) => {
  let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.chars, {
      duration: 1,
      delay: delayValue,
      x: translateXValue,
      autoAlpha: 0,
      stagger: staggerAmount,
      ease: easeType,
      scrollTrigger: { trigger: element, start: "top 85%"},
    });
  });
  }

  if ($('.text-anime-style-3').length) {
  let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');

  animatedTextElements.forEach((element) => {
  //Reset if needed
  if (element.animation) {
    element.animation.progress(1).kill();
    element.split.revert();
  }

  element.split = new SplitText(element, {
    type: "lines,words,chars",
    linesClass: "split-line",
  });
  gsap.set(element, { perspective: 400 });

  gsap.set(element.split.chars, {
    opacity: 0,
    x: "50",
  });

  element.animation = gsap.to(element.split.chars, {
    scrollTrigger: { trigger: element,	start: "top 90%" },
    x: "0",
    y: "0",
    rotateX: "0",
    opacity: 1,
    duration: 1,
    ease: Back.easeOut,
    stagger: 0.02,
  });
  });
  }

  // image animation //
  if($('.reveal').length)
    {gsap.registerPlugin(ScrollTrigger);
      let revealContainers=document.querySelectorAll(".reveal");
      revealContainers.forEach((container)=>{let image=container.querySelector("img");
      let tl=gsap.timeline({scrollTrigger:{trigger:container,toggleActions:"play none none none"}});
      tl.set(container,{autoAlpha:1});tl.from(container,1.5,{xPercent:-100,ease:Power2.out});
      tl.from(image,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:Power2.out});})
      ;}

});
//========== GSAP AREA ============= //

$('.hero2-section-area').ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04,
});

$('.hero3-section-area').ripples({
  resolution: 512,
  dropRadius: 15,
  perturbance: 0.04,
});

})(jQuery);


