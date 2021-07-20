<?php
require_once '../manager/productsManager.php';

$product = new Product();
$product->setId($_POST["id"]);
$product->setnumero($_POST["numero"]);
$product->setcapacite($_POST["capacite"]);
$product->setnb_tableaux($_POST["nb_tableaux"]);
$product->setformateur($_POST["formateur"]);
$addProductManager = null;
$addProductManager =  new productsManager(); 
$addProductQuery = $addProductManager->add($product);

?>