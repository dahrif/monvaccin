<?php
require_once(__DIR__.'/../../manager/parentmanager.php') ;

        $parentManager = null;
        $parentManager = new parentManager();    
        $parent = $parentManager->getList();
        print_r(json_encode($parent));
?>