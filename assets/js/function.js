

 
  
//image lazy load
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});



$('.username-left-btn').click(function(){
  $('.popup-register-wrapper').fadeIn();
});


$('.connect-wallet-btn').click(function(){
  $('.popup-lootbox-wrapper').fadeIn();
});


    $('.gameBtn').click(function(){
      $('.dropGameMobil').slideToggle();
      $('.dropBuyMobil').slideUp();
    });

    $('.buyBtnMobil').click(function(){
      $('.dropBuyMobil').slideToggle();
      $('.dropGameMobil').slideUp();
    });

    $('.navHeaderMobil a').click(function(){
      if($(this).hasClass('gameBtn')) {
        return false;
      }
      if($(this).hasClass('buyBtnMobil')) {
        return false;
      }
      $('.menu-icon').trigger('click');
    });

    

$('.menu-icon').click(function(){
		$(this).toggleClass('active');
		$('.navHeaderMobil').fadeToggle();
		$('html').toggleClass('activeScroll');
	});

    $('.chooseYourSide .tabArea .btns a.link1_2').hover(function(e){
      e.preventDefault();
      $('.tabContentChoose.tab1').slideUp();
      $('.tabContentChoose.tab2').slideToggle();
      
    },function(){
      $('.tabContentChoose.tab1').slideUp();
      $('.tabContentChoose.tab2').slideToggle();
    });

    $('.chooseYourSide .tabArea .btns a.link1_1').hover(function(e){
      e.preventDefault();
      $('.tabContentChoose.tab2').slideUp();
      $('.tabContentChoose.tab1').slideToggle();
      
    },function(){
      $('.tabContentChoose.tab2').slideUp();
      $('.tabContentChoose.tab1').slideToggle();
    });

    $('.partner_planet').parallax();
    $('.pl').parallax();
    $('.partner_rocks').parallax();

  $(function() {
      $( ".uruntabs" ).tabs();
    });


  const swiper = new Swiper('.element-carousel', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView:5,
    spaceBetween: 0,
    loop:false,
    breakpoints: {
      // when window width is >= 640px
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
      }
    },
    centeredSlides: false,
    autoplay: {
         delay: 2500000,
         disableOnInteraction: false,
       },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  $(function () {
    new WOW().init();
    // mouse effect
    $('#parallax').parallax();
    $('#parallax2').parallax();
    $('#parallax3').parallax();
    $('.distribute-click div').click(function(){
      $('.tabContent').removeClass('active');
      var index = $(this).index();
      $('.distribute-click div').removeClass('active');
      $(this).addClass('active');
      $('.tabContent:eq( '+ index +')').addClass('active');
    });
  });




  
 const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "playtoearn",
    "decentralized",
    "metaverse"
];

const morphTime = 1;
const cooldownTime = 0.55;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();


if($(window).width()>1680){
    document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x',(e.clientX) - 550 +'px');
    document.documentElement.style.setProperty('--y',(e.clientY) - 400 +'px' );
    }
}
else{
  document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x',(e.clientX) - 300 +'px');
    document.documentElement.style.setProperty('--y',(e.clientY) - 300 +'px' );
  }
}


window.addEventListener('resize', function(event) {
  if($(window).width()>1680){
    document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x',(e.clientX) - 550 +'px');
    document.documentElement.style.setProperty('--y',(e.clientY) - 400 +'px' );
    }
}
else{
  document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x',(e.clientX) - 300 +'px');
    document.documentElement.style.setProperty('--y',(e.clientY) - 300 +'px' );
  }
}
}, true);

  
///scrollbar animate
$(window).on("scroll", function () {


var scrollTop = $(window).scrollTop();
var $root = $("html, body");

if (scrollTop > $(".slideAnimation").offset().top / 3) {
  if($(window).width()>1024){
      document.body.onmousemove = function(e) {
      document.documentElement.style.setProperty('--x',(e.clientX) + 0 +'px');
      document.documentElement.style.setProperty('--y',(e.clientY) + 0 +'px' );
      }
  }
}
else{
  if($(window).width()>=1680){
      document.body.onmousemove = function(e) {
        document.documentElement.style.setProperty('--x',(e.clientX) - 550 +'px');
        document.documentElement.style.setProperty('--y',(e.clientY) - 400 +'px' );
      }
   }
   else{
  document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x',(e.clientX) - 300 +'px');
    document.documentElement.style.setProperty('--y',(e.clientY) - 300 +'px' );
  }
}
}


if (scrollTop > $(".gameExperience").offset().top + 0 ) {
  $('.gameExperience').addClass('activeSection');
} 
else {
  $('.gameExperience').removeClass('activeSection');
}


if (scrollTop > $(".gameExperience").offset().top - 50 ) {
  $('.gameExperience').addClass('activeSection2');
} 
else {
  $('.gameExperience').removeClass('activeSection2');
}


if (scrollTop > $(".gameExperience").offset().top + $(".gameExperience").height() / 1.2 - 300 ) {
  $('.gameExperience').addClass('activeSection2Hide');
  $('.galaxyVolume').addClass('showGalaxy');
} 
else {
  $('.gameExperience').removeClass('activeSection2Hide');
  $('.galaxyVolume').removeClass('showGalaxy');
}




if (scrollTop > $(".worldSection").offset().top + $(".worldSection").height() / 5 - 150) {
  $('.numsWrapperArea').addClass('activeRight');
} else {
  $('.numsWrapperArea').removeClass('activeRight');
}



if($(window).width() >= 1600){
  if (scrollTop > $(".worldSection").offset().top  / 2 +  1000  ) {
  $(".world-bg").addClass("active");
}
else if (scrollTop < $(".worldSection").height() ) {
  $(".world-bg").removeClass("active");
  
}

}

if (scrollTop > $(".worldSection").offset().top / 2 - 100 ) {
  $(".world-bg").addClass("active");
}
else if (scrollTop < $(".worldSection").height() ) {
  $(".world-bg").removeClass("active");
  
}




if (scrollTop > $(".worldSection").offset().top - $(".worldSection img").height() / 5 + 0) {
  $(".astronot").addClass("active");
} else {
  $(".astronot").removeClass("active");
}

if (scrollTop > $(".worldSection").offset().top - $(".worldSection img").height() / 5 + 0) {
  $(".shapeBottom").addClass("active");
} else {
  $(".shapeBottom").removeClass("active");
}


if (scrollTop > $(".worldSection").offset().top - $(".worldSection img").height() / 5 + 0) {
  $(".scene5_in").addClass("active");
} else {
  $(".scene5_in").removeClass("active");
}


if (scrollTop > $(".basicLines").offset().top - $(".worldSection").height() / 2.6) {
  $(".worldSection").addClass("activeContent");
  $(".world-bg").addClass("world-bgHide");
  $('.basicLines').addClass('showSection');

} else {
  $(".worldSection").removeClass("activeContent");
  $(".world-bg").removeClass("world-bgHide");
  $('.basicLines').removeClass('showSection');
}

$('#menu-center ul li').removeClass('active2');
});




    setInterval(function () {
        setRandomClass();
    }, 800);
    function setRandomClass() {
        var teamList = $('.hoverContainer');
        var teamItem = teamList.find('.hoverItem');
        var number = teamItem.length;
        var random = Math.floor((Math.random() * number));
        if (teamItem.eq(random).hasClass('active')) {
            var random = random + 1
        }
        $('.hoverContainer .active').addClass('active_old')
            .siblings().removeClass('active_old');
        teamItem.eq(random).addClass('active')
            .siblings().removeClass('active');
    }


    $('#menu-center ul li').click(function(){
        setTimeout(() => {
          $('#menu-center ul li').removeClass('active2');
          $(this).addClass('active2');
        }, 1500);

    });


    // scroll click

$(document).ready(function () {


  $(document).on("scroll", onScroll);
  

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    if($(this).hasClass('ui-tabs-anchor')) {
      return false;
    }
      e.preventDefault();
      $(document).off("scroll");
      
      // $('a').each(function () {
      //     $(this).removeClass('active');
      // })
      // $('#menu-center ul li a').removeClass("active");
      

      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top 
      }, 200, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
          $('#menu-center ul li').removeClass('active');

      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos ) {
          $('#menu-center ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");

      }
  });
}


$('.team').click(function(){
$("html, body").animate({ scrollTop: $(".staff").offset().top - $('.swiper-slide').height() }, 0);
});

$(".accorTitle").click(function () {
  $("div.accorContent").slideUp(300);
  $(this).next("div").slideToggle(300);
  $(".accorTitle").removeClass('accordionActive');
  $(this).toggleClass("accordionActive");
});


$('.swiper-button-prev2').click(function(){
$('.swiper-button-prev').trigger('click');
$(this).hide();
$('.swiper-button-next2').fadeIn();
});

$('.swiper-button-next2').click(function(){
$('.swiper-button-next2').hide();
$('.swiper-button-next').trigger('click');
$('.swiper-button-prev2').show();

});

$('.popup').show()
$('.popupBgHome').show()

$('.popup .close, .popupBgHome').click(function(){
  $.cookie('userId', 'userId', { expires: 2 });
  $('.popup').fadeOut();
  $('.popupBgHome').fadeOut();
});

if ($.cookie('userId')) {
  $('.popup, .popupBgHome').remove();
}

