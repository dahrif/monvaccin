<?php 
require_once (__DIR__.'/../../manager/vaccinationmanager.php');

$deletevaccinationManager = null;
$deletevaccinationManager =  new vaccinationManager(); 
$deletevaccinationQuery = $deletevaccinationManager->delete($_POST["id_vaccination"]);

?>