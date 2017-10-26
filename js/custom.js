
var show;
function hidetxt(type){
param=document.getElementById(type);
if(param.style.display == "none") {
if(show) show.style.display = "none";
param.style.display = "block";
show = param;
}else param.style.display = "none"
};

 var lastOpen;
 function collapsElement(id) {
 if ( document.getElementById(id).style.display != "none" ) {
 document.getElementById(id).style.display = 'none';
 }
 else {
 if(lastOpen !== undefined) {
 lastOpen.style.display = 'none';
 }
 lastOpen = document.getElementById(id);
 document.getElementById(id).style.display = '';
 }
 };


function openbox(id){
    display = document.getElementById(id).style.display;

    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
};
            function showHide(element_id) {
                //Если элемент с id-шником element_id существует
                if (document.getElementById(element_id)) { 
                    //Записываем ссылку на элемент в переменную obj
                    var obj = document.getElementById(element_id); 
                    //Если css-свойство display не block, то: 
                    if (obj.style.display != "block") { 
                        obj.style.display = "block"; //Показываем элемент
                    }
                    else obj.style.display = "none"; //Скрываем элемент
                }
                //Если элемент с id-шником element_id не найден, то выводим сообщение
                else alert("Элемент с id: " + element_id + " не найден!"); 
            }; 

$(document).ready(function() {
    
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
            
               
            });
        }
    });

    

    $('input[name="phone2"]').focus(function() {
        $(this).keyup(function(){
            if($(this).val().length >= 3)
                $(this).parent().siblings().find('input[name="phone3"]').focus();
        });
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
    $('input[type="text"]:not(input[name="phone1"])').each(function(){
        $(this).val('');
    });
    $('textarea').val('');
}





function scrollTo(id) {
    var to = $('#'+id).offset().top - 60;
    $("html, body").animate({scrollTop: to}, 500);
}