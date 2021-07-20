<?php
require_once (__DIR__.'/../../manager/vaccinationmanager.php');

$vaccination = new Vaccination();
$vaccination->setdate_vaccination($_POST["date_vaccination"]);
$vaccination->setpoids($_POST["poids"]);
$addvaccinationManager = null;
$addvaccinationManager =  new vaccinationManager(); 
$addvaccinationQuery = $addvaccinationManager->add($vaccination);

?>