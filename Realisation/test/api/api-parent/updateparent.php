<?php
require_once (__DIR__.'/../../manager/parentmanager.php');

$parent = new Parents;
$parent->setid_parent($_POST["id_parent"]);
$parent->setnom($_POST["nom"]);
$parent->setprenom($_POST["prenom"]);
$parent->setgenre($_POST["genre"]);
$parent->setemail($_POST["email"]);
$parent->setmot_de_passe($_POST["mot_de_passe"]);
$parent->settelephone($_POST["telephone"]);
$parent->setphoto_profile($_POST["photo_profile"]);

$updateparentsManager = null;
$updateparentManager =  new parentManager(); 
$updateparentQuery = $updateparentManager->update($parent);
?>