<?php
include "../classes/user.php";
$user = new user();

if(isset($_POST['UserName']) && isset($_POST['UserPassword'])){
	$user->setUserName($_POST['UserName']);
	$user->setUserPassword(sha1($_POST['UserPassword']));
	$user->InsertUser();
	header("Location: ../index.php?success=1");
}
?>