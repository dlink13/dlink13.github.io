<?php

//нас интересуют исключительно AJAX запросы
if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {return;}

//фильтруем запрос данных с формы

$name = filter_input(INPUT_POST, 'name' );
$email = filter_input(INPUT_POST, 'email' );
$phone = filter_input(INPUT_POST, 'phone' );
$ques = filter_input(INPUT_POST, 'ques' );
$formname = filter_input(INPUT_POST, 'formname' );
$ref = filter_input(INPUT_POST, 'ref' );
$utm = filter_input(INPUT_POST, 'utm' );

// список получателей(в нашем случае - один)
$recepient  = "zakaz@titan-dtp.ru";

// Тема сообщения
$subject = "Заявка с сайта titan-dtp";

// Сообщение для более менее приглядного вида в HTML
$message =   "Имя: " . $name . "\n";
$message .=   "Телефон: " . $phone . "\n";
$message .=   "Почта: " . $email . "\n";
$message .=   "Вопрос: " . $ques . "\n";
$message .=   "Имя формы: " . $formname . "\n";

$headers = "Content-Type: text/plain; charset=utf-8\r\n";



// Отправляем сообщение
mail($recepient, $subject, $message, $headers);

?>