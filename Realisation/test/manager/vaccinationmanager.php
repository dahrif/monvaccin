<?php
require_once(__DIR__.'/../model/vaccination.php') ;

class VaccinationManager {

	//Get vaccination
	public function getList(){
		$dbh = new PDO("mysql:host=localhost:3306;dbname=monvaccin","root","root2021");
		$stack = array();
		$req = 'SELECT * FROM vaccination LEFT OUTER JOIN vaccin ON vaccination.id_vaccin=vaccin.id_vaccin ORDER BY vaccination.id_vaccination';
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$itm = new Vaccination($row);
			$itm->setid_vaccination($row["id_vaccination"]);
			$itm->setid_vaccin($row["id_vaccin"]);
			$itm->setid_enfant($row["id_enfant"]);
			$itm->setnom_vaccin($row["nom_vaccin"]);
			$itm->setdescription($row["description"]);
			$itm->setdate_vaccination($row["date_vaccination"]);
			$itm->setpoids($row["poids"]);
			array_push($stack, $itm);
		}
		return $stack;
	}

	//Add vaccination
	public function add($vaccination){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "INSERT INTO `vaccination`(`id_vaccin`, `id_enfant`,`date_vaccination`,`poids`) VALUES (:id_vaccin,:id_enfant,:date_vaccination,:poids)";

		$addvaccinationQuery = $dbh ->prepare($req);
		$addvaccinationQuery -> bindParam(":id_vaccin",$vaccination->getid_vaccin(),PDO::PARAM_STR);
		$addvaccinationQuery -> bindParam(":id_enfant",$vaccination->getid_enfant(),PDO::PARAM_STR);
		$addvaccinationQuery -> bindParam(":date_vaccination",$vaccination->getdate_vaccination(),PDO::PARAM_STR);
		$addvaccinationQuery -> bindParam(":poids",$vaccination->getpoids(),PDO::PARAM_STR);
		$addvaccinationQuery->execute();
	}

	//Delete vaccination

	public function delete($id_vaccination){
    	
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin", "root", "root2021");
		$req = "DELETE FROM vaccination WHERE id_vaccination = $id_vaccination";
        $deletevaccination= $dbh->prepare($req);
        $deletevaccination->execute();
    }

	// Update vaccination
	public function update($vaccination){
		$id_vaccination = $vaccination->getid_vaccination();
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "UPDATE vaccination SET id_vaccin = :id_vaccin,id_enfant = :id_enfant,date_vaccination = :date_vaccination,poids = :poids WHERE id_vaccination = $id_vaccination";
		$updatevaccinationQuery -> bindParam(":date_vaccination",$vaccination->getdate_vaccination(),PDO::PARAM_STR);
		$updatevaccinationQuery -> bindParam(":poids",$vaccination->getpoids(),PDO::PARAM_STR);
		$updatevaccinationQuery->execute();
	}
}


?>