  t = $("html");

            var c = $("#menu").mmenu({
              extensions: {
                all: ["theme-black", "fx-menu-slide", "pagedim-black"],
                "(min-width: 1430px)": ["widescreen"]
              },
              offCanvas: {
                position: 'right'
              },
             /* указывается тема, анимация, затемнение основной части при открытии меню, 
            также при ширине экрана больше 1430px меню не прячеться
            */
            navbar: {
              title: "Здесь Будет Логотип"
             }, //меняем заголовок. Можно использовать теги. Подробнее об аддоне navbar можно найти тут http://mmenu.frebsite.nl/documentation/addons/navbars.html
             pageScroll : {
             scroll : true, // прокрутка к якорю
             update : true, //прокручивать, даже если пункт обозначен как активный
             scrollOffset : 300 // отступ от якоря, по умолчанию 0. У меня почему-то не заработал :(
            }
             //добавляем или удаляем класс is-active гамбургеру при открытии или закрытии меню соответственно. Таймаут в 100мс оставлен чтобы анимация проходила после отрктия или закрытия и всё было плавно и без лагов.
            }).data("mmenu"),
            d = $("#hamburger").on("click", function(e) {
              e.preventDefault(), t.hasClass("mm-opened") ? c.close() : c.open()
            }).children(".hamburger");
            c.bind("close:finish", function() {
              setTimeout(function() {
                d.removeClass("is-active")
              }, 50)
            }), c.bind("open:finish", function() {
              setTimeout(function() {
                d.addClass("is-active")
              }, 50)
            })