<?php
require_once(__DIR__.'/../model/vaccination.php') ;

class VaccinationManager {

	//Get vaccination
	public function getList(){
		$dbh = new PDO("mysql:host=localhost:3306;dbname=monvaccin","root","root2021");
		$stack = array();
		$req = 'SELECT * FROM vaccination LEFT OUTER JOIN vaccin ON vaccination.id_vaccin=vaccin.id_vaccin LEFT OUTER JOIN enfant on vaccination.id_enfant=enfant.id_enfant ORDER BY vaccination.id_vaccination';
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
			$itm->setnom_enfant($row["nom_enfant"]);
			$itm->setdate_naissance($row["date_naissance"]);
			$itm->setpoids_naissance($row["poids_naissance"]);

			array_push($stack, $itm);
		}
		return $stack;
	}

	//Add vaccination
	public function add($vaccination){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "INSERT INTO `vaccination`(`id_vaccin`, `id_enfant`,`date_vaccination`,`poids` ) VALUES (:id_vaccin,:id_enfant,:date_vaccination,:poids,";

		$addvaccinationQuery = $dbh ->prepare($req);
		$addvaccinationQuery -> bindParam(":id_vaccin",$vaccination->getid_vaccin(),PDO::PARAM_STR);
		$addvaccinationQuery -> bindParam(":id_enfant",$vaccination->getid_enfant(),PDO::PARAM_STR);
		$addvaccinationQuery -> bindParam(":date_vaccination",$vaccination->getdate_vaccination(),PDO::PARAM_STR);
		$addvaccinationQuery -> bindParam(":poids",$vaccination->getpoids(),PDO::PARAM_STR);
		$addvaccinationQuery->execute();
	}

	//Delete vaccination

	public function delete($id_vaccination){

		$id_vaccination = $vaccination->getid_vaccination();
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "UPDATE vaccination SET date_vaccination = NULL ,poids = NULL WHERE id_vaccination = $id_vaccination";
		$updatevaccinationQuery = $dbh ->prepare($req);
		$updatevaccinationQuery -> bindParam(":date_vaccination",$vaccination->getdate_vaccination(),PDO::PARAM_STR);
		$updatevaccinationQuery -> bindParam(":poids",$vaccination->getpoids(),PDO::PARAM_STR);
		$updatevaccinationQuery->execute();
    }

	// Update vaccination
	public function update($vaccination){
		$id_vaccination = $vaccination->getid_vaccination();
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "UPDATE vaccination SET date_vaccination = :date_vaccination,poids = :poids  WHERE id_vaccination = $id_vaccination";

		$updatevaccinationQuery = $dbh ->prepare($req);
		$updatevaccinationQuery -> bindParam(":date_vaccination",$vaccination->getdate_vaccination(),PDO::PARAM_STR);
		$updatevaccinationQuery -> bindParam(":poids",$vaccination->getpoids(),PDO::PARAM_STR);
		$updatevaccinationQuery->execute();
	}
}


?>