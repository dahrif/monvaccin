<?php
session_start();
include "../classes/user.php";
	$user = new user();
	$user->setUserName($_SESSION['username']);
	$user->setUserPassword($_SESSION['userpassword']);
	if($user->UserLogin()==true){
		// The function UserLogin is called, userlogin decides if the user is going to 
		// an already started multigame or if user is going to indexMult to choose an opponent
		
		// The session variables are set
		$_SESSION['UserId']=$user->getUserId();
		$_SESSION['UserName']=$user->getUserName();
	}
?>