<?php

// configure
$from = 'website_name <www.topworldrich.com>';
$sendTo = 'ahmadalaarg123@gmail.com,adwan.moath1@gmail.com';
$subject = 'New message from contact form';
$fields = array('name' => 'Name', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in email
$okMessage = 'Thank you, we will get back to you soon ';
$errorMessage = 'Looks like an error. Please try again later';

// let's do the sending

try
{
    $emailText = "You have new message from contact form\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

 echo '<script>alert("'.$responseArray['message'].'");</script>' ;
     echo '<script>location.href ="https://topworldrich.com/ahmad/index.html#contact_us";</script>' ;
