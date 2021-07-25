<?php
require_once (__DIR__.'/../../manager/enfantmanager.php');

$enfant = new Enfant;
$enfant->setid_enfant($_POST["id_enfant"]);
$enfant->setnom_enfant($_POST["nom_enfant"]);
$enfant->setdate_naissance($_POST["date_naissance"]);
$enfant->setpoids_naissance($_POST["poids_naissance"]);
$enfant->setgenre($_POST["genre"]);

$updateenfantManager = null;
$updateenfantManager =  new enfantManager(); 
$updateenfantQuery = $updateenfantManager->update($enfant);
?>