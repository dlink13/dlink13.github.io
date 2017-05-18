
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
"use strict"
var initChekbox = function(id, parent, children, target, expression, disableWhenActive) {
  var o = {
    "el": document.getElementById(id),
    "parent": parent || false,
    "children": [],
    "target": document.getElementById(target),
    "active": false,
    "disable": false,
    "disableWhenActive": disableWhenActive || false,
    "expression": expression || "sum",
    "hasChildren": (children.length > 0) ? true : false,
    "calcRes": function(expression, sum, value) {
      var sum = sum.replace(/\s*/g, '') * 1, // форматируем удаляя лишние пробелы и преобразуем в число
        value = value * 1,
        result = 0;
      switch (expression) {
        case "sum":
          result = sum + value;
          break;
        case "sub":
          result = sum - value;
          break;
        case "reset":
          result = 0;
          break;
        case "set":
          result = value;
          break;
      }
      result = result.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1 "); // форматирование(отделение тысяч пробелом)
      return result
    },
    "activation": function() {
      if (!this["active"]) {
        this["active"] = true;
        this.el.checked = true
      };
      this.target.textContent = this.calcRes(this.expression, this.target.textContent, this.el.getAttribute("value"));
      if (this.hasChildren) {
        this.children.forEach(function(item) {
          if (!item.active) {
            item.activation()
          };
        })
      }
    },
    "deactivation": function() {
      if (this["active"]) {
        this["active"] = false;
        this.el.checked = false
        this.target.textContent = this.calcRes("sub", this.target.textContent, this.el.getAttribute("value"));
      };
      if (this.parent) {
        this.parent["active"] = false;
        this.parent.el.checked = false
      };
      if (this.hasChildren) {
        this.children.forEach(function(item) {
          item.deactivation()
        })
      };
    },
    "disabling": function() {
      if (!this.disable) {
        this.disable = true;
        this.el.disabled = true;
        this.deactivation();
      } else {
        this.disable = false;
        this.el.disabled = false;
      }
    }
  };
  o["children"] = (o.hasChildren) ? children.map(function(item) {
    return initChekbox(item, o, [], o["target"].id)
  }) : false;
  return o
};
// получение свойств объекта
var getPropertyObject = function(o, exclude) {
  var i = [],
    exclude = exclude | "";
  for (var prop in o) {
    if (o.hasOwnProperty(prop)) {
      i.push(o[prop])
    };
  }
  return i
}

// выбор чекбокса (первый клик)
var activateCheck = function(checkbox) {
  if (cboxes.hasOwnProperty(checkbox)) {
    if (cboxes[checkbox].disableWhenActive) {
      cboxes[checkbox].disableWhenActive.forEach(function(item) {
        if (item != cboxes[checkbox]) {
          item.disabling()
        }
      })
    }
    cboxes[checkbox].activation();
  };
};
// снятие выбора (второй клик)
var deactivateCheck = function(checkbox) {
  if (cboxes.hasOwnProperty(checkbox)) {
    cboxes[checkbox].deactivation();
    if (cboxes[checkbox].disableWhenActive) {
      cboxes[checkbox].disableWhenActive.forEach(function(item) {
        if (item != cboxes[checkbox]) {
          item.disabling()
        }
      })
    }
  };
};
// проверка на выбор
var isCheckActivated = function(checkbox) {
  return (cboxes.hasOwnProperty(checkbox)) ? cboxes[checkbox].active : document.getElementById(checkbox).getAttribute("checked");
};

// инициализация всех чекбоксов
var cboxes = {
  "cbox1": initChekbox("cbox1", undefined, ["cbox11", "cbox12", "cbox13"], "sum1"),
  "cbox2": initChekbox("cbox2", undefined, ["cbox21", "cbox22", "cbox23"], "sum2"),
  "cbox3": initChekbox("cbox3", undefined, ["cbox31", "cbox32"], "sum2"),
  "cbox4": initChekbox("cbox4", undefined, [], "sum1", "set"),
  "cbox5": initChekbox("cbox5", undefined, [], "sum2", "set"),
};
// добавление дополнительных параметров
// children cbox1
cboxes["cbox11"] = cboxes.cbox1.children[0];
cboxes["cbox12"] = cboxes.cbox1.children[1];
cboxes["cbox13"] = cboxes.cbox1.children[2];
// children cbox2
cboxes["cbox21"] = cboxes.cbox2.children[0];
cboxes["cbox22"] = cboxes.cbox2.children[1];
cboxes["cbox23"] = cboxes.cbox2.children[2];
// children cbox3
cboxes["cbox31"] = cboxes.cbox3.children[0];
cboxes["cbox32"] = cboxes.cbox3.children[1];
// custom event checkbox
cboxes["cbox5"].disableWhenActive = getPropertyObject(cboxes);
cboxes["cbox4"].disableWhenActive = getPropertyObject(cboxes);


// обработчик события для чекбоксов
jQuery("#chekboxes").on('click', 'input', function(e) {
  if (!e.target.disabled) {
    var targetId = e.target.id;
    (!isCheckActivated(targetId)) ? activateCheck(targetId): deactivateCheck(targetId);
  }
})

});
