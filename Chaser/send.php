<?php


//Лейбы для названий полей (input name)
$labels = array(
	'name' => 'Имя',
	'location' => 'Локация',
	'inqiry' => 'Inqiry',
	'phone' => 'Тел.',
	'email' => 'E-mail',
	'messengers' => 'Мессенджеры',
	'source' => 'Источник'
);

$to = 'dl.com'; //Кому
$from_mail = 'mail.com'; //От кого
$replyto = 'ail.com'; //Отвечать на этот адрес
$from_name = 'Имя отправителя'; 

//просто объявляем переменную, дальше подставится значение
$subject = '';
$message = '';
$file_name = '';
$file_new_name = '';
$file_size = '';



if(!empty($_POST)) {

	$message = '';

	foreach ($_POST as $key => $item) {

		if($key == 'source') {
			$subject = 'Новая заявка ' . $item;
		}

		$label = $key;

		if(isset($labels[$key])) {
			$label = $labels[$key];
		}

		if(!is_array($item)) {
			$message .= '<b>' . $label . '</b>: ' . $item . "<br>";
		} else {
			$message .= '<b>' . $label . ':</b><br>';
			foreach ($item as $array_item) {
				$message .= ' - ' . $array_item . "<br>";
			}
			$message .= "<br>";
		}
	}
}

if(!empty($_FILES && isset($_FILES['cv']))) {
	var_dump($_FILES['cv']);
	$file_name = $_FILES['cv']['tmp_name'];
	$file_new_name = $_FILES['cv']['name'];
	$file_size = $_FILES['cv']['size'];
}




sendMail($to,$from_mail,$from_name,$subject,$message,$file_name,$file_new_name,$file_size);


function sendMail($to,$from_mail,$from_name,$subject,$message,$file_name,$file_new_name,$file_size) {


		
		//Capture POST data from HTML form and Sanitize them, 
		$sender_name    = filter_var($_POST["sender_name"], FILTER_SANITIZE_STRING); //sender name

		
		/* //don't forget to validate empty fields 
		if(strlen($sender_name)<1){
			die('Name is too short or empty!');
		} 
		*/
		

		if($file_error > 0)
		{
			die('Upload error or No files uploaded');
		}
		//read from the uploaded file & base64_encode content for the mail


		if(!empty($file_name)) {
			$handle = fopen($file_name, "r");
			$content = fread($handle, $file_size);
			fclose($handle);
			$encoded_content = chunk_split(base64_encode($content));
		}


			$boundary = md5("sanwebe");
			//header
			$headers = "MIME-Version: 1.0\r\n"; 
			$headers .= "From:".$from_mail."\r\n"; 
			$headers .= "Reply-To: ".$from_name."" . "\r\n";
			$headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n"; 
			
			//plain text 
			$body = "--$boundary\r\n";
			$body .= "Content-Type: text/html; charset='utf-8'\r\n";
			$body .= "Content-Transfer-Encoding: base64\r\n\r\n"; 
			$body .= chunk_split(base64_encode($message)); 
			
			//attachment
			if(!empty($file_name)) {
				$body .= "--$boundary\r\n";
				$body .="Content-Type: $file_type; name=".$file_new_name."\r\n";
				$body .="Content-Disposition: attachment; filename=".$file_new_name."\r\n";
				$body .="Content-Transfer-Encoding: base64\r\n";
				$body .="X-Attachment-Id: ".rand(1000,99999)."\r\n\r\n"; 
				$body .= $encoded_content; 
			}
		
		$sentMail = @mail($to, $subject, $body, $headers);


		if($sentMail) //output success or failure messages
		{       
		    die('Thank you for your email');
		}else{
		    die(print_r($_POST));  
		}


}


?>