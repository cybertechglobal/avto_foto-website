<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {

  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];

    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['name'])) {
    $errors[] = 'Name is empty';
  } else {
    $name = $_POST['name'];
  }

  if (!empty($_POST['company'])) {
    $company = $_POST['company'];
  }

  if (!empty($_POST['phone'])) {
    $phone = $_POST['phone'];
  }

  if (!empty($_POST['msg'])) {
    $msg = $_POST['msg'];
  }
    

    
  

  if (empty($errors)) {
    $date = date('j, F Y h:i A');

    $emailBody = "
    <html>
    <head>
    <title>$email is contacting you</title>
    </head>
    <body style=\"font-family: 'Roboto'; font-size: 14px\">
    <div style=\"padding:20px;\">

    Name: <span style=\"color:#626262\">$name</span>
    <br>
    Email: <span style=\"color:#626262\">$email</span>
    <br>
    Phone: <span style=\"color:#626262\">$phone</span>
    <br>
    Company: <span style=\"color:#626262\">$company</span>
    <br>
    Message: <span style=\"color:#626262\">$msg</span>
    <br>
    </div>
    </body>
    </html>
    ";

    $headers = 	'From: torlakovic.stefan@hotmail.com' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" .
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'torlak1993@hotmail.com';  
    $subject = 'Contacting you from catchphoto.ai';

    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;
    }
  }
}
?>

  <?php if (!empty($errors)) : ?>

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>


  <?php if (isset($sent) && $sent === true) : ?>

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>
