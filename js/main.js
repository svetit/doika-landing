function calculateIndicators () {
    var carouselItems = $('ol.carousel-indicators li');
    var active_index = $('ol li.active').index();

    if((carouselItems.length - active_index) == 2)
      $('.history__navigation_next').addClass("disabled");

    carouselItems.each(function(index, el) {
        if(((active_index - index) <= 1) && ((active_index - index) >= -1))
            $( this ).css("display", "block");
        else {
          $( this ).css("display", "none");
        }

    });
    return active_index;
}

function replaceLinksOnMobile () {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $(".certification .button").attr("href", "mailto:falanster.by@gmail.com");
  }
}

document.addEventListener("DOMContentLoaded", calculateIndicators);
document.addEventListener("DOMContentLoaded", replaceLinksOnMobile);

$(document).ready(function () {



        $(window).scroll(function () {
          if ($(window).width() >= 1024) {
            if ($(window).scrollTop() == 0) {
              $('.navbar').css('background-color', 'rgba(128, 128, 128, 1)');
            } else {
              $('.navbar').css('background-color', 'rgba(128, 128, 128, 0.5)');
            }
          }
        });

      $('#links__dropdown-button').click(function() {
        $('#links__dropdown-content a').toggleClass("links__show");
      });



     window.onclick = function(event) {
      if (!event.target.matches('.links__dropbtn')) {
        var dropdowns = document.getElementsByClassName("links__dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.remove('links__show');
        }
      }
    }



    $('.history__navigation_prev').on("click",function(e) {

      e.stopPropagation();

       $('#history__carousel').carousel('prev');

       var active_index = calculateIndicators();

      if(active_index == 1) {
        $(this).addClass('disabled');
        return false;
      }
      else {
        $('.history__navigation_next').removeClass('disabled');
      }
      return false;
    });

    $('.history__navigation_next').click(function(e) {
       e.stopPropagation();
       $('#history__carousel').carousel('next');

       var active_index = calculateIndicators();

      if(active_index == ($('ol.carousel-indicators li').length - 2)) {
        $(this).addClass('disabled');
        return false;
      }
      else {
        $('.history__navigation_prev').removeClass('disabled');
      }

      return false;
    });

    $('.nav-item a.nav-link').click(function() {
        if($('#navbarNav').hasClass('show')){
            $('#navbarNav').removeClass('show');
        }
    });

    $('a.nav-link[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
        if (target.length) {
          var top = target.offset().top;
          event.preventDefault();
          if($(window).width() < 1024)
            top = top - 50;

          $('html, body').animate({
            scrollTop: top
          }, 1000, function() {
          });
        }
      }
    });

	$(function () {
        var backTopElem = document.createElement('div');
        backTopElem.className = "back-top";
        document.body.appendChild(backTopElem);
        $(".back-top").hide();

		$(window).scroll(function () {
			if ($(this).scrollTop() > 1000) {
				$('.back-top').fadeIn();
			} else {
				$('.back-top').fadeOut();
			}
		});

		$('.back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});