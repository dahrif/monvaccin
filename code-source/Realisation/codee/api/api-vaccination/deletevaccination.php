<?php 
require_once (__DIR__.'/../../manager/vaccinationmanager.php');

$vaccination = new Vaccination();
$deletevaccinationManager = null;
$deletevaccinationManager =  new vaccinationManager(); 
$deletevaccinationQuery = $deletevaccinationManager->delete($_POST["id_vaccination"]);

?>