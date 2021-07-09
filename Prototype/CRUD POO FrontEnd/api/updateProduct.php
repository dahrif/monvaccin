<?php
require_once '../manager/productsManager.php';

$product = new Product;
$product->setId($_POST["id"]);
$product->setFirst($_POST["Firstname"]);
$product->setLast($_POST["Lastname"]);
$product->setMatricule($_POST["Matricule"]);
$product->setEmail($_POST["Email"]);

$updateProductsManager = null;
$updateProductManager =  new productsManager(); 
$updateProductQuery = $updateProductManager->update($product);
?>