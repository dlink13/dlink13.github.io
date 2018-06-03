var bind_link_to_text = function (link_selector, text_selector) {
    var $links = $(link_selector);
    var $texts = $(text_selector);
    var show_id = function (_id) {
        $texts.hide();
        $(_id).show();
    }
    $links.click(function (event) {
        event.preventDefault();
        $links.removeClass('active');
        show_id($(event.target).addClass('active').data('toggle'));
    });
}

bind_link_to_text('.courses__links > a', '.courses__texts > div' );
bind_link_to_text('.rasspis__links > a', '.rasspis__links___open > div' );

var prices = [
    [3500, 5000],
    [9500, 13500]
];

var lessions = [4, 8];
var months = [1, 3];

$lessionSlider = $(".fcalcp5_vedyshiy");
$lessionResult = $(".fcalcp5_vedyshiy_rez");

$monthSlider = $(".fcalcp5_decor");
$monthResult = $(".fcalcp5_decor_rez");

$total = $(".fcalcp9 ");

//пробелы в цифрах
var addSpaces = function (nStr) {
    nStr += "";
    var x = nStr.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + " " + "$2");
    }
    return x1 + x2;
};

var namePlural = function (num, base, one, two, many) {
    var snum = '' + num;
    var last = snum.charAt(snum.length - 1);
    if (num < 10 || num > 20) {
        if (last == 1) {
            return base + one;
        }
        else if (2 <= last && last <= 4) {
            return base + two;
        }
    }
    return base + many;
};

var lessionPlural = function (num) {
    return namePlural(num, 'заняти', 'е', 'я', 'й')
};
var monthPlural = function (num) {
    return namePlural(num, 'месяц', '', 'а', 'ев')
};

var col_id = 0, row_id = 0;
var sum_update = function () {
    var sum = prices[row_id][col_id];
    $total.html(`<span>${addSpaces(sum)}</span> р.`);
};

$lessionSlider.slider({
    range: "min", animate: true,
    value: 0, min: 0, max: lessions.length - 1, step: 1,
    slide: function (event, ui) {
        col_id = Math.min(prices[row_id].length - 1, ui.value);
        var val = lessions[col_id];
        $lessionResult.html(`<span>${val} ${lessionPlural(val)}</span>`);
        sum_update();
    }
});

$monthSlider.slider({
    range: "min", animate: true,
    value: 0, min: 0, max: months.length - 1, step: 1,
    slide: function (event, ui) {
        row_id = Math.min(prices.length - 1, ui.value);
        var val = months[row_id];
        $monthResult.html(`<span>${val} ${monthPlural(val)}</span>`);
        sum_update();
    }
});

// Отрабатывае ативируем событие для первого пересчета
$lessionSlider.slider('option', 'slide').call(null, null, {value: 0});
$monthSlider.slider('option', 'slide').call(null, null, {value: 0});
$(function() {
        $('#before-load').find('img').fadeOut().end().delay(600).fadeOut('slow');
    });
$(function(){

    var $el, leftPos, newWidth,
        $mainNav = $("#example-one"),
        $mainNav2 = $("#example-two");
    
    /*
        EXAMPLE ONE
    */
    $mainNav.append("<li id='magic-line'></li>");
    
    var $magicLine = $("#magic-line");
    
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#example-one li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    
});
$(function(){
  $("#menu").on("click","a", function (event) {
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
    var $form = $('form#contact_form');
    var is_empty = function (value) {
        return !value.trim();
    };
    var is_email = function (value) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).trim().toLowerCase());
    };
    var has_errors = false;
    var $input_elements = $form.find('input[type=text], input[type=email], textarea');
    $input_elements.change(function (event) {
        var $target = $(event.target);
        var $parent = $target.parent();
        var $helper = $parent.find('.help-block');
        var type = $target.attr('type');
        var value = $target.val();
        var is_valid = false;
        if (type === 'email') {
            is_valid = is_email(value);
        } else {
            is_valid = !is_empty(value);
        }
        $parent.removeClass('has-success has-warning has-error');
        if (is_valid) {
            $parent.addClass('has-success');
            $helper.hide();
        } else {
            $parent.addClass('has-error');
            $helper.show();
            has_errors = true;
        }
    });
    $form.submit(function (event) {
        has_errors = false;
        $input_elements.change();
        if (has_errors) {
            event.preventDefault();
        }
    });
})(jQuery);