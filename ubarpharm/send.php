<?php

//нас интересуют исключительно AJAX запросы
if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {return;}

//фильтруем запрос данных с формы

$name = filter_input(INPUT_POST, 'name' );
$email = filter_input(INPUT_POST, 'email' );
$phone = filter_input(INPUT_POST, 'phone' );

// список получателей(в нашем случае - один)
$recepient  = "mail@toscana-finance.ru";

// Тема сообщения
$subject = "Заявка с сайта";

// Сообщение для более менее приглядного вида в HTML
$message =   "Имя: " . $name . "\n";
$message .=   "Телефон: " . $phone . "\n";



$headers = "Content-Type: text/plain; charset=utf-8\r\n";



// Отправляем сообщение
mail($recepient, $subject, $message, $headers);
if(trim($_POST['phone'])){
if(mail($mail_to, "=?UTF-8?B?".base64_encode($mail_subject)."?=", $mail_message1)){
echo "Спасибо! Мы свяжемся с Вами в ближайшее время";
}else{echo "Спасибо! Мы свяжемся с Вами в ближайшее время";}
}else{echo "Введите номер телефона";}

?>