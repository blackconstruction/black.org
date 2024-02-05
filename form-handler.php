<?php
$name=$_post['name'];
$visitor_email=$_post['email'];
$subject=$_post['subjext'];
$massage=$_post['message'];
$email_form='hzkubest6@gmail.com';

$email_subject='New Form Submission';

$email_body="user name: $name.\n) ".
            "user Email: $visitor_email\n) ".
            "subject: $subject\n) ".
            "user message: $massage\n) ";

            $to='hzkubest8@gmail.com';

            $headers="from: $email_form \r\n";

            $headers .= "Reply-to $visitor_emai \r\n ";
            mail($to,$email_subject,$email_body,$headers)
            header("location:contact.html");
?>