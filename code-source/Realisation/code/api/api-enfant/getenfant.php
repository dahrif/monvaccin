<?php
require_once(__DIR__.'/../../manager/enfantmanager.php') ;

        $enfantManager = null;
        $enfantManager = new enfantManager();    
        $enfant = $enfantManager->getList();
        print_r(json_encode($enfant));
?>

