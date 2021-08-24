<?php
session_start();
// include database and object files
include_once '../config/database.php';
include_once '../objects/user.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare user object
$parent = new Parents ($db);
// set ID property of parent to be edited
$parent->email = isset($_POST['email']) ? $_POST['email'] : die();
$parent->password = base64_encode(isset($_POST['password']) ? $_POST['password'] : die());
// read the details of parent to be edited
$stmt = $parent->login();
if($stmt->rowCount() > 0){
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
        echo '<script>
				alert("Les données saisie sont incorrectes !"); 
				window.location.href="../../../login/login.html";
				</script>' ;
}

else{
    header('location:../../../mes-enfants.html');
}

?>