<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {

 /* if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];

    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }

  if (!empty($_POST['subscribe'])) {
    $subscribe = $_POST['subscribe'];
  }*/

  $email = $_POST['email']; 
  $name = $_POST['name'];
  $phone = $_POST['phone'];  
  $company = $_POST['company'];
  $msg = $_POST['message'];   
  

  if (empty($errors)) {
    $date = date('j, F Y h:i A');

    $emailBody = "
    <html>
    <head>
    <title>$email is contacting you</title>
    </head>
    <body style=\"background-color:#ececec; font-family: 'Google Sans'; font-size: 14px\">
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

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: ' . $email . "\r\n";
    $headers .= 'Reply-To: ' . $email . "\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();


    $to = 'info@автофото.рф';  
    $subject = 'Сontacting you from автофото.рф';

    if (mail($to, $subject, $emailBody, $headers, $email)) {
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