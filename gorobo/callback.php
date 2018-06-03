<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mailer/SMTP.php';
require 'mailer/Exception.php';
require 'mailer/PHPMailer.php';

$err = false;
$msg = '';
$email = '';

if (array_key_exists('subject', $_POST)) {
    $subject = substr(strip_tags($_POST['subject']), 0, 255);
} else {
    $subject = 'No subject given';
}

if (array_key_exists('name', $_POST)) {
    $name = substr(strip_tags($_POST['name']), 0, 255);
} else {
    $name = '';
}

if (array_key_exists('phone', $_POST)) {
    $phone = substr(strip_tags($_POST['phone']), 0, 255);
} else {
    $phone = '';
}

if (array_key_exists('email', $_POST) and PHPMailer::validateAddress($_POST['email'])) {
    $email = $_POST['email'];
} else {
    $msg .= "Error: invalid email address provided";
    $err = true;
}

$templateHTML = 'С сайта отправлено сообщение! <br/>Имя: <b>%s</b><br/>Телефон: <b>%s</b><br/>Email: <b>%s</b><br/>Сообщение: <br/><i>%s</i>';
$templateAlt = 'С сайта отправлено сообщение! Имя: %s, Телефон: %s, Email: %s, Сообщение: %s';

if (!$err) {
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';   
	
    $mail->isSMTP();                             
    $mail->Port = 25;  
    $mail->SMTPAuth = true;                        
    $mail->SMTPSecure = 'tls';                         
    $mail->Host = 'smtp.example.com'; //адрес сервера                        
    $mail->Username = 'username@example.com'; //имя пользователя              
    $mail->Password = 'your_password'; //пароль                         
    
                      
    $mail->setFrom('username@example.com', 'Обратная связь'); //источник
    $mail->addAddress('username@example.com'); //Назначение
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);                                
    $mail->Subject = 'Сообщение с сайта';
    $mail->Body    =  sprintf($templateHTML, $name, $phone, $email, $subject);
    $mail->AltBody = sprintf($templateAlt, $name, $phone, $email, $subject);

    $is_ok = $mail->send();
}

// if(!$err && $is_ok){
//     include_once 'success.html';
// } else {
//     include_once 'error.html';
// }
$data = [
    'status' => ($is_ok ? 'success': 'error')
];

header('Content-type: application/json');
echo json_encode( $data );
