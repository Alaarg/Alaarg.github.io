<?php

if(isset($_FILES["file"])) {


$target_dir = "../uploads/";


$uploadOk = 1;
$fileType = strtolower(pathinfo($_FILES["file"]["name"],PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
$file_name = time()."_".rand(111111,999999).'.'.$fileType;
$target_file = $target_dir . $file_name;
// Check if file already exists

// Check file size
if ($_FILES["file"]["size"] > 1000000) {

     echo '<script>alert("Sorry, your file is too large.");</script>' ;
     echo '<script>location.href ="https://topworldrich.com/ahmad/upload.html";</script>' ;
     die();
   
}
// Allow certain file formats
if($fileType != "docx" && $fileType != "doc" && $fileType != "pdf" ) {
     echo '<script>alert("Sorry, only docx, doc, & pdf files are allowed. you have entered "'. $fileType.');</script>' ;
     echo '<script>location.href ="https://topworldrich.com/ahmad/upload.html";</script>' ;
   
     die();
}
if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
       
       
       // configure
$from = 'website_name <www.topworldrich.com>';
$sendTo = 'ahmadalaarg123@gmail.com,adwan.moath1@gmail.com';
$subject = 'New message from contact form';
$fields = array('name' => 'Name', 'email' => 'Email', 'plan' => 'Plan', 'contact_method' => 'Contact Method', 'phone' => 'Phone', 'file_url' => 'Attachment'); // array variable name => Text to appear in email
$okMessage = 'Thank you, we will get back to you soon ';
$errorMessage = 'Looks like an error. Please try again later';

// let's do the sending

    $emailText = "You have new message from order transaction form\n=============================\n";
$_POST['file_url'] = "https://topworldrich.com/ahmad/assets/uploads/".$file_name;
    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
           
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    if(mail($sendTo, $subject, $emailText, "From: " . $from)){
         $responseArray = array('type' => 'success', 'message' => $okMessage);
    }else {
         $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    }


 echo '<script>alert("'.$responseArray['message'].'");</script>' ;
     echo '<script>location.href ="https://topworldrich.com/ahmad/upload.html";</script>' ;
   die();
       
       
    } else {
         echo '<script>alert("Sorry, there was an error uploading your file.."'.$target_file.');</script>' ;
     echo '<script>location.href ="https://topworldrich.com/ahmad/upload.html";</script>' ;
       die();
    }

    
}else {
       echo '<script>alert("Sorry, there was an error uploading your file.");</script>' ;
     echo '<script>location.href ="https://topworldrich.com/ahmad/upload.html";</script>' ;
       die(); 
}

?>