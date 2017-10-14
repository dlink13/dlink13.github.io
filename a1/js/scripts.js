var c1_autoplay, ipad_autoplay;
var delay = 3000;
var prefix;
var c1_playing = false;
var ipad_playing = false;
$(document).ready(function() {
	timer();

	c1_autoplay = setInterval(autoPlay, delay);
	ipad_autoplay = setInterval(ipad_autoPlay, delay);

	$("a.fancybox").fancybox();

	prefix = $('.prefix').val();
	var url = prefix+"/a1/send.php";

	var mobile = navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i);

	if(mobile != null) {
		$('html').css('width', window.innerWidth + 'px');
	} else {
		$(".scroll").each(function() {
			var block = $(this);
			$(window).scroll(function() {
				var top = block.offset().top;
				var bottom = block.height()+top;
				top = top - $(window).height();
				var scroll_top = $(this).scrollTop();
				var block_center = block.offset().top + (block.height() / 2);
				var screen_center = scroll_top + ($(window).height() / 2);
				if(block.height() < $(window).height()) {
					if ((scroll_top > (top-(block.height()/2))) && ((scroll_top < bottom+(block.height()/2))) && (scroll_top + $(window).height() > (bottom-(block.height()/2))) && (scroll_top < (block.offset().top+(block.height()/2)))) {
						if (!block.hasClass("animated")) {
							block.addClass("animated");
						}
					} else {
						if((block.offset().top + block.height() < scroll_top) || (block.offset().top > (scroll_top + $(window).height()))) {
							block.removeClass("animated");
						}
					}
				} else {
					if ((scroll_top > top) && (scroll_top < bottom) && (Math.abs(screen_center - block_center) < (block.height() / 4))) {
						if (!block.hasClass("animated")) {
							block.addClass("animated");
						}
					} else {
						if((block.offset().top + block.height() < scroll_top) || (block.offset().top > (scroll_top + $(window).height()))) {
							block.removeClass("animated");
						}
					}
				}
			});
		});
		$('head').append('<link rel="stylesheet" href="'+prefix+'a1/css/animation.css" />');
	}

	$('.button').click(function() {
		$('body').find('form:not(this)').children('label').removeClass('red');
		var request_url = '\n'+$('input[name="ref_url"]').val().toString().replace(/&/g, '\n');

		var answer = checkForm($(this).parent().get(0));
		if(answer != false)
		{
			var $form = $(this).parent(),
				name = $('input[name="name"]', $form).val(),
				phone = $('input[name="phone1"]', $form).val()+' '+$('input[name="phone2"]', $form).val()+' '+$('input[name="phone3"]', $form).val(),
				email = $('input[name="email"]', $form).val(),
				ques = $('textarea[name="ques"]', $form).val(),
				sbt = $('.btn', $form).attr("data-name"),
				submit = $('.btn', $form).text();
			var ref = $('input[name="referer"]').val();
			var formname = $('input[name="formname"]').val();
			$.ajax({
				type: "POST",
				url: "sender.php",
				dataType: "dataString",
				data: "name="+name+"&phone="+phone+"&"+sbt+"="+submit+"&email="+email+"&ques="+ques+"&formname="+formname+"&ref="+ref+"&utm="+request_url
			}).always(function() {
				thx();
				//метрики
				setTimeout(function(){ga('send', 'event', 'a1_althausgroup', ''+sbt);}, 1);
				setTimeout(function(){yaCounter26453871.reachGoal('a1_althausgroup_'+sbt);}, 1);
			});
		}
	});

	/* Youtube fix */
	$("iframe").each(function() {
		var ifr_source=$(this).attr('src');
		var wmode="wmode=transparent";
		if(ifr_source.indexOf('?')!=-1) {
			var getQString=ifr_source.split('?');
			var oldString=getQString[1];
			var newString=getQString[0];
			$(this).attr('src',newString+'?'+wmode+'&'+oldString)
		} else $(this).attr('src',ifr_source+'?'+wmode)
	});

	$('input[name="phone2"]').focus(function() {
		$(this).keyup(function(){
			if($(this).val().length >= 3)
				$(this).parent().siblings().find('input[name="phone3"]').focus();
		});
	});
});


function popup(id, form, h1, h2, btn) { //onClick="popup('callback', '', '', '', '');"
	$('.popup_overlay').show();
	$('#'+id).addClass('activePopup');
	if(id == 'callback') {
		var def_h1 = 'Заказать звонок';
		var def_h2 = 'Оставьте заявку, и&nbsp;наш менеджер<br>свяжется с&nbsp;вами в&nbsp;ближайшее время';
		var def_btn = 'Заказать звонок';
	}
	if(id == 'request') {
		var def_h1 = 'Оставить заявку';
		var def_h2 = 'Заполните форму,<br>и&nbsp;мы&nbsp;обязательно свяжемся с&nbsp;вами!';
		var def_btn = 'Оставить заявку';
	}
	if(id == 'question') {
		var def_h1 = 'Задать вопрос';
		var def_h2 = 'Заполните форму,<br>и&nbsp;мы&nbsp;обязательно свяжемся с&nbsp;вами!';
		var def_btn = 'Задать вопрос';
	}
	if(h1 != '') {$('#'+id).find('.popup_h1').html(h1);} else {$('#'+id).find('.popup_h1').html(def_h1);}
	if(h2 != '') {$('#'+id).find('.popup_h2').html(h2);} else {$('#'+id).find('.popup_h2').html(def_h2);}
	if(btn != '') {$('#'+id).find('.btn').html(btn);} else {$('#'+id).find('.btn').html(def_btn);}
	var Mtop = -($('.activePopup').outerHeight() / 2) + 'px';
	var Mleft = -($('.activePopup').outerWidth() / 2) + 'px';
	$('.activePopup').css({
		'margin-top' : Mtop,
		'margin-left' : Mleft,
		'left' : '50%',
		'top' : '50%'
	});
	$('.activePopup').show();
	$('.formname').attr("value", form);
}

function popup_out() {
	$('.popup_overlay').hide();
	$('.popup').hide();
	$('.popup').removeClass('activePopup');
	$('body').find('label').removeClass('red');
}

function formname(name) { //onClick="formname('text');"
	$('.formname').attr("value", name);
}

function thx() {
	$('.popup').hide();
	$('.popup').removeClass('activePopup');
	popup('thx', '');
	$('input[type="text"]:not(input[name="phone1"])').each(function(){
		$(this).val('');
	});
	$('textarea').val('');
}

function play(next) {
	if(c1_playing == false) {
		clearInterval(c1_autoplay);
		c1_playing = true;
		var now = $('.c1 .control').attr('data-now');
		$('.c1').css('background', 'url(\''+prefix+'a1/img/c1_bg'+next+'.jpg\') center center no-repeat');
		$('.c1 .control li').removeClass('active');
		$('.c1 .control .li'+next).addClass('active');
		$('.c1 .bg').animate({
			'opacity': 0
		}, 500, function() {
			$(this).css({
				'background': 'url(\''+prefix+'a1/img/c1_bg'+next+'.jpg\') center center no-repeat',
				'opacity': 1
			});
			$('.c1 .control').attr('data-now', next);
			c1_autoplay = setInterval(autoPlay, delay);
			c1_playing = false;
		});
	}
}

function autoPlay() {
	var now = $('.c1 .control').attr('data-now');
	var next = parseInt(now)+1;
	if(next > 3)
		next = 1;
	play(next);
}

function ipad_play(next) {
	if(ipad_playing == false) {
		ipad_playing = true;
		clearInterval(ipad_autoplay);
		var now = parseInt($('.c11 .slider_wrapp').attr('data-now'));
		if(now != next) {
			if(next>now) {
				var move = '640px';
				var side = '-640px';
			} else {
				var move = '-640px';
				var side = '640px';
			}
			if(next == 1 && now == 3) {
				var move = '640px';
				var side = '-640px';
			}
			if(next == 3 && now == 1) {
				var move = '-640px';
				var side = '640px';
			}
			$('.c11 .slider .slide.slide'+next).css('left', move);
			$('.c11 ul li').removeClass('active');
			$('.c11 ul li.li'+next).addClass('active');
			$('.c11 .slider .slide.slide'+now).animate({
				'left' : side
			});
			$('.c11 .slider .slide.slide'+next).animate({
				'left' : '0px'
			}, function() {
				ipad_autoplay = setInterval(ipad_autoPlay, delay);
				ipad_playing = false;
			});
			$('.c11 .slider_wrapp').attr('data-now', next);
		}
	}
}

function ipad_play_arrow(diff) {
	var now = $('.c11 .slider_wrapp').attr('data-now');
	var next = parseInt(now)+diff;
	if (next < 1)
		next = 3;
	if(next > 3)
		next = 1;
	ipad_play(next);
}

function ipad_autoPlay() {
	var now = parseInt($('.c11 .slider_wrapp').attr('data-now'));
	var next = now+1;
	if(next > 3)
		next = 1;
	ipad_play(next);
}

