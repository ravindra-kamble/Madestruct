<?php

//lets get all from value

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)){  //if email and message field is not empty
    if(filter_var($email, FILTER_VALIDATE_EMAIL))
    {
      $reciever = "write2ravi14@gmail.com"; //email reciever email address
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message\n\nRegards,\n$name";
      $sender = "From: $email"; //sender email 
      if(mail($reciever, $subject, $body, $sender)){ //mail() is a inbuilt php function to send mail
          echo "Your message sent succesfully!";
      }
      else{
          echo "Sorry, fialed to send your message!";
      }
    }
    else{
        echo "enter a valid email address!";
    }
} else {
    echo "Email and Password feild is required!";
}
?>

