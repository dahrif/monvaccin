<?php
require_once '../manager/productsManager.php';


$deleteProductsManager = null;
$deleteProductManager =  new productsManager(); 
$deleteProductQuery = $deleteProductManager->delete($_POST["id"]);
?>