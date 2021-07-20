<?php
require_once(__DIR__.'../../model/parent.php');
class ParentManager {

	//Get Product
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$stack = array();
		$req = 'SELECT * FROM parent';
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$itm = new Parents($row);
			$itm->setid_parent($row["id_parent"]);
			$itm->setnom($row["nom"]);
			$itm->setprenom($row["prenom"]);
			$itm->setgenre($row["genre"]);
			$itm->setemail($row["email"]);
            $itm->setmot_de_passe($row["mot_de_passe"]);
			$itm->settelephone($row["telephone"]);


			array_push($stack, $itm);
		}
		return $stack;
	}

	//Add Product
	public function add($product){
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "INSERT INTO `parent`(`nom`, `prenom`,`genre`,`email`,) VALUES (:nom,:prenom,:genre,:email)";

		$addProductQuery = $dbh ->prepare($req);
		$addProductQuery -> bindParam(":nom",$product->getnom(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":prenom",$product->getprenom(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":genre",$product->getgenre(),PDO::PARAM_STR);
		$addProductQuery -> bindParam(":email",$product->getemail(),PDO::PARAM_STR);
        $addProductQuery -> bindParam(":mot_de_passe",$product->getmot_de_passe(),PDO::PARAM_STR);

		$addProductQuery->execute();
	}

	//Delete Product

	public function delete($id){
    	
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin", "root", "root2021");
		$req = "DELETE FROM parent WHERE id = $id ";
        $deleteProduct= $dbh->prepare($req);
        $deleteProduct->execute();
    }

	// Update Product
	public function update($Parent){
		$id = $Parent->getId();
		$dbh = new PDO("mysql:host=localhost;dbname=monvaccin","root","root2021");
		$req = "UPDATE parent SET nom = :nom,prenom = :prenom,genre = :genre,email = :email WHERE id = $id";
		$updateParentQuery = $dbh ->prepare($req);
		$updateParentQuery -> bindParam(":nom",$Parent->getnom(),PDO::PARAM_STR);
		$updateParentQuery -> bindParam(":prenom",$Parent->getprenom(),PDO::PARAM_STR);
		$updateParentQuery -> bindParam(":genre",$Parent->getgenre(),PDO::PARAM_STR);
		$updateParentQuery -> bindParam(":email",$Parent->getemail(),PDO::PARAM_STR);
        $updateParentQuery -> bindParam(":mot_de_passe",$Parent->getemail(),PDO::PARAM_STR);
        $updateParentQuery -> bindParam(":telephone",$Parent->gettelephone(),PDO::PARAM_STR);

		$updateParentQuery->execute();
	}
}


?>