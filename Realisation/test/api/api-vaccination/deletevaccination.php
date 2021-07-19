<?php 
require_once (__DIR__.'/../../manager/vaccinationmanager.php');

$vaccination = new Vaccination();
$vaccination->getdate_vaccination($_POST["date_vaccination"]);
$deletevaccinationManager = null;
$deletevaccinationManager =  new vaccinationManager(); 
$deletevaccinationQuery = $deletevaccinationManager->delete($_POST["date_vaccination"]);

?>