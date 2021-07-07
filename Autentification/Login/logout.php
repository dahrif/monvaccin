<?php
	include_once("../connectToDB.php");	
	$_db=null;
	session_destroy();
	$output = array("msg"=>"vous êtes déconnecté", "loggedin"=>"false");	
	echo json_encode($output);
?>