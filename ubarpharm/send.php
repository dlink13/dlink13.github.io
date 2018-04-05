<?php

//нас интересуют исключительно AJAX запросы
if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {return;}

//фильтруем запрос данных с формы

$name = filter_input(INPUT_POST, 'name' );
$email = filter_input(INPUT_POST, 'email' );
$phone = filter_input(INPUT_POST, 'phone' );
$text = filter_input(INPUT_POST, 'text' );
$select = filter_input(INPUT_POST, 'hero[]' );

// список получателей(в нашем случае - один)
$recepient  = "info@u-pharm.kz";

// Тема сообщения
$subject = "Заявка с сайта";

// Сообщение для более менее приглядного вида в HTML
$message =   "Имя: " . $name . "\n";
$message .=   "Телефон: " . $phone . "\n";
$message .=   "Форма: " . $email . "\n";
$message .=   "Продукт: " . $select . "\n";
$message .=   "Комментарий: " . $text . "\n";




$headers = "Content-Type: text/plain; charset=utf-8\r\n";



// Отправляем сообщение
mail($recepient, $subject, $message, $headers);
if(trim($_POST['phone'])){
if(mail($mail_to, "=?UTF-8?B?".base64_encode($mail_subject)."?=", $mail_message1)){
echo "Спасибо! Мы свяжемся с Вами в ближайшее время";
}else{echo "Спасибо! Мы свяжемся с Вами в ближайшее время";}
}else{echo "Введите номер телефона";}

?>