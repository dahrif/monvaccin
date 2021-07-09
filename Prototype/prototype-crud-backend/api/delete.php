<?php 
require_once '../manager/productsManager.php';

$deleteProductManager = null;
$deleteProductManager =  new productsManager(); 
$deleteProductQuery = $deleteProductManager->delete($_POST["id"]);

?>