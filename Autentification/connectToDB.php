<?php
if(!session_id()) session_start();




$dbhost 	= "localhost";
$dbname		= "first";
$dbuser		= "root";
$dbpass		= "root2021";
 
// database connection
try{
	$_db = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass, array(
                    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", 
					PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_PERSISTENT => true
                ));	
}catch(Exception $e){
	die("ERROR : ".$e->getMessage());
}
?>