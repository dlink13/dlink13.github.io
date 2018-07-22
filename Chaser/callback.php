<?php
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
if( empty( $phone ) && empty( $name ) ){
	echo json_encode( array(
		'status' => "error",
		'err'	=> "empty field"
	));
}
else{
	// Настройки
	$from = "gorobo.spb@gmail.com"; // От кого
	$to = "gorobo.spb@gmail.com"; // Кому
	$subject = "Сообщение с сайта";
	$body = sprintf("Имя %s, телефон %s", $name, $phone );
	
	// Не трогать
	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= "From: ".$from."\r\n";
	$headers .= "Reply-To: ".$from."\r\n";
	
	$result = mail( $to, $subject, $body, $headers );
	$result ? $status = "success" : $status = "error";
	echo json_encode( array(
		'status' => $status
	));
}