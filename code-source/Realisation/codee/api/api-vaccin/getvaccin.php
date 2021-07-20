<?php
require_once(__DIR__.'/../../manager/vaccinmanager.php') ;

        $vaccinManager = null;
        $vaccinManager = new vaccinManager();    
        $vaccin = $vaccinManager->getList();
        print_r(json_encode($vaccin));
?>