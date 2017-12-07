var c1_autoplay, ipad_autoplay;
var delay = 3000;
var prefix;
var c1_playing = false;
var ipad_playing = false;
$(document).ready(function() {
	
 $('.button').click(function() {
        $('body').find('form:not(this)').children('label').removeClass('red');
        var request_url = '\n'+$('input[name="ref_url"]');

		var answer = checkForm($(this).parent().get(0));
		if(answer != false)
		{
			var $form = $(this).parent(),
				name = $('input[name="name"]', $form).val(),
				phone = $('input[name="phone"]', $form).val(),
				email = $('input[name="email"]', $form).val(),
				ques = $('input[name="ques"]', $form).val(),
				sbt = $('.btn', $form).attr("data-name"),
				submit = $('.btn', $form).text();
			var ref = $('input[name="referer"]').val();
			var formname = $('input[name="formname"]').val();
			$.ajax({
				type: "POST",
				url: "sender.php",
				dataType: "dataString",
				data: "name="+name+"&phone="+phone+"&"+sbt+"="+submit+"&email="+"&ques="+ques+"&formname="+formname+"&ref="+ref+"&utm="+request_url
			}).always(function() {
				thx();
			
			
			});
		}
	});

});

$(window).resize(function(){
	var Mtop = -($('.activePopup').outerHeight() / 2) + 'px';
	var Mleft = -($('.activePopup').outerWidth() / 2) + 'px';
	$('.activePopup').css({
		'margin-top' : Mtop,
		'margin-left' : Mleft,
		'left' : '50%',
		'top' : '50%'
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
	$('input[type="text"]:not(input[name="phone"])').each(function(){
		$(this).val('');
	});
	$('textarea').val('');
}



function scrollTo(id) {
	var to = $('#'+id).offset().top - 60;
	$("html, body").animate({scrollTop: to}, 500);


}
function countdown() { 
$('#countdown_dashboard').countDown({
					targetDate: {
						'day': 		29,
						'month': 	12,
						'year': 	2017,
						'hour': 	23,
						'min': 		59,
						'sec': 		59,	
						'utc':      true,
						},
					omitWeeks: true					
				});}               



