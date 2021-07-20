<?php
require_once (__DIR__.'/../../manager/parentmanager.php');

$parent = new Parents;
$parent->setid_parent($_POST["id_parent"]);
$parent->setfirstname($_POST["firstname"]);
$parent->setlastname($_POST["lastname"]);
$parent->setgenre($_POST["genre"]);
$parent->setemail($_POST["email"]);
$parent->setpassword($_POST["password"]);
$parent->setphone($_POST["phone"]);
$parent->setphoto_profile($_POST["photo_profile"]);

$updateparentsManager = null;
$updateparentManager =  new parentManager(); 
$updateparentQuery = $updateparentManager->update($parent);
?>