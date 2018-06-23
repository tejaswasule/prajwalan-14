<?php

require'class.phpmailer.php';

include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

 

$mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch

$mail->IsSMTP(); // telling the class to use SMTP
try {

//getting data from PAGE

$name = $_POST['nameofparti'];
$clg = $_POST['nameofcol'];
$email = $_POST['nameofemail'];
$event = $_POST['eventname'];
$mob = $_POST['mobofparti'];
$subject='REGISTER THIS PARTICIPANT';


$mail->Host       = "prajwalan.org"; // SMTP server

$mail->SMTPDebug  = 2;                     // enables SMTP debug information (for testing)

$mail->SMTPAuth   = true;                  // enable SMTP authentication

$mail->Host       = "prajwalan.org"; // sets the SMTP server

$mail->Port       = 25;                    // set the SMTP port for the GMAIL server

$mail->Username   = "convener.website@prajwalan.org"; // SMTP account username

$mail->Password   = "wasule123";        // SMTP account password

$mail->AddReplyTo('convener.website@prajwalan.org', 'Tejas Wasule');

$mail->SetFrom('convener.website@prajwalan.org', 'Tejas Wasule');

$mail->Subject = 'REGISTER FOLLOWING PARTICIPANT TO MIS';

$mail->AltBody = 'To view the message, please use an HTML compatible email viewer!'; // optional - MsgHTML will create an alternate automatically





$receiver=array('bplan@prajwalan.org','circuitdesigning@prajwalan.org','contraption@prajwalan.org','googler@prajwalan.org','greenbuilding@prajwalan.org','junkyardwars@prajwalan.org','ppta@prajwalan.org','pptb@prajwalan.org','pptc@prajwalan.org','pptd@prajwalan.org','angrybirds@prajwalan.org','cadstrife@prajwalan.org','codefrenzy@prajwalan.org','encipher@prajwalan.org','lanbattle@prajwalan.org','modfusiona@prajwalan.org','modfusionb@prajwalan.org','modfusionc@prajwalan.org','modfusiond@prajwalan.org','rubikcube@prajwalan.org','trussamaze@prajwalan.org','junkart@prajwalan.org','themicpixel@prajwalan.org','technorun@prajwalan.org','prajwalantimes@prajwalan.org','madlabz@prajwalan.org','virtualpc@prajwalan.org','robotics@prajwalan.org','robotics@prajwalan.org','robotics@prajwalan.org','initiative@prajwalan.org');

$allevent=array('THE ENTREPRENAUR','CIRCUIT DESIGNING','CONTRIVANCE','GOOGLER','GREEN BUILDING','JUNKYARD WARS','PAPER PRESENTATION A','PAPER PRESENTATION B','PAPER PRESENTATION C','PAPER PRESENTATION D','GEEKY BIRDS','CAD STRIFE','CODE FRENZY','ENCIPHER','LAN BATTLE','MOD FUSION A','MOD FUSION B','MOD FUSION C','MOD FUSION D','RUBIK CUBE','TRUSS-A MAZE','JUNK ART','THEMIC PIXEL','TECHNO-RUN','PRAJWALAN TIMES','MAD-LABZ','VIRTUAL PC','GRID SOLVER','DEATH RACE','ROBO-SOCCER','POSTER PRESENTATION');

	for($i=0;$i<=30;$i++)
		{
		if($event==$allevent[$i])
			{
				
					$body='To'.' '.$allevent[$i].' '.'Team,'.'<br/><br/>'.
					'<table border="1px">'.
					'<tr>'.
						'<td width="300px">'.
								'<b>PARTICIPANT NAME-</b>'
						.'</td>'.		
						'<td>'.
							$name.
						'</td>'.	
					'</tr>'.
					'<tr>'.
						'<td width="200px">'.
							'<b>PARTICIPANT COLLEGE-</b>'
						.'</td>'	
						.'<td>'.
							$clg.
						'</td>'.
					'</tr>'.
					'<tr>'.		
						'<td>'.
							'<b>REGISTERED FOR-</b>'.
						'</td>'.
							
						'<td>'.
							$event.
						'</td>'.
						
					'</tr>'.
					'<tr>'.			
							'<td>'.
								'<b>PARTICIPANTS MOBILE NUMBER-</b>'
							.'</td>'.		
							'<td>'		
									.$mob.
							'</td>'.		
					'</tr>'.			
							'<td>'.	
								'<b>PARTICIPANTS EMAIL-</b>'.
							'</td>'	
							.'<td>'.	
								$email.
							'</td>'	
					.'</tr>'.'</table>'.		
							'<br/><br/><br/>'.'Note: Kindly click on NOT SPAM if you find this mail in your spam folder.<br/>It is Sytem generated email <b>DONOT REPLY</b> to this email'.'<br/><br/>'.'<b>WEB CONVENER</b><br/>Tejas Wasule<br/>+91 7798 555 633';
					$mail->MsgHTML($body);
					$mail->AddAddress($receiver[$i]);
					$mail->Send();
					$handler=fopen('new.txt','a');
					
					fwrite($handler,$name);
					fwrite($handler,'+');
					fwrite($handler,$clg);
					fwrite($handler,'+');
					fwrite($handler,$email);
					fwrite($handler,'+');
					fwrite($handler,$event);
					fwrite($handler,'+');
					fwrite($handler,$mob);
					fwrite($handler,'-->');					
					fclose($handler);
					
			
			}
		}

















} catch (phpmailerException $e) {

echo $e->errorMessage(); //Pretty error messages from PHPMailer

} catch (Exception $e) {

echo $e->getMessage(); //Boring error messages from anything else!

}
?>

