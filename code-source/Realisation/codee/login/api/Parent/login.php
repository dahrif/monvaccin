<?php
// include database and object files
include_once '../config/database.php';
include_once '../objects/user.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare user object
$parent = new Parents ($db);
// set ID property of parent to be edited
$parent->email = isset($_GET['email']) ? $_GET['email'] : die();
$parent->password = base64_encode(isset($_GET['password']) ? $_GET['password'] : die());
// read the details of parent to be edited
$stmt = $parent->login();
if($stmt->rowCount() > 0){
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
   
    header('location:../../../mes-enfants.html');
  
}
else{
    header('location:../../../mes-enfants.html');

  
}
// make it json format
print_r(json_encode($parent_arr));
?>