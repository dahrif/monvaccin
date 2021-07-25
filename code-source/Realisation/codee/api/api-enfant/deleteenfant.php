<?php 
require_once (__DIR__.'/../../manager/enfantmanager.php');

$deleteenfantManager = null;
$deleteenfantManager =  new enfantManager(); 
$deleteenfantQuery = $deleteenfantManager->delete($_POST["id_enfant"]);

?>
