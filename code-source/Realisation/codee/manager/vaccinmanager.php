<?php
require_once(__DIR__.'/../model/vaccin.php');

class VaccinManager {

	//Get vaccin
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$stack = array();
		$req = 'SELECT * FROM vaccin';
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$itm = new vaccin($row);
			$itm->setid_vaccin($row["id_vaccin"]);
			$itm->setnom_vaccin($row["nom_vaccin"]);
			$itm->setdescription($row["description"]);

			array_push($stack, $itm);
		}
		return $stack;
	}


}


?>