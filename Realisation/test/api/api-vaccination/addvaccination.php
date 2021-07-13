<?php
require_once (__DIR__.'/../../manager/vaccinationmanager.php');

$vaccination = new vaccination();
$vaccination->setid_vaccination($_POST["id_vaccination"]);
$vaccination->setid_vaccin($_POST["id_vaccin"]);
$vaccination->setid_enfant($_POST["id_enfant"]);
$vaccination->setdate_vaccination($_POST["date_vaccination"]);
$vaccination->setpoids($_POST["poids"]);
$addvaccinationManager = null;
$addvaccinationManager =  new vaccinationManager(); 
$addvaccinationQuery = $addvaccinationManager->add($vaccination);

?>