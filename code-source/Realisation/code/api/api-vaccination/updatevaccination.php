<?php
require_once (__DIR__.'/../../manager/vaccinationmanager.php');

$vaccination = new Vaccination;
$vaccination->setid_vaccination($_POST["id_vaccination"]);
$vaccination->setdate_vaccination($_POST["date_vaccination"]);
$vaccination->setpoids($_POST["poids"]);
$updatevaccinationManager = null;
$updatevaccinationManager =  new VaccinationManager(); 
$updatevaccinationQuery = $updatevaccinationManager->update($vaccination);
?>