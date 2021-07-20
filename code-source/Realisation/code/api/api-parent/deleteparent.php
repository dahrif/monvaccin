<?php 
require_once (__DIR__.'/../../manager/parentmanager.php');

$deleteparentManager = null;
$deleteparentManager =  new parentManager(); 
$deleteparentQuery = $deleteparentManager->delete($_POST["id"]);

?>