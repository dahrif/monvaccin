<?php
require_once '../manager/productsManager.php';

        $productsManager = null;
        $getProductsManager = new productsManager();    
        $getproducts = $getProductsManager->getList();
        print_r(json_encode($getproducts));
?>