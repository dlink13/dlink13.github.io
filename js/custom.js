
$(document).ready(function() { 

	$(".popup").magnificPopup();


	//Animated scrolling		   
	$('ul.mainmenu a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('ul.mainmenu li').removeClass('active');
				$(this).parent('li').addClass('active');
				var targetOffset = $target.offset().top-200;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});

	// Scroll Down Link
	$('.scrolldown').click(function() {
		var targetOffset = $('div.blockquote').offset().top-100;
		$('html,body').animate({scrollTop: targetOffset}, 1000);
	});

	// Menu Scroll Hide
	var nav = $('.menubar');
	var scroll = $('.menubar').attr('data-scroll');
	$(function(){
		$('.menubar').data('size','big');
		if (scroll == 'false') {
			nav.css({
				marginTop:'0px'
			});
		};
	});
	$(window).scroll(function(){
		if ($('body').scrollTop() > 0 && scroll == 'true') {
			if (nav.data('size') == 'big') {
				nav.data('size','small').stop().animate({
					marginTop:'0px'
				}, 300);
			}
		} else {
			if (nav.data('size') == 'small' && scroll == 'true') {
				nav.data('size','big').stop().animate({
					marginTop:'-100px'
				}, 300);
			}
			
		}
	});
	// Text Rotator
	$('.rotate').each(function(){
		var el = $(this);
		var text = $(this).html().split(",");
		el.html(text[0]);
		setInterval(function() {
			el.animate({
              textShadowBlur:20,
              opacity: 0
            }, 500 , function() {
              index = $.inArray(el.html(), text)
              if((index + 1) == text.length) index = -1
              el.text(text[index + 1]).animate({
                textShadowBlur:0,
                opacity: 1
              }, 500 );
            });
		}, 2000);
	});

$('.calc select').change(function(){
          $edition = $('select#site_edition').val();
          $design = $('select#site_design').val();
          $code = $('select#site_code').val();
          $site_cmsss = $('select#site_cms').val();
         
          $site_format = $('select#site_edition option:selected').attr('data-color');
          $price = +$edition + (+$design + +$code + +$site_cmsss) ;
          console.log($price);
          $('span#final_price').text($price);
          if ($site_format == 1) {
            $('.card-images img').hide();   
            $('#card_1_0').show();      
          }
          if ($site_format == 2) {
            $('.card-images img').hide();   
            $('#card_1_1').show();      
          }
          if ($site_format == 3) {
            $('.card-images img').hide();   
            $('#card_4_0').show();      
          }
          if ($site_format == 4) {
            $('.card-images img').hide();   
            $('#card_4_1').show();      
          }
          if ($site_format == 5) {
            $('.card-images img').hide();   
            $('#card_4_4').show();      
          }
                if ($site_format == 6) {
                    $('.card-images img').hide();   
                    $('#card_4_4').show();          
                }
        })

});
