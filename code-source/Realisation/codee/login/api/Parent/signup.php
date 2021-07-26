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
    $client_arr=array(
        "status" => true,
        "message" => "Successfully Signup!",
        "id_client" => $client->id_client,
        "lastname" => $client->lastname,
        "email" => $client->email
    );
}
else{
    $parent_arr=array(
        "status" => false,
        "message" => "email already exists!"
    );
}
print_r(json_encode($parent_arr));
?>