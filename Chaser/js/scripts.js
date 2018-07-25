$(function(){
  $("#example-one").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
(function ($) {   
    var is_empty = function (value) {
        return !value.trim();
    };
    var is_simple_text = function (value) {
        var re = /^[0-9A-zА-я_\. ]+$/;
        return re.test(value);
    };
    var is_complex_text = function (value){
        var re = /^[0-9A-zА-я\s\r\n\-\+\.,?!@$_#№=\(\)%:]+$/;
        return re.test(value);
    };
    var is_phone = function (value) {
        var re = /^\+?\d[\d\(\)\ -]{4,20}\d$/;
        return re.test(value);
    };
    var is_email = function (value) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    };
    var strip_tags = function(value){
        return value.replace(/<\/?[^>]+>/gi, '');
    };
    
    var on_error = function(data, form){
        var $fail = $("#failMessage").clone(false).show();
        form.replaceWith( $fail );
    }
    var on_success = function(data, form){
        if (data.status === 'success'){
            var $success = $("#successMessage").clone(false).show();
            form.replaceWith( $success );
        } else {
            on_error(data, form);
        }
    }
    var $forms = $('form');

    console.log($forms);

    $forms.each(function(index, element){
        var $form = $(element);
        var $input_elements = $form.find('input[type=text], input[type=email], input[type=tel], textarea, input[type=phone]');
        var has_errors = false;
        $input_elements.change(function (event) {
            var $target = $(event.target);
            var type = $target.attr('type');
            var value = $target.val(strip_tags($target.val().trim())).val();
            if (
                (type === 'email' && is_email(value)) || 
                ((type === 'phone' || type =="tel") && is_phone(value)) ||
                (type === 'text' && is_simple_text(value)) ||
                ($target.is('textarea') && value)
            ) {
                $target.removeClass('has-error');
                $target.addClass('has-success');
            } else {
                $target.removeClass('has-success');
                $target.addClass('has-error');
                has_errors = true;
            }
        });

        $form.submit(function (event) {
            event.preventDefault();

            has_errors = false;
            $input_elements.change();

            var formname = $(this).attr('id')
            curr_form = $(this)[0];
            myform = new FormData(curr_form);
            // var form = this;

            console.log(myform);
            
            if (!has_errors) {
                $.ajax({
                    type: 'POST',
                    enctype: 'multipart/form-data',
                    url: 'send.php',
                    data: myform,
                    processData: false,
                    contentType: false,
                    success: function( data ){
                        on_success( data, $form );
                    },
                    error: function( x, j, s ){
                        
                        console.log( x,j,s );
                        on_error( null, $form );
                    },
                });
            } else {
                alert(has_errors);
            }
        });
    });
})(jQuery);
$("[data-fancybox]").fancybox({
// Скорость анимации
speed : 330,
opacity : 'auto',
loop : true,
smallBtn : 'auto',})

var typed = new Typed('.tem','.tem2', {
  strings: ["First sentence.", "Second sentence."],
  typeSpeed: 150
});
 $(".navbar-nav").click(function(){
    $(".navbar-collapse") .removeClass("in")
 })
$(".form-group2") .addClass("hide_form2");
$(".form-group3") .addClass("hide_form3");
$(".form-group") .removeClass("hide_form1")

 $(".navbar-nav").click(function(){
    $(".navbar-collapse") .removeClass("in")
 })
 $(".form_active_button_1").click(function(){
    $(".form-group2") .addClass("hide_form2");
    $(".form-group3") .addClass("hide_form3");
    $(".form-group") .removeClass("hide_form1")
 })
  $(".form_active_button_2").click(function(){
    $(".form-group") .addClass("hide_form1");
    $(".form-group3") .addClass("hide_form3");
    $(".form-group2") .removeClass("hide_form2")

 })
    $(".form_active_button_3").click(function(){
    $(".form-group") .addClass("hide_form1");
    $(".form-group2") .addClass("hide_form2");
    $(".form-group3") .removeClass("hide_form3")

 })
 
 