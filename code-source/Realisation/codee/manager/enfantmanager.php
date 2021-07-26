<?php
require_once(__DIR__.'/../model/enfant.php');

class enfantManager {

	//Get Enfant
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$stack = array();
		$req = 'SELECT * FROM enfant';
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$itm = new Enfant($row);
			$itm->setid_enfant($row["id_enfant"]);
			$itm->setid_parent($row["id_parent"]);
			$itm->setnom_enfant($row["nom_enfant"]);
			$itm->setdate_naissance($row["date_naissance"]);
			$itm->setpoids_naissance($row["poids_naissance"]);
            $itm->setgenre($row["genre"]);


			array_push($stack, $itm);
		}
		return $stack;
	}

	//Add Enfant
	public function add($Enfant){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "INSERT INTO `enfant`(`nom_enfant`,`date_naissance`,`poids_naissance`,`genre`) VALUES (:nom_enfant,:date_naissance,:poids_naissance,:genre)";

		$addEnfantQuery = $dbh ->prepare($req);
		$addEnfantQuery -> bindParam(":nom_enfant",$Enfant->getnom_enfant(),PDO::PARAM_STR);
		$addEnfantQuery -> bindParam(":date_naissance",$Enfant->getdate_naissance(),PDO::PARAM_STR);
		$addEnfantQuery -> bindParam(":poids_naissance",$Enfant->getpoids_naissance(),PDO::PARAM_STR);
        $addEnfantQuery -> bindParam(":genre",$Enfant->getgenre(),PDO::PARAM_STR);
		$addEnfantQuery->execute();
	}

	//Delete Enfant

	public function delete($id){
    	
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin", "root", "root2021");

		$req = "DELETE FROM enfant WHERE id_enfant = $id ";
        $deleteEnfant= $dbh->prepare($req);
        $deleteEnfant->execute();
    }

	// Update Enfant
	public function update($Enfant){
		$id = $Enfant->getid_enfant();
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "UPDATE enfant SET nom_enfant = :nom_enfant,date_naissance = :date_naissance,poids_naissance = :poids_naissance,genre = :genre WHERE id_enfant = $id";
		$updateEnfantQuery = $dbh ->prepare($req);
		$updateEnfantQuery -> bindParam(":nom_enfant",$Enfant->getnom_enfant(),PDO::PARAM_STR);
		$updateEnfantQuery -> bindParam(":date_naissance",$Enfant->getdate_naissance(),PDO::PARAM_STR);
		$updateEnfantQuery -> bindParam(":poids_naissance",$Enfant->getpoids_naissance(),PDO::PARAM_STR);
        $updateEnfantQuery -> bindParam(":genre",$Enfant->getgenre(),PDO::PARAM_STR);
		$updateEnfantQuery->execute();
	}
}


?>