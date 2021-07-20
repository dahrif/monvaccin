<?php
require_once '../manager/productsManager.php';

$product = new Product();
$product->setFirst($_POST["Firstname"]);
$product->setLast($_POST["Lastname"]);
$product->setMatricule($_POST["Matricule"]);
$product->setEmail($_POST["Email"]);

$addProductManager = null;
$addProductManager =  new productsManager(); 
$addProductQuery = $addProductManager->add($product);

?>