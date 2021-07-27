<?php
 
// get database connection
include_once '../config/database.php';
 
// instantiate user object
include_once '../objects/user.php';
 
$database = new Database();
$db = $database->getConnection();
 
$parent = new Parents($db);
 
// set parent property values
$parent->email = $_POST['email'];
$parent->password = base64_encode($_POST['password']);
$parent->lastname = $_POST['lastname'];
$parent->created = date('Y-m-d H:i:s');
 
// create the parent
if($parent->signup()){
    
        header('location:../../login.html');
  
}

?>