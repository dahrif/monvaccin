<?php
require_once (__DIR__.'/../../manager/enfantmanager.php');

$enfant = new Enfant;
$enfant->setid_enfant($_POST["id_enfant"]);
$enfant->setid_parent($_POST["id_parent"]);
$enfant->setnom_enfant($_POST["nom_enfant"]);
$enfant->setdate_naissance($_POST["date_naissance"]);
$enfant->setpoids_naissance($_POST["poids_naissance"]);
$enfant->setphoto_enfant($_POST["photo_enfant"]);

$updateenfantManager = null;
$updateenfantManager =  new enfantManager(); 
$updateenfantQuery = $updateenfantManager->update($enfant);
?>