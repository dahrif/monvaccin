<?php
require_once(__DIR__.'/../../manager/vaccinationmanager.php') ;

        $vaccinationManager = null;
        $vaccinationManager = new vaccinationManager();    
        $vaccination = $vaccinationManager->getList();
        print_r(json_encode($vaccination));
?>