<?php
include_once("../connectToDB.php");

if (isset($_POST['regusername'])) {
	$username = $_POST['regusername'];
	$password = sha1($_POST['regpassword']);
	$sql = "INSERT INTO users (UserName,UserPassword) VALUES (:UserName,:UserPassword)";
	$q = $_db->prepare($sql);
	$q->execute(array(':UserName'=>$username, ':UserPassword'=>$password));	
	$_SESSION['username'] = $username;
	$output = array("msg"=>"Salam $username! Vous venez de s'inscrire! Veuillez vous connecter pour utiliser votre compte !", "loggedin"=>"true");
	echo json_encode($output);	
}
?>
