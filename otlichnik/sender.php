<?php

if(!empty($_POST['telephone'] ))
{
$to = "admin@otl-ege.ru";
$from = 'admin@otl-ege.ru';
$subject = "Заявка с сайта";
$message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['telephone'].';';


//нас интересуют исключительно AJAX запросы
if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest') {return;}

//фильтруем запрос данных с формы

$name = filter_input(INPUT_POST, 'name' );
$phone = filter_input(INPUT_POST, 'phone' );
$ques = filter_input(INPUT_POST, 'ques' );
$formname = filter_input(INPUT_POST, 'formname' );
$ref = filter_input(INPUT_POST, 'ref' );
$utm = filter_input(INPUT_POST, 'utm' );
$to = "admin@otl-ege.ru";
$from = 'admin@otl-ege.ru';


// список получателей(в нашем случае - один)
$recepient  = "admin@otl-ege.ru";

// Тема сообщения
$subject = "Заявка с сайта ";

// Сообщение для более менее приглядного вида в HTML
$message =   "Имя: " . $name . "\n";
$message .=   "Телефон: " . $phone . "\n";
$message .=   "Задача: " . $ques . "\n";


$headers = "Content-Type: text/plain; charset=utf-8\r\n";



// Отправляем сообщение
mail($recepient, $subject, $message, $headers);

?>