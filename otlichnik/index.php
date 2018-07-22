<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<a href="https://msdn.microsoft.com/en-us/library/jj676915%28v=vs.85%29.aspx">
<title>Отличник</title>     
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Раскроем все секреты ЕГЭ и ОГЭ, дадим продуманный план и научим новым методам решения. Готовьтесь с нами и будьте уверены в результате!">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/media.css">
<link rel="icon" href="http://otl-ege.ru/img/favicon.png" type="image/png">
<link rel="stylesheet" href="css/jquery.fancybox.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://vk.com/js/api/openapi.js?152" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script>
function AjaxFormRequest(result_id,formMain,url) {
   jQuery.ajax({
      url:     url,
      type:     "POST",
      dataType: "html",
      data: jQuery("#"+formMain).serialize(),
      success: function(response) {
         document.getElementById(result_id).innerHTML = response;
      },
      error: function(response) {
         document.getElementById(result_id).innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
      }
   });
}
</script>
<script>
 function AjaxFormRequest(result_id,formMain,url) {
 jQuery.ajax({
 url: url,
 type: "POST",
 dataType: "html",
 data: jQuery("#"+formMain).serialize(),
 success: function(response) {
 document.getElementById(result_id).innerHTML = response;
 },
 error: function(response) {
 document.getElementById(result_id).innerHTML = "
 
Возникла ошибка при отправке формы. Попробуйте еще раз
 
";
 }
 });
 
 $(':input','#formMain')
 .not(':button, :submit, :reset, :hidden')
 .val('')
 .removeAttr('checked')
 .removeAttr('selected');
 }
</script>

<style>
    /* Стили для затемнения фона */
    .popup-overlay {
      display: none;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 186, 0, 0.7);
      z-index: 100;
    }
 
    /* Основные стили для всплывающего окна */
    .popWindow{
      display: none;
      background-color: #161613;
      color: #fff;
      width: 90%;
      max-width: 720px;
      padding: 40px 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -360px;
      margin-top: -185px;
      text-align: center;
      box-shadow: 0 0 30px rgba(18, 17, 12, 0.5);
    }
    /* Стили для адаптивности всплывающего окна */
    @media only screen and (max-width : 800px) {
      .popWindow {
        margin-left: -45%;
      }
    }
    /* Кнопка закрыть всплывающее окно */
    .close-btn {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 40px;
      line-height: 20px;
      cursor: pointer;
      color: #999;
      padding: 10px;
    }
    /* Просто текст */
    .subscribe_window .subcsribe-text {
      font-size: 18px;
      text-align: center;
      text-transform: uppercase;
      color: #fff;
      margin: 0 0 40px;
      position: relative;
      padding: 0 50px;
      z-index: 10;
    }
    /* Текст */
    .subscribe_window .req-fields {
      color: #676767;
      text-align: left;
    }
    /* Стили формы */
    .subscribe-form {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
    .subscribe-form div {
      position: relative;
    }
    .subscribe-form input {
      border: 1px solid #3d3d3d;
      width: 100%;
      font-family: "Lato", sans-serif;
      font-size: 16px;
      line-height: 32px;
      padding: 5px 20px;
      margin-bottom: 20px;
      outline: none;
      background: #2e2e2b;
      color: #fff;
      border-radius: 4px;
    }
    .btn {
      color: #161613;
      background-color: #ffba00;
      padding: 10px 50px;
      text-align: center;
      font-size: 13px;
      border: 1px solid #ffba00;
      box-shadow: none;
      display: inline-block;
      text-transform: uppercase;
      text-decoration: none;
      display: inline-block;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    .btn:hover, .btn:focus {
      background-color: #ffba00;
      color: #fff;
      text-decoration: none;
    }
    .subscribe-form .btn {
      font-size: 24px;
      line-height: 54px;
      border: none;
      width: 100%;
      padding: 10px;
      font-weight: 700;
      text-align: center;
      outline: none;
      border-radius: 4px;
    }
    .subscribe-form .btn:hover {
      background-color: #e6a700;
    }
    .subscribe-form .btn i {
      font-size: 28px;
      margin-right: 7px;
    }
    .subscribe-form label {
      color: #fff;
      position: absolute;
      top: 12px;
      left: 20px;
      -webkit-transition: 0.28s;
      transition: 0.28s;
    }
    .subscribe-form label span {
      color: #ffba00;
    }
    .subscribe-form input:focus + label {
      left: -62px;
      font-size: 12px;
    }
    .subscribe-form input:invalid {
      box-shadow: none;
    }
    .subscribe-form input:valid {
      border: 1px solid #161613;
    }
    .subscribe-form input:valid + label {
      left: -62px;
      font-size: 12px;
    }
    .subscribe-form input:invalid:not(:focus):not(:placeholder-shown) {
      border: 1px solid #d3362a;
    }
    .subscribe-form input:invalid:not(:focus):not(:placeholder-shown) + label {
      left: -62px;
      font-size: 12px;
    }
    @media only screen and (max-width : 480px) {
      .subscribe_window{
        top: 5%;
        margin-top: 0;
      }
      .subscribe_window .subcsribe-text{
        padding: 0;
      }
      .subscribe-form input:focus + label{
        left: 20px;
        top: -18px;
      }
      .subscribe-form input:valid + label{
        left: 20px;
        top: -18px;
      }
      .subscribe-form input:invalid:not(:focus):not(:placeholder-shown) + label{
        left: 20px;
        top: -18px;
      }
    }
 
    /* Стили для текста внутри благодарственного окна после успешной отправки */
    .thank_you_window .thank_you_title {
      font-family: "Titillium Web", sans-serif;
      color: #fff;
      font-size: 32px;
      line-height: 50px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .thank_you_window .thank_you_body {
      font-family: "Titillium Web", sans-serif;
      color: #fff;
      font-size: 24px;
      font-weight: 400;
    }
  </style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.denis-creative.com/jquery.cookie.min/jquery.cookie.min.js"></script><!-- этот скрипт скачайте и добаьте локально, если нужны куки -->
  <script>
    // PopUp Form and thank you popup after sending message
    var $popOverlay = $(".popup-overlay");
    var $popWindow = $(".popWindow");
    var $subscribeWindow = $(".subscribe_window");
    var $popThankYouWindow = $(".thank_you_window");
    var $popClose = $(".close-btn");
 
    $(function() {
      // Close Pop-Up after clicking on the button "Close"
      $popClose.on("click", function() {
        $popOverlay.fadeOut();
        $popWindow.fadeOut();
      });
 
      // Close Pop-Up after clicking on the Overlay
      $(document).on("click", function(event) {
        if ($(event.target).closest($popWindow).length) return;
        $popOverlay.fadeOut();
        $popWindow.fadeOut();
        event.stopPropagation();
      });
 
      // Form Subscribe
      $(".subscribe-form").submit(function() {
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: th.serialize()
        }).done(function() {
          // после успешной отправки скрываем форму подписки и выводим окно с благодарностью за заполнение формы
          $subscribeWindow.fadeOut();
          $popThankYouWindow.fadeIn();
          // используем куки на 30 дней, если человек заполнил форму
          // для куки обязательно должен быть подключен jquery.cookie.min.js
          $.cookie('hideTheModal', 'true', { expires: 30 });
          // очищаем форму
          setTimeout(function() {
            th.trigger("reset");
          }, 1000);
        });
        return false;
      });
    });
 
    // используйте этот код, если нужно появление формы с куки и вы подключали jquery.cookie.min.js
    $(window).load(function() {
      // задаем переменную для cookie
      var hideTheModal = $.cookie('hideTheModal');
      // если cookie не установлено...
      if(hideTheModal == null){
        // Через 2 секунды появляется контактная форма
        setTimeout(function() {
          $popOverlay.fadeIn();
          $subscribeWindow.fadeIn();
        }, 2000);
      }
    });
  </script>
</head>
<body>
  
<header>
  <div class="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3">
          <div class="logo"><a href="index">
            <img src="img/logo.png" alt="Отличник-учебный центр"></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3">
          <div class="metro">
            <ul>
              <li><img src="img/metro.png" alt="Метро"> <p>м.Озерки</p></li>
               <li><img src="img/metro.png" alt="Метро"> <p>м.Проспект Просвещения</p></li>
            </ul>
          </div>
        </div>
          <div class="col-lg-3 col-md-3 col-sm-3">
          <div class="metro">
            <ul>
              <li><img src="img/metro.png" alt="Метро"> <p>м.Академическая</p></li>
               <li><img src="img/metro.png" alt="Метро"> <p>м.Гражданский проспект</p></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3">
          <div class="telefon">
            <a href="#">+7(965)-039-13-19</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="menu">
    <div class="container">
      <div class="row">
        <ul>
          <li><a href="index">Главная</a></li>
          <li><a href="kursi-EGE">Курсы ЕГЭ</a></li>
          <li><a href="kursi-OGE">Курсы ОГЭ</a></li>
          <li><a href="kursi-5-8-klass">Курсы 5-8 класс</a></li>
          <li><a href="prepodovateli">Преподаватели</a></li>
          <li><a href="ceni">Цены</a></li>
          <li><a href="otzivi">Отзывы</a></li>
          <li><a href="contakti">Контакты</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>
<div class="top-slider">
  <div class="container">
    <div class="row">
                  <div class="top-slider-text">
      <h2 class="h2">Раскроем все секреты ЕГЭ и ОГЭ, дадим продуманный план и научим новым методам решения. Готовьтесь с нами и будьте уверены в результате!</h2>
    
    <a onClick="popup('skidka','Блок «скидка»');">Записаться</a>
  </div>
          </div>

      </div>
    </div>
</div>
<div class="preimush">
<div class="container">
  <div class="row">
 <div class="col-md-4 col-sm-6">
  <div class="preim-block">
   <img src="img/team.png" alt="Молодая команда">
   <div class="preim-block-text">
   <h2 class="h2">Уверенность</h2>
   <p>Тестирование в формате ОГЭ/ЕГЭ 2 раза в год</p>
</div>
 </div></div> 
  <div class="col-md-4 col-sm-6">
  <div class="preim-block">
   <img src="img/test1.png" alt="Молодая команда">
   <div class="preim-block-text">
   <h2 class="h2">Мотивация</h2>
   <p>Преподаватели дают не только знания, но и увлекают предметом</p>
</div>
 </div></div> 
  <div class="col-md-4 col-sm-6">
  <div class="preim-block">
   <img src="img/test.png" alt="Молодая команда">
   <div class="preim-block-text">
   <h2 class="h2">Комфорт</h2>
   <p>Формируем группы по начальному уровню знаний</p>
</div>
 </div></div> 
  <div class="col-md-4 col-sm-6">
  <div class="preim-block">
   <img src="img/idea.png" alt="Молодая команда">
   <div class="preim-block-text">
   <h2 class="h2">Эффективность</h2>
   <p>Группы до 7 человек гарантируют внимание к каждому ученику</p>
</div>
 </div></div> 
  <div class="col-md-4 col-sm-6">
  <div class="preim-block">
   <img src="img/boy.png" alt="Молодая команда">
   <div class="preim-block-text">
   <h2 class="h2">Контроль</h2>
   <p>Регулярные тесты и проверка домашних заданий</p>
</div>
 </div></div> 
  <div class="col-md-4 col-sm-6">
  <div class="preim-block">
   <img src="img/brain.png" alt="Молодая команда">
   <div class="preim-block-text">
   <h2 class="h2">Общение</h2>
   <p>Наши преподаватели всегда на связи через социальные сети и мессенджеры</p>
</div>
 </div></div> 
</div></div></div>
<div class="block-text">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
      <h1 class="block-text-top">
        Учебный центр «Отличник» приглашает на курсы по всем предметам школьников 5-11 классов. </br>Центр помогает школьникам с 5 класса развить свои способности, повысить успеваемость в школе и почувствовать себя увереннее. </br>Учеников 9,10 и 11 классов мы готовим к ЕГЭ и ОГЭ.
      </h1>
      <div class="block-text-second" style="text-align:justify;">
        В процессе обучения очень многое зависит от преподавателя. Мы с уверенностью можем сказать, что у нас работают одни из лучших молодых репетиторов Петербурга. Их объединяет любовь к своему предмету и умение просто объяснять. Они любого ученика научат думать, поминать и верить в свои силы. Естественно, каждый наш преподаватель имеет опыт подготовки к ЕГЭ и ОГЭ.</br></br>

Каждый ученик уникален: разный уровень подготовки и способность запоминать информацию. Поэтому перед началом занятий мы проводим входное тестирование и беседу с преподавателем, чтобы распределить ребят на группы. Занятия в маленьких группах от 3 до 7 человек наиболее эффективны. Внимание уделяется каждому ученику, а занятия проходят в приятной дружеской атмосфере.</br></br>
      </div>
    </div>
    </div>
  </div>
</div>
<div class="block-ssilki">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <div class="block-ssilki-left">
          
        </div>
      </div>
      <div class="col-lg-6 col-md-6 block-ssilki-right-main">
       <div class="block-ssilki-right">
       </div>
         <div class="block-ssilki-right">
         
       </div>
         <div class="block-ssilki-right">
         
       </div>
         <div class="block-ssilki-right">
         
     
      </div>
      </div>
       <div style="clear: both;"></div>
      <div class="col-lg-12">
        <div class="block-text-down">
          <p>
            Мы следим за всеми изменениями в ЕГЭ и ОГЭ, знаем абсолютно все о процедуре проведения итоговой аттестации, ее проверке и апелляции. Программы курсов регулярно обновляются, чтобы соответствовать требованиям ФИПИ. На наших курсах ученики получают только актуальную, полезную информацию.</br></br>

Наша цель – высокие баллы наших выпускников. Готовьтесь с «Отличником» и поступите в ВУЗ своей мечты. Записывайтесь!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="block-zahvat">
  <div class="container">
    <div class="row">
      <div class="col-lg-7">
        <div class="block-zahvat-text">
        <h3 class="h3">
          ЛЕТНИЕ КУРСЫ <br>7-11 КЛАСС
        </h3>
        <p>Уже знаешь, как напишешь ЕГЭ / ОГЭ?<br>
        Диагностика <span>до 1 июля бесплатно!</span></p>
      </div>
      </div>
      <div class="col-lg-4">
        <div class="block-zahvat-forma">
          <div class="block-zahvat-forma-in">
          <p>Бесплатная диагностика<br>
<span>до 1 июля,</span><br>
количество мест ограничено!</p>
<form id="formMain" action="form.php" method="post" name="form">
            
            <label class="name required">
              <input type="text" id="applicationName" maxlength="20"  name="name" placeholder="Ваше имя">
            </label>
            
        
            <label class="phone required phone">
              <input name="telephone" type="Tel" id="applicationTelephone" maxlength="20" placeholder="Номер телефона">
            </label>
         <input type="checkbox" name="checkme" id="agree" >
         <label for="agree" class="agree required">Я согласен(на) с <a onClick="popup('rabota','Блок «скидка»');">условиями обработки
персональных данных</a></label>
          <!--  <div  class="button noselect btn" onClick="formname" form="application" type="submit">--><button class="applicationButton button noselect btn" data-name="request" id="button" type="submit" form="form"  onclick="AjaxFormRequest('messegeResult', 'formMain', 'form.php')" onClick="formname">Записаться</button>
          </form>
<div class="popWindow thank_you_window"><!-- //благодарственное окно после успешной отправки формы -->
            <p class="thank_you_title">Thank you for subscribing!</p>
            <p class="thank_you_body">We've sent some useful tips to your email. Go ahead and check them now!</p>
            <div class="close-btn">&times;</div>
          </div><!-- /thank_you_window -->
 
        </div><!-- /popup-overlay -->
      </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="voprosi" id="faq">
  <div class="container">
    <div class="row">
                  <h3 class="h3">ваши вопросы</h3>
                  <div class="col-md-10">
                    <a class="open-content" href="javascript:collapsElement('opencontent')" title="" rel="nofollow"><p>
                      <span>01.</span>Как часто проводятся занятия?
                  </p></a>
                   <div id="opencontent" style="display: none" class="open-text">
<p class="text-1">
С сентября по май занятия по одному предмету проходят один раз в неделю в вечернее время. Длительность одного занятия 120 минут. Расписание занятий можно уточнить по телефону +7 965 039 1319

На интенсивных летних курсах занятия проходят 2 раза в неделю в дневное и вечернее время.

</p>
</div>
                    <a class="open-content" href="javascript:collapsElement('opencontent2')" title="" rel="nofollow"><p><span>02.</span>Проводите ли вы пробные ЕГЭ и ОГЭ(ГИА)?</p></a>
                    <div id="opencontent2" style="display: none" class="open-text">
<p class="text-2">
Мы регулярно проводим пробные ЕГЭ/ОГЭ. Записаться на пробный экзамен могут не только наши ученики. После пробного экзамена идет разбор ошибок с преподавателем.
</div>
                    <a class="open-content" href="javascript:collapsElement('opencontent3')" title="" rel="nofollow"><p><span>03.</span>Есть ли вводное тестирование?</p></a>
                    <div id="opencontent3" style="display: none" class="open-text">
<p class="text-3">Ученики бывают разные, с разными целями и уровнем начальной подготовки. Нам важно, чтобы каждый чувствовал себя комфортно в группе. Поэтому перед началом занятий мы проводим вводное тестирование. По его результатам предлагаем оптимальную группу.</p>
</div>
                     <a class="open-content" href="javascript:collapsElement('opencontent4')" title="" rel="nofollow"><p><span>04.</span>Задаете ли вы домашние задания?</p></a>

<div id="opencontent4" style="display: none" class="open-text">
<p class="text-3">Домашнее задание ученики получают после каждого занятия. Выполнение домашнего обязательно и контролируется преподавателем. Это помогает школьникам закрепить полученные на занятии знания и проверить понимание темы.</p>
</div>

<a class="open-content" href="javascript:collapsElement('opencontent5')" title="" rel="nofollow"><p>
                      <span>05.</span>Сколько человек в группе?
                  </p></a>
                   <div id="opencontent5" style="display: none" class="open-text">
<p class="text-1">
От 3 до 7 человек. Средний размер группы 4 человека.

</p>
</div>
                    <a class="open-content" href="javascript:collapsElement('opencontent6')" title="" rel="nofollow"><p><span>06.</span>Какие у вас есть скидки?</p></a>
                    <div id="opencontent6" style="display: none" class="open-text">
<p class="text-2">
Мы предоставляем скидку 10% при единовременной оплате первого полугодия курсов по подготовке к ЕГЭ или ОГЭ, курсов для 7-8 классов.
Для курсов подготовки к ЕГЭ и ОГЭ на второй предмет предоставляем скидку 15%, на третий – 25%.
</div>
                    <a class="open-content" href="javascript:collapsElement('opencontent7')" title="" rel="nofollow"><p><span>07.</span>Как быть с пропущенными занятиями? Переносится ли оплата?</p></a>
                    <div id="opencontent7" style="display: none" class="open-text">
<p class="text-3">Мы предоставляем возможность восполнить пропущенные занятия в другой день по предварительной договоренности с преподавателем. На сроки оплаты отработка пропущенных занятий не влияет.</p>
</div>
                     <a class="open-content" href="javascript:collapsElement('opencontent8')" title="" rel="nofollow"><p><span>08.</span>Как часто надо оплачивать курсы?</p></a>

<div id="opencontent8" style="display: none" class="open-text">
<p class="text-3">Вы можете выбрать удобную вам схему оплаты: помесячную, половина курса и единовременную. Если вы платите помесячно, то оплата вносится до 1 числа месяца. При оплате половины или всего курса сразу предоставляется скидка.</p>
</div>               
         
 <a class="open-content" href="javascript:collapsElement('opencontent9')" title="" rel="nofollow"><p><span>09.</span>Кто ваши преподаватели?</p></a>

<div id="opencontent9" style="display: none" class="open-text">
<p class="text-3">Наши преподаватели – репетиторы с опытом подготовки к экзаменам от 3 лет. Каждый имеет солидное портфолио с историями успеха своих учеников и теплыми словами благодарности. К тому же абсолютное большинство из них сами сдали ЕГЭ на высокие баллы и на своем опыте проверили, как это.</p>
</div>     
 <a class="open-content" href="javascript:collapsElement('opencontent10')" title="" rel="nofollow"><p><span>10.</span>Являются ли ваши преподаватели экспертами ЕГЭ?</p></a>

<div id="opencontent10" style="display: none" class="open-text">
<p class="text-3">Среди наших преподавателей есть эксперты ЕГЭ/ОГЭ. Однако это не является обязательным требованием, так как статус эксперта свидетельствует лишь о допуске к проверке работ, но не гарантирует умение доходчиво объяснять материал.</p>
</div>     

<a class="open-content" href="javascript:collapsElement('opencontent11')" title="" rel="nofollow"><p><span>11.</span>Как можно оплатить курсы?</p></a>

<div id="opencontent11" style="display: none" class="open-text">
<p class="text-3">У нас предусмотрен наличный и безналичный расчёт. Для вашего удобства деньги можно передавать с ребенком преподавателю.</p>
</div>               
         
 <a class="open-content" href="javascript:collapsElement('opencontent12')" title="" rel="nofollow"><p><span>12.</span>Занимаетесь ли вы в каникулы?</p></a>

<div id="opencontent12" style="display: none" class="open-text">
<p class="text-3">На январских каникулах занятий нет. На осенних и весенних каникулах могут проводиться занятия в зависимости от расписания группы. Уточнить информацию по конкретной группе можно у администратора.</p>
</div>     
 <a class="open-content" href="javascript:collapsElement('opencontent13')" title="" rel="nofollow"><p><span>13.</span>Можно ли присоединиться к группе после запуска курса?</p></a>

<div id="opencontent13" style="display: none" class="open-text">
<p class="text-3">Да, такая возможность существует. Для этого нужно написать входное тестирование. Мы подберем соответствующую уровню группу. Преподаватель поможет влиться в учебный процесс, вышлет все методические материалы и с удовольствием ответит на возникшие вопросы.</p>
</div>     

 <a class="open-content" href="javascript:collapsElement('opencontent14')" title="" rel="nofollow"><p><span>14.</span>Подойдут ли мне групповые занятия?</p></a>

<div id="opencontent14" style="display: none" class="open-text">
<p class="text-3">Групповые занятия эффективны для абсолютного большинства школьников.

Во-первых, мы формируем группы в соответствии с уровнем учеников. Значит, ребенок будет чувствовать себя наравне с окружающими. Он не будет отставать или скучать на занятии.

Во-вторых, размер группы позволяет сохранить элементы индивидуальной работы. У преподавателя есть время ответить на вопросы всех учеников, проверить у каждого решения в тетради и помочь исправить ошибки.

В-третьих, групповые занятия предполагают больше инициативы, общения, самостоятельного решения, чем при индивидуальной работе. Все это позволяет быстрее запоминать теорию и применять ее на практике. После групповых занятий не возникает проблемы «с репетитором могу, а сам нет».</p>
</div>     
 <a class="open-content" href="javascript:collapsElement('opencontent15')" title="" rel="nofollow"><p><span>15.</span>Есть ли индивидуальные занятия? Сколько они стоят?</p></a>

<div id="opencontent15" style="display: none" class="open-text">
<p class="text-3">Все наши преподаватели проводят индивидуальные занятия. Стоимость, место и наличие свободного времени можно уточнить у администратора.</p>
</div>     

                  </div>
      
    </div>
  </div>
</div>

 <?php
 require_once $_SERVER['DOCUMENT_ROOT'].'/footer.php'; 
 ?>